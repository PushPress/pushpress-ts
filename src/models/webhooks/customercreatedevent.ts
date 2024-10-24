/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";

export const CustomerCreatedEventEventType = {
  Created: "created",
} as const;
export type CustomerCreatedEventEventType = ClosedEnum<
  typeof CustomerCreatedEventEventType
>;

export type CustomerCreatedEventRequestBody = {
  /**
   * Schema representing a customer, former customer or lead served by Company
   */
  data: components.Customer;
  /**
   * Unix timestamp of the creation event
   */
  created: number;
  eventType: CustomerCreatedEventEventType;
};

/** @internal */
export const CustomerCreatedEventEventType$inboundSchema: z.ZodNativeEnum<
  typeof CustomerCreatedEventEventType
> = z.nativeEnum(CustomerCreatedEventEventType);

/** @internal */
export const CustomerCreatedEventEventType$outboundSchema: z.ZodNativeEnum<
  typeof CustomerCreatedEventEventType
> = CustomerCreatedEventEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerCreatedEventEventType$ {
  /** @deprecated use `CustomerCreatedEventEventType$inboundSchema` instead. */
  export const inboundSchema = CustomerCreatedEventEventType$inboundSchema;
  /** @deprecated use `CustomerCreatedEventEventType$outboundSchema` instead. */
  export const outboundSchema = CustomerCreatedEventEventType$outboundSchema;
}

/** @internal */
export const CustomerCreatedEventRequestBody$inboundSchema: z.ZodType<
  CustomerCreatedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Customer$inboundSchema,
  created: z.number().int(),
  eventType: CustomerCreatedEventEventType$inboundSchema,
});

/** @internal */
export type CustomerCreatedEventRequestBody$Outbound = {
  data: components.Customer$Outbound;
  created: number;
  eventType: string;
};

/** @internal */
export const CustomerCreatedEventRequestBody$outboundSchema: z.ZodType<
  CustomerCreatedEventRequestBody$Outbound,
  z.ZodTypeDef,
  CustomerCreatedEventRequestBody
> = z.object({
  data: components.Customer$outboundSchema,
  created: z.number().int(),
  eventType: CustomerCreatedEventEventType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerCreatedEventRequestBody$ {
  /** @deprecated use `CustomerCreatedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = CustomerCreatedEventRequestBody$inboundSchema;
  /** @deprecated use `CustomerCreatedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = CustomerCreatedEventRequestBody$outboundSchema;
  /** @deprecated use `CustomerCreatedEventRequestBody$Outbound` instead. */
  export type Outbound = CustomerCreatedEventRequestBody$Outbound;
}
