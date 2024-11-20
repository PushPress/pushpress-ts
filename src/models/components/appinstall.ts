/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AppInstallCompany = {
  /**
   * The company uuid in which the app is installed
   */
  id: string;
};

export type App = {
  /**
   * The app id
   */
  id: string;
};

export type Installation = {
  /**
   * The installation id of the app
   */
  id: string;
};

/**
 * Information about the app
 */
export type AppInstall = {
  company: AppInstallCompany;
  app: App;
  installation: Installation;
};

/** @internal */
export const AppInstallCompany$inboundSchema: z.ZodType<
  AppInstallCompany,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type AppInstallCompany$Outbound = {
  id: string;
};

/** @internal */
export const AppInstallCompany$outboundSchema: z.ZodType<
  AppInstallCompany$Outbound,
  z.ZodTypeDef,
  AppInstallCompany
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppInstallCompany$ {
  /** @deprecated use `AppInstallCompany$inboundSchema` instead. */
  export const inboundSchema = AppInstallCompany$inboundSchema;
  /** @deprecated use `AppInstallCompany$outboundSchema` instead. */
  export const outboundSchema = AppInstallCompany$outboundSchema;
  /** @deprecated use `AppInstallCompany$Outbound` instead. */
  export type Outbound = AppInstallCompany$Outbound;
}

export function appInstallCompanyToJSON(
  appInstallCompany: AppInstallCompany,
): string {
  return JSON.stringify(
    AppInstallCompany$outboundSchema.parse(appInstallCompany),
  );
}

export function appInstallCompanyFromJSON(
  jsonString: string,
): SafeParseResult<AppInstallCompany, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppInstallCompany$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppInstallCompany' from JSON`,
  );
}

/** @internal */
export const App$inboundSchema: z.ZodType<App, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
  });

/** @internal */
export type App$Outbound = {
  id: string;
};

/** @internal */
export const App$outboundSchema: z.ZodType<App$Outbound, z.ZodTypeDef, App> = z
  .object({
    id: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace App$ {
  /** @deprecated use `App$inboundSchema` instead. */
  export const inboundSchema = App$inboundSchema;
  /** @deprecated use `App$outboundSchema` instead. */
  export const outboundSchema = App$outboundSchema;
  /** @deprecated use `App$Outbound` instead. */
  export type Outbound = App$Outbound;
}

export function appToJSON(app: App): string {
  return JSON.stringify(App$outboundSchema.parse(app));
}

export function appFromJSON(
  jsonString: string,
): SafeParseResult<App, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => App$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'App' from JSON`,
  );
}

/** @internal */
export const Installation$inboundSchema: z.ZodType<
  Installation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type Installation$Outbound = {
  id: string;
};

/** @internal */
export const Installation$outboundSchema: z.ZodType<
  Installation$Outbound,
  z.ZodTypeDef,
  Installation
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Installation$ {
  /** @deprecated use `Installation$inboundSchema` instead. */
  export const inboundSchema = Installation$inboundSchema;
  /** @deprecated use `Installation$outboundSchema` instead. */
  export const outboundSchema = Installation$outboundSchema;
  /** @deprecated use `Installation$Outbound` instead. */
  export type Outbound = Installation$Outbound;
}

export function installationToJSON(installation: Installation): string {
  return JSON.stringify(Installation$outboundSchema.parse(installation));
}

export function installationFromJSON(
  jsonString: string,
): SafeParseResult<Installation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Installation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Installation' from JSON`,
  );
}

/** @internal */
export const AppInstall$inboundSchema: z.ZodType<
  AppInstall,
  z.ZodTypeDef,
  unknown
> = z.object({
  company: z.lazy(() => AppInstallCompany$inboundSchema),
  app: z.lazy(() => App$inboundSchema),
  installation: z.lazy(() => Installation$inboundSchema),
});

/** @internal */
export type AppInstall$Outbound = {
  company: AppInstallCompany$Outbound;
  app: App$Outbound;
  installation: Installation$Outbound;
};

/** @internal */
export const AppInstall$outboundSchema: z.ZodType<
  AppInstall$Outbound,
  z.ZodTypeDef,
  AppInstall
> = z.object({
  company: z.lazy(() => AppInstallCompany$outboundSchema),
  app: z.lazy(() => App$outboundSchema),
  installation: z.lazy(() => Installation$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppInstall$ {
  /** @deprecated use `AppInstall$inboundSchema` instead. */
  export const inboundSchema = AppInstall$inboundSchema;
  /** @deprecated use `AppInstall$outboundSchema` instead. */
  export const outboundSchema = AppInstall$outboundSchema;
  /** @deprecated use `AppInstall$Outbound` instead. */
  export type Outbound = AppInstall$Outbound;
}

export function appInstallToJSON(appInstall: AppInstall): string {
  return JSON.stringify(AppInstall$outboundSchema.parse(appInstall));
}

export function appInstallFromJSON(
  jsonString: string,
): SafeParseResult<AppInstall, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppInstall$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppInstall' from JSON`,
  );
}
