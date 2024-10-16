/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetApiKeyRequest = {
  /**
   * The ID of the API key to retrieve
   */
  keyId: string;
};

/** @internal */
export const GetApiKeyRequest$inboundSchema: z.ZodType<
  GetApiKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  key_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "key_id": "keyId",
  });
});

/** @internal */
export type GetApiKeyRequest$Outbound = {
  key_id: string;
};

/** @internal */
export const GetApiKeyRequest$outboundSchema: z.ZodType<
  GetApiKeyRequest$Outbound,
  z.ZodTypeDef,
  GetApiKeyRequest
> = z.object({
  keyId: z.string(),
}).transform((v) => {
  return remap$(v, {
    keyId: "key_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiKeyRequest$ {
  /** @deprecated use `GetApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = GetApiKeyRequest$inboundSchema;
  /** @deprecated use `GetApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = GetApiKeyRequest$outboundSchema;
  /** @deprecated use `GetApiKeyRequest$Outbound` instead. */
  export type Outbound = GetApiKeyRequest$Outbound;
}
