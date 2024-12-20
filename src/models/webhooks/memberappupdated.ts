/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Each platform has an appstore specific configuration
 */
export const Os = {
  Ios: "ios",
  Android: "android",
} as const;
/**
 * Each platform has an appstore specific configuration
 */
export type Os = ClosedEnum<typeof Os>;

export type Data = {
  /**
   * url of the app
   */
  url?: string | undefined;
  /**
   * Each platform has an appstore specific configuration
   */
  os?: Os | undefined;
};

export const MemberAppUpdatedEvent = {
  MemberappUpdated: "memberapp.updated",
} as const;
export type MemberAppUpdatedEvent = ClosedEnum<typeof MemberAppUpdatedEvent>;

/**
 * Member App Updated (Not Implemented)
 */
export type MemberAppUpdatedRequestBody = {
  data: Data;
  /**
   * Unix timestamp representing when the event was created
   */
  created: number;
  event: MemberAppUpdatedEvent;
};

/** @internal */
export const Os$inboundSchema: z.ZodNativeEnum<typeof Os> = z.nativeEnum(Os);

/** @internal */
export const Os$outboundSchema: z.ZodNativeEnum<typeof Os> = Os$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Os$ {
  /** @deprecated use `Os$inboundSchema` instead. */
  export const inboundSchema = Os$inboundSchema;
  /** @deprecated use `Os$outboundSchema` instead. */
  export const outboundSchema = Os$outboundSchema;
}

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({
    url: z.string().optional(),
    os: Os$inboundSchema.optional(),
  });

/** @internal */
export type Data$Outbound = {
  url?: string | undefined;
  os?: string | undefined;
};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({
    url: z.string().optional(),
    os: Os$outboundSchema.optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}

/** @internal */
export const MemberAppUpdatedEvent$inboundSchema: z.ZodNativeEnum<
  typeof MemberAppUpdatedEvent
> = z.nativeEnum(MemberAppUpdatedEvent);

/** @internal */
export const MemberAppUpdatedEvent$outboundSchema: z.ZodNativeEnum<
  typeof MemberAppUpdatedEvent
> = MemberAppUpdatedEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MemberAppUpdatedEvent$ {
  /** @deprecated use `MemberAppUpdatedEvent$inboundSchema` instead. */
  export const inboundSchema = MemberAppUpdatedEvent$inboundSchema;
  /** @deprecated use `MemberAppUpdatedEvent$outboundSchema` instead. */
  export const outboundSchema = MemberAppUpdatedEvent$outboundSchema;
}

/** @internal */
export const MemberAppUpdatedRequestBody$inboundSchema: z.ZodType<
  MemberAppUpdatedRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => Data$inboundSchema),
  created: z.number().int(),
  event: MemberAppUpdatedEvent$inboundSchema,
});

/** @internal */
export type MemberAppUpdatedRequestBody$Outbound = {
  data: Data$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const MemberAppUpdatedRequestBody$outboundSchema: z.ZodType<
  MemberAppUpdatedRequestBody$Outbound,
  z.ZodTypeDef,
  MemberAppUpdatedRequestBody
> = z.object({
  data: z.lazy(() => Data$outboundSchema),
  created: z.number().int(),
  event: MemberAppUpdatedEvent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MemberAppUpdatedRequestBody$ {
  /** @deprecated use `MemberAppUpdatedRequestBody$inboundSchema` instead. */
  export const inboundSchema = MemberAppUpdatedRequestBody$inboundSchema;
  /** @deprecated use `MemberAppUpdatedRequestBody$outboundSchema` instead. */
  export const outboundSchema = MemberAppUpdatedRequestBody$outboundSchema;
  /** @deprecated use `MemberAppUpdatedRequestBody$Outbound` instead. */
  export type Outbound = MemberAppUpdatedRequestBody$Outbound;
}

export function memberAppUpdatedRequestBodyToJSON(
  memberAppUpdatedRequestBody: MemberAppUpdatedRequestBody,
): string {
  return JSON.stringify(
    MemberAppUpdatedRequestBody$outboundSchema.parse(
      memberAppUpdatedRequestBody,
    ),
  );
}

export function memberAppUpdatedRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<MemberAppUpdatedRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MemberAppUpdatedRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MemberAppUpdatedRequestBody' from JSON`,
  );
}
