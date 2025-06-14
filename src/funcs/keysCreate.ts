/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PushPressCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { PushPressError } from "../models/errors/pushpresserror.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Create a new API Key
 *
 * @remarks
 * Creates a new API key for authenticating requests. Admins in your account can create and view API keys.Consider implementing key rotation policies for enhanced security.
 */
export function keysCreate(
  client: PushPressCore,
  security: operations.CreateApiKeySecurity,
  request: operations.CreateApiKeyRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.CreateApiKeyResponseBody,
    | errors.NotFound
    | errors.Unauthorized
    | errors.Timeout
    | errors.RateLimited
    | errors.BadRequest
    | errors.InternalServerError
    | PushPressError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    security,
    request,
    options,
  ));
}

async function $do(
  client: PushPressCore,
  security: operations.CreateApiKeySecurity,
  request: operations.CreateApiKeyRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.CreateApiKeyResponseBody,
      | errors.NotFound
      | errors.Unauthorized
      | errors.Timeout
      | errors.RateLimited
      | errors.BadRequest
      | errors.InternalServerError
      | PushPressError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.CreateApiKeyRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const path = pathToFunc("/keys")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
    "company-id": encodeSimple(
      "company-id",
      payload["company-id"] ?? client._options.companyId,
      { explode: false, charEncoding: "none" },
    ),
  }));

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "Authorization",
        type: "http:bearer",
        value: security?.bearer,
      },
    ],
  );

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "createApiKey",
    oAuth2Scopes: null,

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 1000,
          maxInterval: 30000,
          exponent: 2,
          maxElapsedTime: 300000,
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
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || 10000,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "401",
      "403",
      "404",
      "407",
      "408",
      "413",
      "414",
      "415",
      "422",
      "429",
      "431",
      "4XX",
      "500",
      "501",
      "502",
      "503",
      "504",
      "505",
      "506",
      "507",
      "508",
      "510",
      "511",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.CreateApiKeyResponseBody,
    | errors.NotFound
    | errors.Unauthorized
    | errors.Timeout
    | errors.RateLimited
    | errors.BadRequest
    | errors.InternalServerError
    | PushPressError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(201, operations.CreateApiKeyResponseBody$inboundSchema),
    M.jsonErr(404, errors.NotFound$inboundSchema),
    M.jsonErr([401, 403, 407], errors.Unauthorized$inboundSchema),
    M.jsonErr(408, errors.Timeout$inboundSchema),
    M.jsonErr(429, errors.RateLimited$inboundSchema),
    M.jsonErr([413, 414, 415, 422, 431], errors.BadRequest$inboundSchema),
    M.jsonErr(504, errors.Timeout$inboundSchema),
    M.jsonErr([501, 505], errors.NotFound$inboundSchema),
    M.jsonErr(
      [500, 502, 503, 506, 507, 508],
      errors.InternalServerError$inboundSchema,
    ),
    M.jsonErr(510, errors.BadRequest$inboundSchema),
    M.jsonErr(511, errors.Unauthorized$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
