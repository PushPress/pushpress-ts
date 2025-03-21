/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetEnrollmentGlobals = {
  companyId?: string | undefined;
};

export type GetEnrollmentRequest = {
  uuid: string;
  /**
   * When using multitenant API keys, specify the company
   */
  companyId?: string | undefined;
};

/** @internal */
export const GetEnrollmentGlobals$inboundSchema: z.ZodType<
  GetEnrollmentGlobals,
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
export type GetEnrollmentGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const GetEnrollmentGlobals$outboundSchema: z.ZodType<
  GetEnrollmentGlobals$Outbound,
  z.ZodTypeDef,
  GetEnrollmentGlobals
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
export namespace GetEnrollmentGlobals$ {
  /** @deprecated use `GetEnrollmentGlobals$inboundSchema` instead. */
  export const inboundSchema = GetEnrollmentGlobals$inboundSchema;
  /** @deprecated use `GetEnrollmentGlobals$outboundSchema` instead. */
  export const outboundSchema = GetEnrollmentGlobals$outboundSchema;
  /** @deprecated use `GetEnrollmentGlobals$Outbound` instead. */
  export type Outbound = GetEnrollmentGlobals$Outbound;
}

export function getEnrollmentGlobalsToJSON(
  getEnrollmentGlobals: GetEnrollmentGlobals,
): string {
  return JSON.stringify(
    GetEnrollmentGlobals$outboundSchema.parse(getEnrollmentGlobals),
  );
}

export function getEnrollmentGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetEnrollmentGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEnrollmentGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEnrollmentGlobals' from JSON`,
  );
}

/** @internal */
export const GetEnrollmentRequest$inboundSchema: z.ZodType<
  GetEnrollmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  "company-id": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
  });
});

/** @internal */
export type GetEnrollmentRequest$Outbound = {
  uuid: string;
  "company-id"?: string | undefined;
};

/** @internal */
export const GetEnrollmentRequest$outboundSchema: z.ZodType<
  GetEnrollmentRequest$Outbound,
  z.ZodTypeDef,
  GetEnrollmentRequest
> = z.object({
  uuid: z.string(),
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
export namespace GetEnrollmentRequest$ {
  /** @deprecated use `GetEnrollmentRequest$inboundSchema` instead. */
  export const inboundSchema = GetEnrollmentRequest$inboundSchema;
  /** @deprecated use `GetEnrollmentRequest$outboundSchema` instead. */
  export const outboundSchema = GetEnrollmentRequest$outboundSchema;
  /** @deprecated use `GetEnrollmentRequest$Outbound` instead. */
  export type Outbound = GetEnrollmentRequest$Outbound;
}

export function getEnrollmentRequestToJSON(
  getEnrollmentRequest: GetEnrollmentRequest,
): string {
  return JSON.stringify(
    GetEnrollmentRequest$outboundSchema.parse(getEnrollmentRequest),
  );
}

export function getEnrollmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetEnrollmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEnrollmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEnrollmentRequest' from JSON`,
  );
}
