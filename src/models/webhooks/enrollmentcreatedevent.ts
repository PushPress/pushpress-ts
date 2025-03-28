/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const EnrollmentCreatedEventEvent = {
  EnrollmentCreated: "enrollment.created",
} as const;
export type EnrollmentCreatedEventEvent = ClosedEnum<
  typeof EnrollmentCreatedEventEvent
>;

/**
 * Enrollment Created Event
 */
export type EnrollmentCreatedEventRequestBody = {
  /**
   * Schema representing a subscription that a customer has to a plan
   */
  data: components.Enrollment;
  /**
   * Unix timestamp representing when the event was created
   */
  created: number;
  event: EnrollmentCreatedEventEvent;
};

/** @internal */
export const EnrollmentCreatedEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof EnrollmentCreatedEventEvent
> = z.nativeEnum(EnrollmentCreatedEventEvent);

/** @internal */
export const EnrollmentCreatedEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof EnrollmentCreatedEventEvent
> = EnrollmentCreatedEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrollmentCreatedEventEvent$ {
  /** @deprecated use `EnrollmentCreatedEventEvent$inboundSchema` instead. */
  export const inboundSchema = EnrollmentCreatedEventEvent$inboundSchema;
  /** @deprecated use `EnrollmentCreatedEventEvent$outboundSchema` instead. */
  export const outboundSchema = EnrollmentCreatedEventEvent$outboundSchema;
}

/** @internal */
export const EnrollmentCreatedEventRequestBody$inboundSchema: z.ZodType<
  EnrollmentCreatedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Enrollment$inboundSchema,
  created: z.number().int(),
  event: EnrollmentCreatedEventEvent$inboundSchema,
});

/** @internal */
export type EnrollmentCreatedEventRequestBody$Outbound = {
  data: components.Enrollment$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const EnrollmentCreatedEventRequestBody$outboundSchema: z.ZodType<
  EnrollmentCreatedEventRequestBody$Outbound,
  z.ZodTypeDef,
  EnrollmentCreatedEventRequestBody
> = z.object({
  data: components.Enrollment$outboundSchema,
  created: z.number().int(),
  event: EnrollmentCreatedEventEvent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrollmentCreatedEventRequestBody$ {
  /** @deprecated use `EnrollmentCreatedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = EnrollmentCreatedEventRequestBody$inboundSchema;
  /** @deprecated use `EnrollmentCreatedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    EnrollmentCreatedEventRequestBody$outboundSchema;
  /** @deprecated use `EnrollmentCreatedEventRequestBody$Outbound` instead. */
  export type Outbound = EnrollmentCreatedEventRequestBody$Outbound;
}

export function enrollmentCreatedEventRequestBodyToJSON(
  enrollmentCreatedEventRequestBody: EnrollmentCreatedEventRequestBody,
): string {
  return JSON.stringify(
    EnrollmentCreatedEventRequestBody$outboundSchema.parse(
      enrollmentCreatedEventRequestBody,
    ),
  );
}

export function enrollmentCreatedEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<EnrollmentCreatedEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EnrollmentCreatedEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EnrollmentCreatedEventRequestBody' from JSON`,
  );
}
