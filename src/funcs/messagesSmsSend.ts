/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { PushPressCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Send an SMS
 *
 * @remarks
 * Send an SMS message from the PushPress platform. Note that only first party apps can send SMS messages
 */
export async function messagesSmsSend(
  client: PushPressCore,
  request: operations.SendSmsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    any,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.SendSmsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const path = pathToFunc("/messages/sms/send")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "company-id": encodeSimple(
      "company-id",
      payload["company-id"] ?? client._options.companyId,
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "sendSms",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || 10000,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["401", "403", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    any,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, z.any()),
    M.fail([401, 403, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
