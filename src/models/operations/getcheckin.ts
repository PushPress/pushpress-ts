/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetCheckinRequest = {
  id: string;
};

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
