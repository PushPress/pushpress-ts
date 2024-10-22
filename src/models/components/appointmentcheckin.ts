/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Checkin for an appointment
 */
export type AppointmentCheckin = {
  /**
   * Unique identifier for the appointment
   */
  id: string;
  /**
   * Name of the appointment
   */
  name?: string | undefined;
  /**
   * UUID of the customer
   */
  customer: string;
  /**
   * UUID of the company
   */
  company: string;
  /**
   * Unix timestamp of the appointment
   */
  timestamp: number;
  type?: "AppointmentCheckin" | undefined;
};

/** @internal */
export const AppointmentCheckin$inboundSchema: z.ZodType<
  AppointmentCheckin,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string().optional(),
  customer: z.string(),
  company: z.string(),
  timestamp: z.number(),
  type: z.literal("AppointmentCheckin").optional(),
});

/** @internal */
export type AppointmentCheckin$Outbound = {
  id: string;
  name?: string | undefined;
  customer: string;
  company: string;
  timestamp: number;
  type: "AppointmentCheckin";
};

/** @internal */
export const AppointmentCheckin$outboundSchema: z.ZodType<
  AppointmentCheckin$Outbound,
  z.ZodTypeDef,
  AppointmentCheckin
> = z.object({
  id: z.string(),
  name: z.string().optional(),
  customer: z.string(),
  company: z.string(),
  timestamp: z.number(),
  type: z.literal("AppointmentCheckin").default("AppointmentCheckin" as const),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppointmentCheckin$ {
  /** @deprecated use `AppointmentCheckin$inboundSchema` instead. */
  export const inboundSchema = AppointmentCheckin$inboundSchema;
  /** @deprecated use `AppointmentCheckin$outboundSchema` instead. */
  export const outboundSchema = AppointmentCheckin$outboundSchema;
  /** @deprecated use `AppointmentCheckin$Outbound` instead. */
  export type Outbound = AppointmentCheckin$Outbound;
}
