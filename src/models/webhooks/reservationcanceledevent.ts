/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ReservationCanceledEventEvent = {
  ReservationCanceled: "reservation.canceled",
} as const;
export type ReservationCanceledEventEvent = ClosedEnum<
  typeof ReservationCanceledEventEvent
>;

/**
 * Reservation canceled Event
 */
export type ReservationCanceledEventRequestBody = {
  /**
   * Schema for representing a reservation for a class or event
   */
  data: components.Reservation;
  /**
   * Unix timestamp representing when the event was created
   */
  created: number;
  event: ReservationCanceledEventEvent;
};

/** @internal */
export const ReservationCanceledEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof ReservationCanceledEventEvent
> = z.nativeEnum(ReservationCanceledEventEvent);

/** @internal */
export const ReservationCanceledEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof ReservationCanceledEventEvent
> = ReservationCanceledEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReservationCanceledEventEvent$ {
  /** @deprecated use `ReservationCanceledEventEvent$inboundSchema` instead. */
  export const inboundSchema = ReservationCanceledEventEvent$inboundSchema;
  /** @deprecated use `ReservationCanceledEventEvent$outboundSchema` instead. */
  export const outboundSchema = ReservationCanceledEventEvent$outboundSchema;
}

/** @internal */
export const ReservationCanceledEventRequestBody$inboundSchema: z.ZodType<
  ReservationCanceledEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Reservation$inboundSchema,
  created: z.number().int(),
  event: ReservationCanceledEventEvent$inboundSchema,
});

/** @internal */
export type ReservationCanceledEventRequestBody$Outbound = {
  data: components.Reservation$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const ReservationCanceledEventRequestBody$outboundSchema: z.ZodType<
  ReservationCanceledEventRequestBody$Outbound,
  z.ZodTypeDef,
  ReservationCanceledEventRequestBody
> = z.object({
  data: components.Reservation$outboundSchema,
  created: z.number().int(),
  event: ReservationCanceledEventEvent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReservationCanceledEventRequestBody$ {
  /** @deprecated use `ReservationCanceledEventRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    ReservationCanceledEventRequestBody$inboundSchema;
  /** @deprecated use `ReservationCanceledEventRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    ReservationCanceledEventRequestBody$outboundSchema;
  /** @deprecated use `ReservationCanceledEventRequestBody$Outbound` instead. */
  export type Outbound = ReservationCanceledEventRequestBody$Outbound;
}

export function reservationCanceledEventRequestBodyToJSON(
  reservationCanceledEventRequestBody: ReservationCanceledEventRequestBody,
): string {
  return JSON.stringify(
    ReservationCanceledEventRequestBody$outboundSchema.parse(
      reservationCanceledEventRequestBody,
    ),
  );
}

export function reservationCanceledEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ReservationCanceledEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ReservationCanceledEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReservationCanceledEventRequestBody' from JSON`,
  );
}
