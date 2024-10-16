/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Platform API key
 */
export type ApiKey = {
  keyUuid: string;
  apiKey: string;
  clientUuid: string;
  name: string;
  description: string;
  createdAt: number;
  expiresAt?: number | null | undefined;
};

/** @internal */
export const ApiKey$inboundSchema: z.ZodType<ApiKey, z.ZodTypeDef, unknown> = z
  .object({
    keyUuid: z.string(),
    apiKey: z.string(),
    clientUuid: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.number(),
    expiresAt: z.nullable(z.number()).optional(),
  });

/** @internal */
export type ApiKey$Outbound = {
  keyUuid: string;
  apiKey: string;
  clientUuid: string;
  name: string;
  description: string;
  createdAt: number;
  expiresAt?: number | null | undefined;
};

/** @internal */
export const ApiKey$outboundSchema: z.ZodType<
  ApiKey$Outbound,
  z.ZodTypeDef,
  ApiKey
> = z.object({
  keyUuid: z.string(),
  apiKey: z.string(),
  clientUuid: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.number(),
  expiresAt: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiKey$ {
  /** @deprecated use `ApiKey$inboundSchema` instead. */
  export const inboundSchema = ApiKey$inboundSchema;
  /** @deprecated use `ApiKey$outboundSchema` instead. */
  export const outboundSchema = ApiKey$outboundSchema;
  /** @deprecated use `ApiKey$Outbound` instead. */
  export type Outbound = ApiKey$Outbound;
}
