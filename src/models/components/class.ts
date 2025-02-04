/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Reservation,
  Reservation$inboundSchema,
  Reservation$Outbound,
  Reservation$outboundSchema,
} from "./reservation.js";

/**
 * Location information about where the class took place
 */
export type Location = {
  name?: string | undefined;
};

/**
 * Schema for representing a scheduled class
 */
export type Class = {
  /**
   * Unique identifier for the class
   */
  id: string;
  /**
   * Unique identifier for the coach
   */
  coachUuid?: string | null | undefined;
  /**
   * Unique identifier for the assistant coach, if any
   */
  assistantCoachUuid: string | null;
  /**
   * Unique identifier for the client
   */
  company?: string | null | undefined;
  /**
   * Title of the calendar event
   */
  title?: string | null | undefined;
  /**
   * Name of the class type
   */
  classTypeName?: string | null | undefined;
  /**
   * Unique identifier for the location, if any
   */
  locationUuid?: string | null | undefined;
  /**
   * Location information about where the class took place
   */
  location?: Location | undefined;
  reservations?: Array<Reservation> | undefined;
  /**
   * Start time of the event as a Unix timestamp in seconds
   */
  start: number;
  /**
   * End time of the event as a Unix timestamp in seconds
   */
  end: number;
};

/** @internal */
export const Location$inboundSchema: z.ZodType<
  Location,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().default(""),
});

/** @internal */
export type Location$Outbound = {
  name: string;
};

/** @internal */
export const Location$outboundSchema: z.ZodType<
  Location$Outbound,
  z.ZodTypeDef,
  Location
> = z.object({
  name: z.string().default(""),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Location$ {
  /** @deprecated use `Location$inboundSchema` instead. */
  export const inboundSchema = Location$inboundSchema;
  /** @deprecated use `Location$outboundSchema` instead. */
  export const outboundSchema = Location$outboundSchema;
  /** @deprecated use `Location$Outbound` instead. */
  export type Outbound = Location$Outbound;
}

export function locationToJSON(location: Location): string {
  return JSON.stringify(Location$outboundSchema.parse(location));
}

export function locationFromJSON(
  jsonString: string,
): SafeParseResult<Location, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Location$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Location' from JSON`,
  );
}

/** @internal */
export const Class$inboundSchema: z.ZodType<Class, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    coachUuid: z.nullable(z.string()).optional(),
    assistantCoachUuid: z.nullable(z.string()),
    company: z.nullable(z.string()).optional(),
    title: z.nullable(z.string().default("")),
    classTypeName: z.nullable(z.string()).optional(),
    locationUuid: z.nullable(z.string()).optional(),
    location: z.lazy(() => Location$inboundSchema).optional(),
    reservations: z.array(Reservation$inboundSchema).optional(),
    start: z.number(),
    end: z.number(),
  });

/** @internal */
export type Class$Outbound = {
  id: string;
  coachUuid?: string | null | undefined;
  assistantCoachUuid: string | null;
  company?: string | null | undefined;
  title: string | null;
  classTypeName?: string | null | undefined;
  locationUuid?: string | null | undefined;
  location?: Location$Outbound | undefined;
  reservations?: Array<Reservation$Outbound> | undefined;
  start: number;
  end: number;
};

/** @internal */
export const Class$outboundSchema: z.ZodType<
  Class$Outbound,
  z.ZodTypeDef,
  Class
> = z.object({
  id: z.string(),
  coachUuid: z.nullable(z.string()).optional(),
  assistantCoachUuid: z.nullable(z.string()),
  company: z.nullable(z.string()).optional(),
  title: z.nullable(z.string().default("")),
  classTypeName: z.nullable(z.string()).optional(),
  locationUuid: z.nullable(z.string()).optional(),
  location: z.lazy(() => Location$outboundSchema).optional(),
  reservations: z.array(Reservation$outboundSchema).optional(),
  start: z.number(),
  end: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Class$ {
  /** @deprecated use `Class$inboundSchema` instead. */
  export const inboundSchema = Class$inboundSchema;
  /** @deprecated use `Class$outboundSchema` instead. */
  export const outboundSchema = Class$outboundSchema;
  /** @deprecated use `Class$Outbound` instead. */
  export type Outbound = Class$Outbound;
}

export function classToJSON(value: Class): string {
  return JSON.stringify(Class$outboundSchema.parse(value));
}

export function classFromJSON(
  jsonString: string,
): SafeParseResult<Class, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Class$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Class' from JSON`,
  );
}
