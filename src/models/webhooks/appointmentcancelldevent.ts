/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AppointmentCancelldEventEvent = {
  AppointmentCanceled: "appointment.canceled",
} as const;
export type AppointmentCancelldEventEvent = ClosedEnum<
  typeof AppointmentCancelldEventEvent
>;

/**
 * Appointment Canceled Event
 */
export type AppointmentCancelldEventRequestBody = {
  /**
   * Schema for representing a Regsitration for some scheduled event
   */
  data: components.Appointment;
  /**
   * Unix timestamp representing when the event was created
   */
  created: number;
  event: AppointmentCancelldEventEvent;
};

/** @internal */
export const AppointmentCancelldEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof AppointmentCancelldEventEvent
> = z.nativeEnum(AppointmentCancelldEventEvent);

/** @internal */
export const AppointmentCancelldEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof AppointmentCancelldEventEvent
> = AppointmentCancelldEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppointmentCancelldEventEvent$ {
  /** @deprecated use `AppointmentCancelldEventEvent$inboundSchema` instead. */
  export const inboundSchema = AppointmentCancelldEventEvent$inboundSchema;
  /** @deprecated use `AppointmentCancelldEventEvent$outboundSchema` instead. */
  export const outboundSchema = AppointmentCancelldEventEvent$outboundSchema;
}

/** @internal */
export const AppointmentCancelldEventRequestBody$inboundSchema: z.ZodType<
  AppointmentCancelldEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Appointment$inboundSchema,
  created: z.number().int(),
  event: AppointmentCancelldEventEvent$inboundSchema,
});

/** @internal */
export type AppointmentCancelldEventRequestBody$Outbound = {
  data: components.Appointment$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const AppointmentCancelldEventRequestBody$outboundSchema: z.ZodType<
  AppointmentCancelldEventRequestBody$Outbound,
  z.ZodTypeDef,
  AppointmentCancelldEventRequestBody
> = z.object({
  data: components.Appointment$outboundSchema,
  created: z.number().int(),
  event: AppointmentCancelldEventEvent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppointmentCancelldEventRequestBody$ {
  /** @deprecated use `AppointmentCancelldEventRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    AppointmentCancelldEventRequestBody$inboundSchema;
  /** @deprecated use `AppointmentCancelldEventRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    AppointmentCancelldEventRequestBody$outboundSchema;
  /** @deprecated use `AppointmentCancelldEventRequestBody$Outbound` instead. */
  export type Outbound = AppointmentCancelldEventRequestBody$Outbound;
}

export function appointmentCancelldEventRequestBodyToJSON(
  appointmentCancelldEventRequestBody: AppointmentCancelldEventRequestBody,
): string {
  return JSON.stringify(
    AppointmentCancelldEventRequestBody$outboundSchema.parse(
      appointmentCancelldEventRequestBody,
    ),
  );
}

export function appointmentCancelldEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppointmentCancelldEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AppointmentCancelldEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppointmentCancelldEventRequestBody' from JSON`,
  );
}
