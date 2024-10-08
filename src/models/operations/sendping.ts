/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SendPingRequestBody = {
  channel: string;
  message: string;
};

/** @internal */
export const SendPingRequestBody$inboundSchema: z.ZodType<
  SendPingRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel: z.string(),
  message: z.string(),
});

/** @internal */
export type SendPingRequestBody$Outbound = {
  channel: string;
  message: string;
};

/** @internal */
export const SendPingRequestBody$outboundSchema: z.ZodType<
  SendPingRequestBody$Outbound,
  z.ZodTypeDef,
  SendPingRequestBody
> = z.object({
  channel: z.string(),
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendPingRequestBody$ {
  /** @deprecated use `SendPingRequestBody$inboundSchema` instead. */
  export const inboundSchema = SendPingRequestBody$inboundSchema;
  /** @deprecated use `SendPingRequestBody$outboundSchema` instead. */
  export const outboundSchema = SendPingRequestBody$outboundSchema;
  /** @deprecated use `SendPingRequestBody$Outbound` instead. */
  export type Outbound = SendPingRequestBody$Outbound;
}
