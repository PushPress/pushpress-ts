/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Detailed information about the type of the class
 */
export type ClassCheckinType = {
  /**
   * UUID of the class type
   */
  id: string;
  /**
   * Descriptive name of the class type
   */
  name: string;
};

/**
 * Role of the customer in the class
 */
export const ClassCheckinRole = {
  Staff: "staff",
  Coach: "coach",
  Assistant: "assistant",
  Attendee: "attendee",
} as const;
/**
 * Role of the customer in the class
 */
export type ClassCheckinRole = ClosedEnum<typeof ClassCheckinRole>;

/**
 * Schema representing a checkin for a class
 */
export type ClassCheckin = {
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
   * Name of the class that the customer checked into
   */
  name: string;
  /**
   * UUID of the class type
   */
  typeId: string;
  /**
   * UUID of the class
   */
  classId: string;
  /**
   * Detailed information about the type of the class
   */
  type: ClassCheckinType;
  /**
   * Indicates that this checkin is for a class
   */
  kind?: "class" | undefined;
  /**
   * Role of the customer in the class
   */
  role: ClassCheckinRole;
};

/** @internal */
export const ClassCheckinType$inboundSchema: z.ZodType<
  ClassCheckinType,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type ClassCheckinType$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const ClassCheckinType$outboundSchema: z.ZodType<
  ClassCheckinType$Outbound,
  z.ZodTypeDef,
  ClassCheckinType
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassCheckinType$ {
  /** @deprecated use `ClassCheckinType$inboundSchema` instead. */
  export const inboundSchema = ClassCheckinType$inboundSchema;
  /** @deprecated use `ClassCheckinType$outboundSchema` instead. */
  export const outboundSchema = ClassCheckinType$outboundSchema;
  /** @deprecated use `ClassCheckinType$Outbound` instead. */
  export type Outbound = ClassCheckinType$Outbound;
}

export function classCheckinTypeToJSON(
  classCheckinType: ClassCheckinType,
): string {
  return JSON.stringify(
    ClassCheckinType$outboundSchema.parse(classCheckinType),
  );
}

export function classCheckinTypeFromJSON(
  jsonString: string,
): SafeParseResult<ClassCheckinType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClassCheckinType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClassCheckinType' from JSON`,
  );
}

/** @internal */
export const ClassCheckinRole$inboundSchema: z.ZodNativeEnum<
  typeof ClassCheckinRole
> = z.nativeEnum(ClassCheckinRole);

/** @internal */
export const ClassCheckinRole$outboundSchema: z.ZodNativeEnum<
  typeof ClassCheckinRole
> = ClassCheckinRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassCheckinRole$ {
  /** @deprecated use `ClassCheckinRole$inboundSchema` instead. */
  export const inboundSchema = ClassCheckinRole$inboundSchema;
  /** @deprecated use `ClassCheckinRole$outboundSchema` instead. */
  export const outboundSchema = ClassCheckinRole$outboundSchema;
}

/** @internal */
export const ClassCheckin$inboundSchema: z.ZodType<
  ClassCheckin,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  customer: z.string(),
  company: z.string(),
  timestamp: z.number(),
  enrollmentId: z.nullable(z.string()).optional(),
  name: z.string(),
  typeId: z.string(),
  classId: z.string(),
  type: z.lazy(() => ClassCheckinType$inboundSchema),
  kind: z.literal("class").optional(),
  role: ClassCheckinRole$inboundSchema,
});

/** @internal */
export type ClassCheckin$Outbound = {
  id: string;
  customer: string;
  company: string;
  timestamp: number;
  enrollmentId?: string | null | undefined;
  name: string;
  typeId: string;
  classId: string;
  type: ClassCheckinType$Outbound;
  kind: "class";
  role: string;
};

/** @internal */
export const ClassCheckin$outboundSchema: z.ZodType<
  ClassCheckin$Outbound,
  z.ZodTypeDef,
  ClassCheckin
> = z.object({
  id: z.string(),
  customer: z.string(),
  company: z.string(),
  timestamp: z.number(),
  enrollmentId: z.nullable(z.string()).optional(),
  name: z.string(),
  typeId: z.string(),
  classId: z.string(),
  type: z.lazy(() => ClassCheckinType$outboundSchema),
  kind: z.literal("class").default("class" as const),
  role: ClassCheckinRole$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassCheckin$ {
  /** @deprecated use `ClassCheckin$inboundSchema` instead. */
  export const inboundSchema = ClassCheckin$inboundSchema;
  /** @deprecated use `ClassCheckin$outboundSchema` instead. */
  export const outboundSchema = ClassCheckin$outboundSchema;
  /** @deprecated use `ClassCheckin$Outbound` instead. */
  export type Outbound = ClassCheckin$Outbound;
}

export function classCheckinToJSON(classCheckin: ClassCheckin): string {
  return JSON.stringify(ClassCheckin$outboundSchema.parse(classCheckin));
}

export function classCheckinFromJSON(
  jsonString: string,
): SafeParseResult<ClassCheckin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClassCheckin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClassCheckin' from JSON`,
  );
}
