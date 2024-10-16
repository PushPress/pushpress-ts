/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListAppInstallsGlobals = {
  companyId?: string | undefined;
};

export type ListAppInstallsRequest = {
  appId: string;
  page?: number | undefined;
  limit?: number | undefined;
};

/**
 * A paginated list of app installs
 */
export type ListAppInstallsResponseBody = {
  data: Array<components.AppInstall>;
};

export type ListAppInstallsResponse = {
  result: ListAppInstallsResponseBody;
};

/** @internal */
export const ListAppInstallsGlobals$inboundSchema: z.ZodType<
  ListAppInstallsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string().optional(),
});

/** @internal */
export type ListAppInstallsGlobals$Outbound = {
  companyId?: string | undefined;
};

/** @internal */
export const ListAppInstallsGlobals$outboundSchema: z.ZodType<
  ListAppInstallsGlobals$Outbound,
  z.ZodTypeDef,
  ListAppInstallsGlobals
> = z.object({
  companyId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAppInstallsGlobals$ {
  /** @deprecated use `ListAppInstallsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListAppInstallsGlobals$inboundSchema;
  /** @deprecated use `ListAppInstallsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListAppInstallsGlobals$outboundSchema;
  /** @deprecated use `ListAppInstallsGlobals$Outbound` instead. */
  export type Outbound = ListAppInstallsGlobals$Outbound;
}

/** @internal */
export const ListAppInstallsRequest$inboundSchema: z.ZodType<
  ListAppInstallsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  app_id: z.string(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "app_id": "appId",
  });
});

/** @internal */
export type ListAppInstallsRequest$Outbound = {
  app_id: string;
  page: number;
  limit: number;
};

/** @internal */
export const ListAppInstallsRequest$outboundSchema: z.ZodType<
  ListAppInstallsRequest$Outbound,
  z.ZodTypeDef,
  ListAppInstallsRequest
> = z.object({
  appId: z.string(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    appId: "app_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAppInstallsRequest$ {
  /** @deprecated use `ListAppInstallsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAppInstallsRequest$inboundSchema;
  /** @deprecated use `ListAppInstallsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAppInstallsRequest$outboundSchema;
  /** @deprecated use `ListAppInstallsRequest$Outbound` instead. */
  export type Outbound = ListAppInstallsRequest$Outbound;
}

/** @internal */
export const ListAppInstallsResponseBody$inboundSchema: z.ZodType<
  ListAppInstallsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(components.AppInstall$inboundSchema),
});

/** @internal */
export type ListAppInstallsResponseBody$Outbound = {
  data: Array<components.AppInstall$Outbound>;
};

/** @internal */
export const ListAppInstallsResponseBody$outboundSchema: z.ZodType<
  ListAppInstallsResponseBody$Outbound,
  z.ZodTypeDef,
  ListAppInstallsResponseBody
> = z.object({
  data: z.array(components.AppInstall$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAppInstallsResponseBody$ {
  /** @deprecated use `ListAppInstallsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListAppInstallsResponseBody$inboundSchema;
  /** @deprecated use `ListAppInstallsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListAppInstallsResponseBody$outboundSchema;
  /** @deprecated use `ListAppInstallsResponseBody$Outbound` instead. */
  export type Outbound = ListAppInstallsResponseBody$Outbound;
}

/** @internal */
export const ListAppInstallsResponse$inboundSchema: z.ZodType<
  ListAppInstallsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAppInstallsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAppInstallsResponse$Outbound = {
  Result: ListAppInstallsResponseBody$Outbound;
};

/** @internal */
export const ListAppInstallsResponse$outboundSchema: z.ZodType<
  ListAppInstallsResponse$Outbound,
  z.ZodTypeDef,
  ListAppInstallsResponse
> = z.object({
  result: z.lazy(() => ListAppInstallsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAppInstallsResponse$ {
  /** @deprecated use `ListAppInstallsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAppInstallsResponse$inboundSchema;
  /** @deprecated use `ListAppInstallsResponse$outboundSchema` instead. */
  export const outboundSchema = ListAppInstallsResponse$outboundSchema;
  /** @deprecated use `ListAppInstallsResponse$Outbound` instead. */
  export type Outbound = ListAppInstallsResponse$Outbound;
}
