/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AppointmentCancelledEventEvent = {
  AppointmentCancelled: "appointment.cancelled",
} as const;
export type AppointmentCancelledEventEvent = ClosedEnum<
  typeof AppointmentCancelledEventEvent
>;

/**
 * Appointment Cancelled Event (Not implemented)
 */
export type AppointmentCancelledEventRequestBody = {
  /**
   * Schema for representing a Regsitration for some scheduled event
   */
  data: components.Appointment;
  /**
   * Unix timestamp representing when the event was created
   */
  created: number;
  event: AppointmentCancelledEventEvent;
};

/** @internal */
export const AppointmentCancelledEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof AppointmentCancelledEventEvent
> = z.nativeEnum(AppointmentCancelledEventEvent);

/** @internal */
export const AppointmentCancelledEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof AppointmentCancelledEventEvent
> = AppointmentCancelledEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppointmentCancelledEventEvent$ {
  /** @deprecated use `AppointmentCancelledEventEvent$inboundSchema` instead. */
  export const inboundSchema = AppointmentCancelledEventEvent$inboundSchema;
  /** @deprecated use `AppointmentCancelledEventEvent$outboundSchema` instead. */
  export const outboundSchema = AppointmentCancelledEventEvent$outboundSchema;
}

/** @internal */
export const AppointmentCancelledEventRequestBody$inboundSchema: z.ZodType<
  AppointmentCancelledEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Appointment$inboundSchema,
  created: z.number().int(),
  event: AppointmentCancelledEventEvent$inboundSchema,
});

/** @internal */
export type AppointmentCancelledEventRequestBody$Outbound = {
  data: components.Appointment$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const AppointmentCancelledEventRequestBody$outboundSchema: z.ZodType<
  AppointmentCancelledEventRequestBody$Outbound,
  z.ZodTypeDef,
  AppointmentCancelledEventRequestBody
> = z.object({
  data: components.Appointment$outboundSchema,
  created: z.number().int(),
  event: AppointmentCancelledEventEvent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppointmentCancelledEventRequestBody$ {
  /** @deprecated use `AppointmentCancelledEventRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    AppointmentCancelledEventRequestBody$inboundSchema;
  /** @deprecated use `AppointmentCancelledEventRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    AppointmentCancelledEventRequestBody$outboundSchema;
  /** @deprecated use `AppointmentCancelledEventRequestBody$Outbound` instead. */
  export type Outbound = AppointmentCancelledEventRequestBody$Outbound;
}

export function appointmentCancelledEventRequestBodyToJSON(
  appointmentCancelledEventRequestBody: AppointmentCancelledEventRequestBody,
): string {
  return JSON.stringify(
    AppointmentCancelledEventRequestBody$outboundSchema.parse(
      appointmentCancelledEventRequestBody,
    ),
  );
}

export function appointmentCancelledEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppointmentCancelledEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppointmentCancelledEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppointmentCancelledEventRequestBody' from JSON`,
  );
}