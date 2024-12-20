/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AppointmentRescheduledEventEvent = {
  AppointmentRescheduled: "appointment.rescheduled",
} as const;
export type AppointmentRescheduledEventEvent = ClosedEnum<
  typeof AppointmentRescheduledEventEvent
>;

/**
 * Appointment Rescheduled Event (Not implemented)
 */
export type AppointmentRescheduledEventRequestBody = {
  /**
   * Schema for representing a Regsitration for some scheduled event
   */
  data: components.Appointment;
  /**
   * Unix timestamp representing when the event was created
   */
  created: number;
  event: AppointmentRescheduledEventEvent;
};

/** @internal */
export const AppointmentRescheduledEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof AppointmentRescheduledEventEvent
> = z.nativeEnum(AppointmentRescheduledEventEvent);

/** @internal */
export const AppointmentRescheduledEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof AppointmentRescheduledEventEvent
> = AppointmentRescheduledEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppointmentRescheduledEventEvent$ {
  /** @deprecated use `AppointmentRescheduledEventEvent$inboundSchema` instead. */
  export const inboundSchema = AppointmentRescheduledEventEvent$inboundSchema;
  /** @deprecated use `AppointmentRescheduledEventEvent$outboundSchema` instead. */
  export const outboundSchema = AppointmentRescheduledEventEvent$outboundSchema;
}

/** @internal */
export const AppointmentRescheduledEventRequestBody$inboundSchema: z.ZodType<
  AppointmentRescheduledEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Appointment$inboundSchema,
  created: z.number().int(),
  event: AppointmentRescheduledEventEvent$inboundSchema,
});

/** @internal */
export type AppointmentRescheduledEventRequestBody$Outbound = {
  data: components.Appointment$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const AppointmentRescheduledEventRequestBody$outboundSchema: z.ZodType<
  AppointmentRescheduledEventRequestBody$Outbound,
  z.ZodTypeDef,
  AppointmentRescheduledEventRequestBody
> = z.object({
  data: components.Appointment$outboundSchema,
  created: z.number().int(),
  event: AppointmentRescheduledEventEvent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppointmentRescheduledEventRequestBody$ {
  /** @deprecated use `AppointmentRescheduledEventRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    AppointmentRescheduledEventRequestBody$inboundSchema;
  /** @deprecated use `AppointmentRescheduledEventRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    AppointmentRescheduledEventRequestBody$outboundSchema;
  /** @deprecated use `AppointmentRescheduledEventRequestBody$Outbound` instead. */
  export type Outbound = AppointmentRescheduledEventRequestBody$Outbound;
}

export function appointmentRescheduledEventRequestBodyToJSON(
  appointmentRescheduledEventRequestBody:
    AppointmentRescheduledEventRequestBody,
): string {
  return JSON.stringify(
    AppointmentRescheduledEventRequestBody$outboundSchema.parse(
      appointmentRescheduledEventRequestBody,
    ),
  );
}

export function appointmentRescheduledEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppointmentRescheduledEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppointmentRescheduledEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppointmentRescheduledEventRequestBody' from JSON`,
  );
}
