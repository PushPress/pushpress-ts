/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type SendPushRequestBody = {
  deviceTokens: Array<string>;
  title: string;
  body: string;
  metadata?: { [k: string]: any } | undefined;
};

export type SendPushRequest = {
  companyId?: string | undefined;
  requestBody: SendPushRequestBody;
};

/** @internal */
export const SendPushRequestBody$inboundSchema: z.ZodType<
  SendPushRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  device_tokens: z.array(z.string()),
  title: z.string(),
  body: z.string(),
  metadata: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    "device_tokens": "deviceTokens",
  });
});

/** @internal */
export type SendPushRequestBody$Outbound = {
  device_tokens: Array<string>;
  title: string;
  body: string;
  metadata?: { [k: string]: any } | undefined;
};

/** @internal */
export const SendPushRequestBody$outboundSchema: z.ZodType<
  SendPushRequestBody$Outbound,
  z.ZodTypeDef,
  SendPushRequestBody
> = z.object({
  deviceTokens: z.array(z.string()),
  title: z.string(),
  body: z.string(),
  metadata: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    deviceTokens: "device_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendPushRequestBody$ {
  /** @deprecated use `SendPushRequestBody$inboundSchema` instead. */
  export const inboundSchema = SendPushRequestBody$inboundSchema;
  /** @deprecated use `SendPushRequestBody$outboundSchema` instead. */
  export const outboundSchema = SendPushRequestBody$outboundSchema;
  /** @deprecated use `SendPushRequestBody$Outbound` instead. */
  export type Outbound = SendPushRequestBody$Outbound;
}

/** @internal */
export const SendPushRequest$inboundSchema: z.ZodType<
  SendPushRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string().optional(),
  RequestBody: z.lazy(() => SendPushRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SendPushRequest$Outbound = {
  companyId?: string | undefined;
  RequestBody: SendPushRequestBody$Outbound;
};

/** @internal */
export const SendPushRequest$outboundSchema: z.ZodType<
  SendPushRequest$Outbound,
  z.ZodTypeDef,
  SendPushRequest
> = z.object({
  companyId: z.string().optional(),
  requestBody: z.lazy(() => SendPushRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendPushRequest$ {
  /** @deprecated use `SendPushRequest$inboundSchema` instead. */
  export const inboundSchema = SendPushRequest$inboundSchema;
  /** @deprecated use `SendPushRequest$outboundSchema` instead. */
  export const outboundSchema = SendPushRequest$outboundSchema;
  /** @deprecated use `SendPushRequest$Outbound` instead. */
  export type Outbound = SendPushRequest$Outbound;
}
