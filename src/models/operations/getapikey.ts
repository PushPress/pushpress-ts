/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetApiKeyGlobals = {
  companyId?: string | undefined;
};

export type GetApiKeySecurity = {
  bearer: string;
};

export type GetApiKeyRequest = {
  id: string;
  companyId?: string | undefined;
};

/** @internal */
export const GetApiKeyGlobals$inboundSchema: z.ZodType<
  GetApiKeyGlobals,
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
export type GetApiKeyGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const GetApiKeyGlobals$outboundSchema: z.ZodType<
  GetApiKeyGlobals$Outbound,
  z.ZodTypeDef,
  GetApiKeyGlobals
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
export namespace GetApiKeyGlobals$ {
  /** @deprecated use `GetApiKeyGlobals$inboundSchema` instead. */
  export const inboundSchema = GetApiKeyGlobals$inboundSchema;
  /** @deprecated use `GetApiKeyGlobals$outboundSchema` instead. */
  export const outboundSchema = GetApiKeyGlobals$outboundSchema;
  /** @deprecated use `GetApiKeyGlobals$Outbound` instead. */
  export type Outbound = GetApiKeyGlobals$Outbound;
}

export function getApiKeyGlobalsToJSON(
  getApiKeyGlobals: GetApiKeyGlobals,
): string {
  return JSON.stringify(
    GetApiKeyGlobals$outboundSchema.parse(getApiKeyGlobals),
  );
}

export function getApiKeyGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetApiKeyGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiKeyGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiKeyGlobals' from JSON`,
  );
}

/** @internal */
export const GetApiKeySecurity$inboundSchema: z.ZodType<
  GetApiKeySecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  bearer: z.string(),
});

/** @internal */
export type GetApiKeySecurity$Outbound = {
  bearer: string;
};

/** @internal */
export const GetApiKeySecurity$outboundSchema: z.ZodType<
  GetApiKeySecurity$Outbound,
  z.ZodTypeDef,
  GetApiKeySecurity
> = z.object({
  bearer: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiKeySecurity$ {
  /** @deprecated use `GetApiKeySecurity$inboundSchema` instead. */
  export const inboundSchema = GetApiKeySecurity$inboundSchema;
  /** @deprecated use `GetApiKeySecurity$outboundSchema` instead. */
  export const outboundSchema = GetApiKeySecurity$outboundSchema;
  /** @deprecated use `GetApiKeySecurity$Outbound` instead. */
  export type Outbound = GetApiKeySecurity$Outbound;
}

export function getApiKeySecurityToJSON(
  getApiKeySecurity: GetApiKeySecurity,
): string {
  return JSON.stringify(
    GetApiKeySecurity$outboundSchema.parse(getApiKeySecurity),
  );
}

export function getApiKeySecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetApiKeySecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiKeySecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiKeySecurity' from JSON`,
  );
}

/** @internal */
export const GetApiKeyRequest$inboundSchema: z.ZodType<
  GetApiKeyRequest,
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
export type GetApiKeyRequest$Outbound = {
  id: string;
  "company-id"?: string | undefined;
};

/** @internal */
export const GetApiKeyRequest$outboundSchema: z.ZodType<
  GetApiKeyRequest$Outbound,
  z.ZodTypeDef,
  GetApiKeyRequest
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
export namespace GetApiKeyRequest$ {
  /** @deprecated use `GetApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = GetApiKeyRequest$inboundSchema;
  /** @deprecated use `GetApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = GetApiKeyRequest$outboundSchema;
  /** @deprecated use `GetApiKeyRequest$Outbound` instead. */
  export type Outbound = GetApiKeyRequest$Outbound;
}

export function getApiKeyRequestToJSON(
  getApiKeyRequest: GetApiKeyRequest,
): string {
  return JSON.stringify(
    GetApiKeyRequest$outboundSchema.parse(getApiKeyRequest),
  );
}

export function getApiKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetApiKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiKeyRequest' from JSON`,
  );
}
