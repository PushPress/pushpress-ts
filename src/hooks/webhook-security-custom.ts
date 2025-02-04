import {
  BeforeRequestContext,
  BeforeRequestHook,
  WebhookVerificationContext,
  WebhookVerificationHook,
} from "./types.js";

import { ERR, OK, Result } from "../types/fp.js";
import { WebhookAuthenticationError } from "../types/webhooks.js";

export class WebhookSecurityHook
  implements BeforeRequestHook, WebhookVerificationHook
{
  private auth = new WebhookSecurity();

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    if (!hookCtx.webhookRecipient) return request;
    return this.auth.sign({ secret: hookCtx.webhookRecipient.secret, request });
  }

  async verifyWebhook(
    _hookCtx: WebhookVerificationContext,
    { request, secret }: { request: Request; secret: string },
  ): Promise<Result<true, WebhookAuthenticationError>> {
    try {
      await this.auth.verify({ request, secret });
      return OK(true);
    } catch (e) {
      if (e instanceof WebhookAuthenticationError) return ERR(e);
      throw e;
    }
  }
}

const headerName = "webhook-signature";

export class WebhookSecurity {
  /**
   * Signs a webhook request by generating a signature using the provided secret
   * @returns A new Request object with the signature header added.
   */
  async sign({
    secret,
    request,
  }: {
    secret: string;
    request: Request;
  }): Promise<Request> {
    // Clone the original request to avoid mutating it
    const newRequest = request.clone();

    // Validation: Ensure the request has a body and a secret is provided
    this._assert(request.body, "Unable to sign webhook with missing body");
    this._assert(secret, "Unable to sign webhook, missing secret");

    const { data } = await request.json();
    this._assert(data, "Unable to sign webhook with missing data attribute");

    // Read the body content from the request

    // Safely access the SubtleCrypto interface for cryptographic operations
    const crypto = globalThis?.crypto?.subtle;
    this._assert(
      crypto,
      "SubtleCrypto not found, if you're using node 18, please upgrade to a more recent version of node",
    );

    // Encode the secret into bytes, assume UTF-8 encoding
    const encoder = new TextEncoder();
    const secretBytes = encoder.encode(secret).buffer;

    // Import the secret as a CryptoKey for HMAC signing
    const cryptoKey = await crypto.importKey(
      "raw",
      secretBytes,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );

    // Generate the HMAC signature for the request body
    const signatureBytes = await crypto.sign(
      "HMAC",
      cryptoKey,
      //@ts-expect-error -- speakeasy erecommend using node buffer api untile we need to support other runtimes
      Buffer.from(JSON.stringify(data)),
    );

    //@ts-expect-error -- cspeakeasy erecommend using node buffer api untile we need to support other runtimes
    const encodedSignature = Buffer.from(signatureBytes).toString("hex");

    // Add the signature to the request headers
    newRequest.headers.set(headerName, encodedSignature);

    return newRequest;
  }

  /**
   * Verifies the authenticity of a webhook request by comparing signatures
   */
  async verify({
    request,
    secret,
  }: {
    request: Request;
    secret: string;
  }): Promise<boolean> {
    this._assert(secret, "Unable to verify webhook missing secret");

    // Clone the request to avoid reading the body multiple times
    request = request.clone();

    // Retrieve the incoming signature from the request headers
    const incoming = request.headers.get(headerName);
    this._assert(incoming, "Unable to verify webhook missing signature");

    // Generate the expected signature using the provided secret
    const expectedRequest = await this.sign({ request, secret });

    const expected = expectedRequest.headers.get(headerName);

    // Compare the incoming signature with the expected signature
    this._assert(incoming === expected, "Invalid signature");
    return true;
  }

  private _assert(condition: any, message: string): asserts condition {
    if (!condition) throw new WebhookAuthenticationError(message);
  }
}
