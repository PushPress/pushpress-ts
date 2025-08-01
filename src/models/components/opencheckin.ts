/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Schema representing an open facility checkin
 */
export type OpenCheckin = {
  /**
   * Unique identifier for the checkin record
   */
  id: string;
  /**
   * UUID of the customer who checked in
   */
  customer: string;
  /**
   * UUID of the company
   */
  company: string;
  /**
   * Unix timestamp representing the time of checkin
   */
  timestamp: number;
  /**
   * UUID of the enrollment record, null if the checkin is not associated with a plan enrollment
   */
  enrollmentId?: string | null | undefined;
  /**
   * Indicates that this checkin is for an open facility
   */
  kind?: "open" | undefined;
};

/** @internal */
export const OpenCheckin$inboundSchema: z.ZodType<
  OpenCheckin,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  customer: z.string(),
  company: z.string(),
  timestamp: z.number(),
  enrollmentId: z.nullable(z.string()).optional(),
  kind: z.literal("open").default("open").optional(),
});

/** @internal */
export type OpenCheckin$Outbound = {
  id: string;
  customer: string;
  company: string;
  timestamp: number;
  enrollmentId?: string | null | undefined;
  kind: "open";
};

/** @internal */
export const OpenCheckin$outboundSchema: z.ZodType<
  OpenCheckin$Outbound,
  z.ZodTypeDef,
  OpenCheckin
> = z.object({
  id: z.string(),
  customer: z.string(),
  company: z.string(),
  timestamp: z.number(),
  enrollmentId: z.nullable(z.string()).optional(),
  kind: z.literal("open").default("open" as const),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpenCheckin$ {
  /** @deprecated use `OpenCheckin$inboundSchema` instead. */
  export const inboundSchema = OpenCheckin$inboundSchema;
  /** @deprecated use `OpenCheckin$outboundSchema` instead. */
  export const outboundSchema = OpenCheckin$outboundSchema;
  /** @deprecated use `OpenCheckin$Outbound` instead. */
  export type Outbound = OpenCheckin$Outbound;
}

export function openCheckinToJSON(openCheckin: OpenCheckin): string {
  return JSON.stringify(OpenCheckin$outboundSchema.parse(openCheckin));
}

export function openCheckinFromJSON(
  jsonString: string,
): SafeParseResult<OpenCheckin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpenCheckin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpenCheckin' from JSON`,
  );
}
