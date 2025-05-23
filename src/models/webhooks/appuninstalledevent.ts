/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const AppUninstalledEventEvent = {
  AppUninstalled: "app.uninstalled",
} as const;
export type AppUninstalledEventEvent = ClosedEnum<
  typeof AppUninstalledEventEvent
>;

/**
 * App Uninstalled Event
 */
export type AppUninstalledEventRequestBody = {
  /**
   * Information about the app
   */
  data: components.AppInstall;
  /**
   * Unix timestamp representing when the event was created
   */
  created: number;
  event: AppUninstalledEventEvent;
};

/** @internal */
export const AppUninstalledEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof AppUninstalledEventEvent
> = z.nativeEnum(AppUninstalledEventEvent);

/** @internal */
export const AppUninstalledEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof AppUninstalledEventEvent
> = AppUninstalledEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppUninstalledEventEvent$ {
  /** @deprecated use `AppUninstalledEventEvent$inboundSchema` instead. */
  export const inboundSchema = AppUninstalledEventEvent$inboundSchema;
  /** @deprecated use `AppUninstalledEventEvent$outboundSchema` instead. */
  export const outboundSchema = AppUninstalledEventEvent$outboundSchema;
}

/** @internal */
export const AppUninstalledEventRequestBody$inboundSchema: z.ZodType<
  AppUninstalledEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.AppInstall$inboundSchema,
  created: z.number().int(),
  event: AppUninstalledEventEvent$inboundSchema,
});

/** @internal */
export type AppUninstalledEventRequestBody$Outbound = {
  data: components.AppInstall$Outbound;
  created: number;
  event: string;
};

/** @internal */
export const AppUninstalledEventRequestBody$outboundSchema: z.ZodType<
  AppUninstalledEventRequestBody$Outbound,
  z.ZodTypeDef,
  AppUninstalledEventRequestBody
> = z.object({
  data: components.AppInstall$outboundSchema,
  created: z.number().int(),
  event: AppUninstalledEventEvent$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppUninstalledEventRequestBody$ {
  /** @deprecated use `AppUninstalledEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = AppUninstalledEventRequestBody$inboundSchema;
  /** @deprecated use `AppUninstalledEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = AppUninstalledEventRequestBody$outboundSchema;
  /** @deprecated use `AppUninstalledEventRequestBody$Outbound` instead. */
  export type Outbound = AppUninstalledEventRequestBody$Outbound;
}

export function appUninstalledEventRequestBodyToJSON(
  appUninstalledEventRequestBody: AppUninstalledEventRequestBody,
): string {
  return JSON.stringify(
    AppUninstalledEventRequestBody$outboundSchema.parse(
      appUninstalledEventRequestBody,
    ),
  );
}

export function appUninstalledEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AppUninstalledEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppUninstalledEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppUninstalledEventRequestBody' from JSON`,
  );
}
