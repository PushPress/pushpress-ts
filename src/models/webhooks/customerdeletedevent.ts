/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";

export const CustomerDeletedEventEventType = {
  Deleted: "deleted",
} as const;
export type CustomerDeletedEventEventType = ClosedEnum<
  typeof CustomerDeletedEventEventType
>;

export type CustomerDeletedEventRequestBody = {
  /**
   * Schema representing a customer, former customer or lead served by Company
   */
  data: components.Customer;
  /**
   * Unix timestamp of the deletion event
   */
  created: number;
  eventType: CustomerDeletedEventEventType;
};

/** @internal */
export const CustomerDeletedEventEventType$inboundSchema: z.ZodNativeEnum<
  typeof CustomerDeletedEventEventType
> = z.nativeEnum(CustomerDeletedEventEventType);

/** @internal */
export const CustomerDeletedEventEventType$outboundSchema: z.ZodNativeEnum<
  typeof CustomerDeletedEventEventType
> = CustomerDeletedEventEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerDeletedEventEventType$ {
  /** @deprecated use `CustomerDeletedEventEventType$inboundSchema` instead. */
  export const inboundSchema = CustomerDeletedEventEventType$inboundSchema;
  /** @deprecated use `CustomerDeletedEventEventType$outboundSchema` instead. */
  export const outboundSchema = CustomerDeletedEventEventType$outboundSchema;
}

/** @internal */
export const CustomerDeletedEventRequestBody$inboundSchema: z.ZodType<
  CustomerDeletedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Customer$inboundSchema,
  created: z.number().int(),
  eventType: CustomerDeletedEventEventType$inboundSchema,
});

/** @internal */
export type CustomerDeletedEventRequestBody$Outbound = {
  data: components.Customer$Outbound;
  created: number;
  eventType: string;
};

/** @internal */
export const CustomerDeletedEventRequestBody$outboundSchema: z.ZodType<
  CustomerDeletedEventRequestBody$Outbound,
  z.ZodTypeDef,
  CustomerDeletedEventRequestBody
> = z.object({
  data: components.Customer$outboundSchema,
  created: z.number().int(),
  eventType: CustomerDeletedEventEventType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerDeletedEventRequestBody$ {
  /** @deprecated use `CustomerDeletedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = CustomerDeletedEventRequestBody$inboundSchema;
  /** @deprecated use `CustomerDeletedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = CustomerDeletedEventRequestBody$outboundSchema;
  /** @deprecated use `CustomerDeletedEventRequestBody$Outbound` instead. */
  export type Outbound = CustomerDeletedEventRequestBody$Outbound;
}
