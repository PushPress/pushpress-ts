/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";

export const CheckinCreatedEventEventType = {
  Created: "created",
} as const;
export type CheckinCreatedEventEventType = ClosedEnum<
  typeof CheckinCreatedEventEventType
>;

export type CheckinCreatedEventRequestBody = {
  data?: components.Checkin | undefined;
  /**
   * Unix timestamp of the creation event
   */
  created?: number | undefined;
  eventType?: CheckinCreatedEventEventType | undefined;
};

/** @internal */
export const CheckinCreatedEventEventType$inboundSchema: z.ZodNativeEnum<
  typeof CheckinCreatedEventEventType
> = z.nativeEnum(CheckinCreatedEventEventType);

/** @internal */
export const CheckinCreatedEventEventType$outboundSchema: z.ZodNativeEnum<
  typeof CheckinCreatedEventEventType
> = CheckinCreatedEventEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckinCreatedEventEventType$ {
  /** @deprecated use `CheckinCreatedEventEventType$inboundSchema` instead. */
  export const inboundSchema = CheckinCreatedEventEventType$inboundSchema;
  /** @deprecated use `CheckinCreatedEventEventType$outboundSchema` instead. */
  export const outboundSchema = CheckinCreatedEventEventType$outboundSchema;
}

/** @internal */
export const CheckinCreatedEventRequestBody$inboundSchema: z.ZodType<
  CheckinCreatedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Checkin$inboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CheckinCreatedEventEventType$inboundSchema.optional(),
});

/** @internal */
export type CheckinCreatedEventRequestBody$Outbound = {
  data?: components.Checkin$Outbound | undefined;
  created?: number | undefined;
  eventType?: string | undefined;
};

/** @internal */
export const CheckinCreatedEventRequestBody$outboundSchema: z.ZodType<
  CheckinCreatedEventRequestBody$Outbound,
  z.ZodTypeDef,
  CheckinCreatedEventRequestBody
> = z.object({
  data: components.Checkin$outboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CheckinCreatedEventEventType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckinCreatedEventRequestBody$ {
  /** @deprecated use `CheckinCreatedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = CheckinCreatedEventRequestBody$inboundSchema;
  /** @deprecated use `CheckinCreatedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = CheckinCreatedEventRequestBody$outboundSchema;
  /** @deprecated use `CheckinCreatedEventRequestBody$Outbound` instead. */
  export type Outbound = CheckinCreatedEventRequestBody$Outbound;
}
