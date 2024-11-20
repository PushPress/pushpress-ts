/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SendEventGlobals = {
  companyId?: string | undefined;
};

export type SendEventRequestBody = {
  /**
   * Ably channel to send the event to. This is the name of the channel that the client will subscribe to.
   */
  channel: string;
  /**
   * event to send
   */
  event: string;
  /**
   * Optional metadata to attach to the event
   */
  data?: any | undefined;
};

export type SendEventRequest = {
  companyId?: string | undefined;
  requestBody: SendEventRequestBody;
};

/** @internal */
export const SendEventGlobals$inboundSchema: z.ZodType<
  SendEventGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "company-id": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
  });
});

/** @internal */
export type SendEventGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const SendEventGlobals$outboundSchema: z.ZodType<
  SendEventGlobals$Outbound,
  z.ZodTypeDef,
  SendEventGlobals
> = z.object({
  companyId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendEventGlobals$ {
  /** @deprecated use `SendEventGlobals$inboundSchema` instead. */
  export const inboundSchema = SendEventGlobals$inboundSchema;
  /** @deprecated use `SendEventGlobals$outboundSchema` instead. */
  export const outboundSchema = SendEventGlobals$outboundSchema;
  /** @deprecated use `SendEventGlobals$Outbound` instead. */
  export type Outbound = SendEventGlobals$Outbound;
}

export function sendEventGlobalsToJSON(
  sendEventGlobals: SendEventGlobals,
): string {
  return JSON.stringify(
    SendEventGlobals$outboundSchema.parse(sendEventGlobals),
  );
}

export function sendEventGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<SendEventGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendEventGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendEventGlobals' from JSON`,
  );
}

/** @internal */
export const SendEventRequestBody$inboundSchema: z.ZodType<
  SendEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel: z.string(),
  event: z.string(),
  data: z.any().optional(),
});

/** @internal */
export type SendEventRequestBody$Outbound = {
  channel: string;
  event: string;
  data?: any | undefined;
};

/** @internal */
export const SendEventRequestBody$outboundSchema: z.ZodType<
  SendEventRequestBody$Outbound,
  z.ZodTypeDef,
  SendEventRequestBody
> = z.object({
  channel: z.string(),
  event: z.string(),
  data: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendEventRequestBody$ {
  /** @deprecated use `SendEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = SendEventRequestBody$inboundSchema;
  /** @deprecated use `SendEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = SendEventRequestBody$outboundSchema;
  /** @deprecated use `SendEventRequestBody$Outbound` instead. */
  export type Outbound = SendEventRequestBody$Outbound;
}

export function sendEventRequestBodyToJSON(
  sendEventRequestBody: SendEventRequestBody,
): string {
  return JSON.stringify(
    SendEventRequestBody$outboundSchema.parse(sendEventRequestBody),
  );
}

export function sendEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SendEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendEventRequestBody' from JSON`,
  );
}

/** @internal */
export const SendEventRequest$inboundSchema: z.ZodType<
  SendEventRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "company-id": z.string().optional(),
  RequestBody: z.lazy(() => SendEventRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SendEventRequest$Outbound = {
  "company-id"?: string | undefined;
  RequestBody: SendEventRequestBody$Outbound;
};

/** @internal */
export const SendEventRequest$outboundSchema: z.ZodType<
  SendEventRequest$Outbound,
  z.ZodTypeDef,
  SendEventRequest
> = z.object({
  companyId: z.string().optional(),
  requestBody: z.lazy(() => SendEventRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    companyId: "company-id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendEventRequest$ {
  /** @deprecated use `SendEventRequest$inboundSchema` instead. */
  export const inboundSchema = SendEventRequest$inboundSchema;
  /** @deprecated use `SendEventRequest$outboundSchema` instead. */
  export const outboundSchema = SendEventRequest$outboundSchema;
  /** @deprecated use `SendEventRequest$Outbound` instead. */
  export type Outbound = SendEventRequest$Outbound;
}

export function sendEventRequestToJSON(
  sendEventRequest: SendEventRequest,
): string {
  return JSON.stringify(
    SendEventRequest$outboundSchema.parse(sendEventRequest),
  );
}

export function sendEventRequestFromJSON(
  jsonString: string,
): SafeParseResult<SendEventRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendEventRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendEventRequest' from JSON`,
  );
}
