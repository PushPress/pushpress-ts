/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetEventCheckinGlobals = {
  companyId?: string | undefined;
};

export type GetEventCheckinRequest = {
  uuid: string;
  companyId?: string | undefined;
};

/** @internal */
export const GetEventCheckinGlobals$inboundSchema: z.ZodType<
  GetEventCheckinGlobals,
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
export type GetEventCheckinGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const GetEventCheckinGlobals$outboundSchema: z.ZodType<
  GetEventCheckinGlobals$Outbound,
  z.ZodTypeDef,
  GetEventCheckinGlobals
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
export namespace GetEventCheckinGlobals$ {
  /** @deprecated use `GetEventCheckinGlobals$inboundSchema` instead. */
  export const inboundSchema = GetEventCheckinGlobals$inboundSchema;
  /** @deprecated use `GetEventCheckinGlobals$outboundSchema` instead. */
  export const outboundSchema = GetEventCheckinGlobals$outboundSchema;
  /** @deprecated use `GetEventCheckinGlobals$Outbound` instead. */
  export type Outbound = GetEventCheckinGlobals$Outbound;
}

/** @internal */
export const GetEventCheckinRequest$inboundSchema: z.ZodType<
  GetEventCheckinRequest,
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
export type GetEventCheckinRequest$Outbound = {
  uuid: string;
  "company-id"?: string | undefined;
};

/** @internal */
export const GetEventCheckinRequest$outboundSchema: z.ZodType<
  GetEventCheckinRequest$Outbound,
  z.ZodTypeDef,
  GetEventCheckinRequest
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
export namespace GetEventCheckinRequest$ {
  /** @deprecated use `GetEventCheckinRequest$inboundSchema` instead. */
  export const inboundSchema = GetEventCheckinRequest$inboundSchema;
  /** @deprecated use `GetEventCheckinRequest$outboundSchema` instead. */
  export const outboundSchema = GetEventCheckinRequest$outboundSchema;
  /** @deprecated use `GetEventCheckinRequest$Outbound` instead. */
  export type Outbound = GetEventCheckinRequest$Outbound;
}
