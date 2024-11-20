/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RevokeApiKeyGlobals = {
  companyId?: string | undefined;
};

export type RevokeApiKeySecurity = {
  bearer: string;
};

export type RevokeApiKeyRequest = {
  id: string;
  companyId?: string | undefined;
};

/** @internal */
export const RevokeApiKeyGlobals$inboundSchema: z.ZodType<
  RevokeApiKeyGlobals,
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
export type RevokeApiKeyGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const RevokeApiKeyGlobals$outboundSchema: z.ZodType<
  RevokeApiKeyGlobals$Outbound,
  z.ZodTypeDef,
  RevokeApiKeyGlobals
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
export namespace RevokeApiKeyGlobals$ {
  /** @deprecated use `RevokeApiKeyGlobals$inboundSchema` instead. */
  export const inboundSchema = RevokeApiKeyGlobals$inboundSchema;
  /** @deprecated use `RevokeApiKeyGlobals$outboundSchema` instead. */
  export const outboundSchema = RevokeApiKeyGlobals$outboundSchema;
  /** @deprecated use `RevokeApiKeyGlobals$Outbound` instead. */
  export type Outbound = RevokeApiKeyGlobals$Outbound;
}

export function revokeApiKeyGlobalsToJSON(
  revokeApiKeyGlobals: RevokeApiKeyGlobals,
): string {
  return JSON.stringify(
    RevokeApiKeyGlobals$outboundSchema.parse(revokeApiKeyGlobals),
  );
}

export function revokeApiKeyGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<RevokeApiKeyGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RevokeApiKeyGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RevokeApiKeyGlobals' from JSON`,
  );
}

/** @internal */
export const RevokeApiKeySecurity$inboundSchema: z.ZodType<
  RevokeApiKeySecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  bearer: z.string(),
});

/** @internal */
export type RevokeApiKeySecurity$Outbound = {
  bearer: string;
};

/** @internal */
export const RevokeApiKeySecurity$outboundSchema: z.ZodType<
  RevokeApiKeySecurity$Outbound,
  z.ZodTypeDef,
  RevokeApiKeySecurity
> = z.object({
  bearer: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeApiKeySecurity$ {
  /** @deprecated use `RevokeApiKeySecurity$inboundSchema` instead. */
  export const inboundSchema = RevokeApiKeySecurity$inboundSchema;
  /** @deprecated use `RevokeApiKeySecurity$outboundSchema` instead. */
  export const outboundSchema = RevokeApiKeySecurity$outboundSchema;
  /** @deprecated use `RevokeApiKeySecurity$Outbound` instead. */
  export type Outbound = RevokeApiKeySecurity$Outbound;
}

export function revokeApiKeySecurityToJSON(
  revokeApiKeySecurity: RevokeApiKeySecurity,
): string {
  return JSON.stringify(
    RevokeApiKeySecurity$outboundSchema.parse(revokeApiKeySecurity),
  );
}

export function revokeApiKeySecurityFromJSON(
  jsonString: string,
): SafeParseResult<RevokeApiKeySecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RevokeApiKeySecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RevokeApiKeySecurity' from JSON`,
  );
}

/** @internal */
export const RevokeApiKeyRequest$inboundSchema: z.ZodType<
  RevokeApiKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  "company-id": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
  });
});

/** @internal */
export type RevokeApiKeyRequest$Outbound = {
  id: string;
  "company-id"?: string | undefined;
};

/** @internal */
export const RevokeApiKeyRequest$outboundSchema: z.ZodType<
  RevokeApiKeyRequest$Outbound,
  z.ZodTypeDef,
  RevokeApiKeyRequest
> = z.object({
  id: z.string(),
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
export namespace RevokeApiKeyRequest$ {
  /** @deprecated use `RevokeApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = RevokeApiKeyRequest$inboundSchema;
  /** @deprecated use `RevokeApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = RevokeApiKeyRequest$outboundSchema;
  /** @deprecated use `RevokeApiKeyRequest$Outbound` instead. */
  export type Outbound = RevokeApiKeyRequest$Outbound;
}

export function revokeApiKeyRequestToJSON(
  revokeApiKeyRequest: RevokeApiKeyRequest,
): string {
  return JSON.stringify(
    RevokeApiKeyRequest$outboundSchema.parse(revokeApiKeyRequest),
  );
}

export function revokeApiKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<RevokeApiKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RevokeApiKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RevokeApiKeyRequest' from JSON`,
  );
}
