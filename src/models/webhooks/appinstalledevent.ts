/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Event = {
  AppInstalled: "app.installed",
} as const;
export type Event = ClosedEnum<typeof Event>;

export type AppInstalledEventRequestBody = {
  /**
   * Information about the app
   */
  data: components.AppInstall;
  /**
   * Unix timestamp of the creation event
   */
  created: number;
  event: Event;
};

/** @internal */
export const Event$inboundSchema: z.ZodNativeEnum<typeof Event> = z.nativeEnum(
  Event,
);

/** @internal */
export const Event$outboundSchema: z.ZodNativeEnum<typeof Event> =
  Event$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
  /** @deprecated use `Event$inboundSchema` instead. */
  export const inboundSchema = Event$inboundSchema;
  /** @deprecated use `Event$outboundSchema` instead. */
  export const outboundSchema = Event$outboundSchema;
}

/** @internal */
export const AppInstalledEventRequestBody$inboundSchema: z.ZodType<
  AppInstalledEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.AppInstall$inboundSchema,
  created: z.number().int(),
  event: Event$inboundSchema,
});

/** @internal */
export type AppInstalledEventRequestBody$Outbound = {
  data: components.AppInstall$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const AppInstalledEventRequestBody$outboundSchema: z.ZodType<
  AppInstalledEventRequestBody$Outbound,
  z.ZodTypeDef,
  AppInstalledEventRequestBody
> = z.object({
  data: components.AppInstall$outboundSchema,
  created: z.number().int(),
  event: Event$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppInstalledEventRequestBody$ {
  /** @deprecated use `AppInstalledEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = AppInstalledEventRequestBody$inboundSchema;
  /** @deprecated use `AppInstalledEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = AppInstalledEventRequestBody$outboundSchema;
  /** @deprecated use `AppInstalledEventRequestBody$Outbound` instead. */
  export type Outbound = AppInstalledEventRequestBody$Outbound;
}

export function appInstalledEventRequestBodyToJSON(
  appInstalledEventRequestBody: AppInstalledEventRequestBody,
): string {
  return JSON.stringify(
    AppInstalledEventRequestBody$outboundSchema.parse(
      appInstalledEventRequestBody,
    ),
  );
}

export function appInstalledEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppInstalledEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppInstalledEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppInstalledEventRequestBody' from JSON`,
  );
}
