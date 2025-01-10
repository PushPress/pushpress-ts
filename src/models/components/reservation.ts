/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Checkin,
  Checkin$inboundSchema,
  Checkin$Outbound,
  Checkin$outboundSchema,
} from "./checkin.js";

/**
 * Current status of the reservation
 */
export const ReservationStatus = {
  Waitlisted: "waitlisted",
  CheckedIn: "checked-in",
  Reserved: "reserved",
  Cancelled: "cancelled",
  LateCancelled: "late-cancelled",
} as const;
/**
 * Current status of the reservation
 */
export type ReservationStatus = ClosedEnum<typeof ReservationStatus>;

/**
 * Schema for representing a reservation for a class or event
 */
export type Reservation = {
  /**
   * Unique identifier for the reservation
   */
  id: string;
  /**
   * Unique identifier for the scheduled calendar event the registration is for
   */
  reservedId: string;
  /**
   * Unique identifier for the customer
   */
  customerId?: string | null | undefined;
  /**
   * Unique identifier for the company
   */
  companyId?: string | null | undefined;
  /**
   * Unix timestamp of when the registration was made
   */
  registrationTimestamp: number;
  /**
   * Current status of the reservation
   */
  status: ReservationStatus;
  /**
   * Checkin for a class, event, appointment or an open facility
   */
  checkin?: Checkin | undefined;
};

/** @internal */
export const ReservationStatus$inboundSchema: z.ZodNativeEnum<
  typeof ReservationStatus
> = z.nativeEnum(ReservationStatus);

/** @internal */
export const ReservationStatus$outboundSchema: z.ZodNativeEnum<
  typeof ReservationStatus
> = ReservationStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReservationStatus$ {
  /** @deprecated use `ReservationStatus$inboundSchema` instead. */
  export const inboundSchema = ReservationStatus$inboundSchema;
  /** @deprecated use `ReservationStatus$outboundSchema` instead. */
  export const outboundSchema = ReservationStatus$outboundSchema;
}

/** @internal */
export const Reservation$inboundSchema: z.ZodType<
  Reservation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  reservedId: z.string(),
  customerId: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  registrationTimestamp: z.number(),
  status: ReservationStatus$inboundSchema,
  checkin: Checkin$inboundSchema.optional(),
});

/** @internal */
export type Reservation$Outbound = {
  id: string;
  reservedId: string;
  customerId?: string | null | undefined;
  companyId?: string | null | undefined;
  registrationTimestamp: number;
  status: string;
  checkin?: Checkin$Outbound | undefined;
};

/** @internal */
export const Reservation$outboundSchema: z.ZodType<
  Reservation$Outbound,
  z.ZodTypeDef,
  Reservation
> = z.object({
  id: z.string(),
  reservedId: z.string(),
  customerId: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  registrationTimestamp: z.number(),
  status: ReservationStatus$outboundSchema,
  checkin: Checkin$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reservation$ {
  /** @deprecated use `Reservation$inboundSchema` instead. */
  export const inboundSchema = Reservation$inboundSchema;
  /** @deprecated use `Reservation$outboundSchema` instead. */
  export const outboundSchema = Reservation$outboundSchema;
  /** @deprecated use `Reservation$Outbound` instead. */
  export type Outbound = Reservation$Outbound;
}

export function reservationToJSON(reservation: Reservation): string {
  return JSON.stringify(Reservation$outboundSchema.parse(reservation));
}

export function reservationFromJSON(
  jsonString: string,
): SafeParseResult<Reservation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Reservation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Reservation' from JSON`,
  );
}
