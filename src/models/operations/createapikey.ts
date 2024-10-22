/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateApiKeySecurity = {
  bearer: string;
};

/**
 * Create a new key
 */
export type CreateApiKeyRequestBody = {
  name: string;
  description?: string | undefined;
  /**
   * unix timestamp in milliseconds
   */
  expiresAt?: number | undefined;
};

export type CreateApiKeyRequest = {
  companyId?: any | undefined;
  /**
   * Create a new key
   */
  requestBody: CreateApiKeyRequestBody;
};

/** @internal */
export const CreateApiKeySecurity$inboundSchema: z.ZodType<
  CreateApiKeySecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  bearer: z.string(),
});

/** @internal */
export type CreateApiKeySecurity$Outbound = {
  bearer: string;
};

/** @internal */
export const CreateApiKeySecurity$outboundSchema: z.ZodType<
  CreateApiKeySecurity$Outbound,
  z.ZodTypeDef,
  CreateApiKeySecurity
> = z.object({
  bearer: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApiKeySecurity$ {
  /** @deprecated use `CreateApiKeySecurity$inboundSchema` instead. */
  export const inboundSchema = CreateApiKeySecurity$inboundSchema;
  /** @deprecated use `CreateApiKeySecurity$outboundSchema` instead. */
  export const outboundSchema = CreateApiKeySecurity$outboundSchema;
  /** @deprecated use `CreateApiKeySecurity$Outbound` instead. */
  export type Outbound = CreateApiKeySecurity$Outbound;
}

/** @internal */
export const CreateApiKeyRequestBody$inboundSchema: z.ZodType<
  CreateApiKeyRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  expiresAt: z.number().optional(),
});

/** @internal */
export type CreateApiKeyRequestBody$Outbound = {
  name: string;
  description?: string | undefined;
  expiresAt?: number | undefined;
};

/** @internal */
export const CreateApiKeyRequestBody$outboundSchema: z.ZodType<
  CreateApiKeyRequestBody$Outbound,
  z.ZodTypeDef,
  CreateApiKeyRequestBody
> = z.object({
  name: z.string(),
  description: z.string().optional(),
  expiresAt: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApiKeyRequestBody$ {
  /** @deprecated use `CreateApiKeyRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateApiKeyRequestBody$inboundSchema;
  /** @deprecated use `CreateApiKeyRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateApiKeyRequestBody$outboundSchema;
  /** @deprecated use `CreateApiKeyRequestBody$Outbound` instead. */
  export type Outbound = CreateApiKeyRequestBody$Outbound;
}

/** @internal */
export const CreateApiKeyRequest$inboundSchema: z.ZodType<
  CreateApiKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.any().optional(),
  RequestBody: z.lazy(() => CreateApiKeyRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateApiKeyRequest$Outbound = {
  companyId?: any | undefined;
  RequestBody: CreateApiKeyRequestBody$Outbound;
};

/** @internal */
export const CreateApiKeyRequest$outboundSchema: z.ZodType<
  CreateApiKeyRequest$Outbound,
  z.ZodTypeDef,
  CreateApiKeyRequest
> = z.object({
  companyId: z.any().optional(),
  requestBody: z.lazy(() => CreateApiKeyRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApiKeyRequest$ {
  /** @deprecated use `CreateApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = CreateApiKeyRequest$inboundSchema;
  /** @deprecated use `CreateApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = CreateApiKeyRequest$outboundSchema;
  /** @deprecated use `CreateApiKeyRequest$Outbound` instead. */
  export type Outbound = CreateApiKeyRequest$Outbound;
}
