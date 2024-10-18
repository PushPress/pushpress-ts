/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCheckinGlobals = {
  companyId?: string | undefined;
};

export type GetCheckinRequest = {
  id: string;
};

/** @internal */
export const GetCheckinGlobals$inboundSchema: z.ZodType<
  GetCheckinGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string().optional(),
});

/** @internal */
export type GetCheckinGlobals$Outbound = {
  companyId?: string | undefined;
};

/** @internal */
export const GetCheckinGlobals$outboundSchema: z.ZodType<
  GetCheckinGlobals$Outbound,
  z.ZodTypeDef,
  GetCheckinGlobals
> = z.object({
  companyId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckinGlobals$ {
  /** @deprecated use `GetCheckinGlobals$inboundSchema` instead. */
  export const inboundSchema = GetCheckinGlobals$inboundSchema;
  /** @deprecated use `GetCheckinGlobals$outboundSchema` instead. */
  export const outboundSchema = GetCheckinGlobals$outboundSchema;
  /** @deprecated use `GetCheckinGlobals$Outbound` instead. */
  export type Outbound = GetCheckinGlobals$Outbound;
}

/** @internal */
export const GetCheckinRequest$inboundSchema: z.ZodType<
  GetCheckinRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetCheckinRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetCheckinRequest$outboundSchema: z.ZodType<
  GetCheckinRequest$Outbound,
  z.ZodTypeDef,
  GetCheckinRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCheckinRequest$ {
  /** @deprecated use `GetCheckinRequest$inboundSchema` instead. */
  export const inboundSchema = GetCheckinRequest$inboundSchema;
  /** @deprecated use `GetCheckinRequest$outboundSchema` instead. */
  export const outboundSchema = GetCheckinRequest$outboundSchema;
  /** @deprecated use `GetCheckinRequest$Outbound` instead. */
  export type Outbound = GetCheckinRequest$Outbound;
}
