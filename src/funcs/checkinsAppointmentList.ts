/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PushPressCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
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
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * Get a list of appointment checkins
 *
 * @remarks
 * list appointment checkins. Includes details about the appointment, customer and staff
 */
export async function checkinsAppointmentList(
  client: PushPressCore,
  request: operations.ListAppointmentCheckinsRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.ListAppointmentCheckinsResponse,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ListAppointmentCheckinsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/checkins/appointment")();

  const query = encodeFormQuery({
    "after": payload.after,
    "before": payload.before,
    "customer": payload.customer,
    "next": payload.next,
  });

  const headers = new Headers({
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
    operationID: "listAppointmentCheckins",
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
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || 10000,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["401", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.ListAppointmentCheckinsResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.ListAppointmentCheckinsResponse$inboundSchema, {
      key: "Result",
    }),
    M.fail([401, "4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): Paginator<
    Result<
      operations.ListAppointmentCheckinsResponse,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  > => {
    const nextCursor = dlv(responseData, "data.next");
    if (nextCursor == null) {
      return () => null;
    }

    return () =>
      checkinsAppointmentList(
        client,
        {
          ...request,
          next: nextCursor,
        },
        options,
      );
  };

  const page = { ...result, next: nextFunc(raw) };
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
