/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateApiKeyGlobals = {
  companyId?: string | undefined;
};

export type CreateApiKeySecurity = {
  bearer: string;
};

/**
 * Create a new API key
 */
export type CreateApiKeyRequestBody = {
  name: string;
  description?: string | undefined;
  /**
   * expiration unix timestamp in milliseconds
   */
  expiresAt?: number | undefined;
};

export type CreateApiKeyRequest = {
  /**
   * When using multitenant API keys, specify the company
   */
  companyId?: string | undefined;
  /**
   * Create a new API key
   */
  requestBody: CreateApiKeyRequestBody;
};

/**
 * Platform API key
 */
export type CreateApiKeyResponseBody = {
  keyUuid: string;
  companyId: string;
  name: string;
  description: string;
  createdAt: number;
  expiresAt?: number | null | undefined;
  /**
   * Newly created API key
   */
  apiKey: string;
};

/** @internal */
export const CreateApiKeyGlobals$inboundSchema: z.ZodType<
  CreateApiKeyGlobals,
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
export type CreateApiKeyGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const CreateApiKeyGlobals$outboundSchema: z.ZodType<
  CreateApiKeyGlobals$Outbound,
  z.ZodTypeDef,
  CreateApiKeyGlobals
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
export namespace CreateApiKeyGlobals$ {
  /** @deprecated use `CreateApiKeyGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateApiKeyGlobals$inboundSchema;
  /** @deprecated use `CreateApiKeyGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateApiKeyGlobals$outboundSchema;
  /** @deprecated use `CreateApiKeyGlobals$Outbound` instead. */
  export type Outbound = CreateApiKeyGlobals$Outbound;
}

export function createApiKeyGlobalsToJSON(
  createApiKeyGlobals: CreateApiKeyGlobals,
): string {
  return JSON.stringify(
    CreateApiKeyGlobals$outboundSchema.parse(createApiKeyGlobals),
  );
}

export function createApiKeyGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateApiKeyGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateApiKeyGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateApiKeyGlobals' from JSON`,
  );
}

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

export function createApiKeySecurityToJSON(
  createApiKeySecurity: CreateApiKeySecurity,
): string {
  return JSON.stringify(
    CreateApiKeySecurity$outboundSchema.parse(createApiKeySecurity),
  );
}

export function createApiKeySecurityFromJSON(
  jsonString: string,
): SafeParseResult<CreateApiKeySecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateApiKeySecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateApiKeySecurity' from JSON`,
  );
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

export function createApiKeyRequestBodyToJSON(
  createApiKeyRequestBody: CreateApiKeyRequestBody,
): string {
  return JSON.stringify(
    CreateApiKeyRequestBody$outboundSchema.parse(createApiKeyRequestBody),
  );
}

export function createApiKeyRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateApiKeyRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateApiKeyRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateApiKeyRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateApiKeyRequest$inboundSchema: z.ZodType<
  CreateApiKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "company-id": z.string().optional(),
  RequestBody: z.lazy(() => CreateApiKeyRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateApiKeyRequest$Outbound = {
  "company-id"?: string | undefined;
  RequestBody: CreateApiKeyRequestBody$Outbound;
};

/** @internal */
export const CreateApiKeyRequest$outboundSchema: z.ZodType<
  CreateApiKeyRequest$Outbound,
  z.ZodTypeDef,
  CreateApiKeyRequest
> = z.object({
  companyId: z.string().optional(),
  requestBody: z.lazy(() => CreateApiKeyRequestBody$outboundSchema),
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
export namespace CreateApiKeyRequest$ {
  /** @deprecated use `CreateApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = CreateApiKeyRequest$inboundSchema;
  /** @deprecated use `CreateApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = CreateApiKeyRequest$outboundSchema;
  /** @deprecated use `CreateApiKeyRequest$Outbound` instead. */
  export type Outbound = CreateApiKeyRequest$Outbound;
}

export function createApiKeyRequestToJSON(
  createApiKeyRequest: CreateApiKeyRequest,
): string {
  return JSON.stringify(
    CreateApiKeyRequest$outboundSchema.parse(createApiKeyRequest),
  );
}

export function createApiKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateApiKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateApiKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateApiKeyRequest' from JSON`,
  );
}

/** @internal */
export const CreateApiKeyResponseBody$inboundSchema: z.ZodType<
  CreateApiKeyResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  keyUuid: z.string(),
  companyId: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.number(),
  expiresAt: z.nullable(z.number()).optional(),
  apiKey: z.string(),
});

/** @internal */
export type CreateApiKeyResponseBody$Outbound = {
  keyUuid: string;
  companyId: string;
  name: string;
  description: string;
  createdAt: number;
  expiresAt?: number | null | undefined;
  apiKey: string;
};

/** @internal */
export const CreateApiKeyResponseBody$outboundSchema: z.ZodType<
  CreateApiKeyResponseBody$Outbound,
  z.ZodTypeDef,
  CreateApiKeyResponseBody
> = z.object({
  keyUuid: z.string(),
  companyId: z.string(),
  name: z.string(),
  description: z.string(),
  createdAt: z.number(),
  expiresAt: z.nullable(z.number()).optional(),
  apiKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApiKeyResponseBody$ {
  /** @deprecated use `CreateApiKeyResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateApiKeyResponseBody$inboundSchema;
  /** @deprecated use `CreateApiKeyResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateApiKeyResponseBody$outboundSchema;
  /** @deprecated use `CreateApiKeyResponseBody$Outbound` instead. */
  export type Outbound = CreateApiKeyResponseBody$Outbound;
}

export function createApiKeyResponseBodyToJSON(
  createApiKeyResponseBody: CreateApiKeyResponseBody,
): string {
  return JSON.stringify(
    CreateApiKeyResponseBody$outboundSchema.parse(createApiKeyResponseBody),
  );
}

export function createApiKeyResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateApiKeyResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateApiKeyResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateApiKeyResponseBody' from JSON`,
  );
}
