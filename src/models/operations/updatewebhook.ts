/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export type UpdateWebhookGlobals = {
  companyId?: string | undefined;
};

export const UpdateWebhookEventTypes = {
  CheckinCreated: "checkin.created",
  CheckinUpdated: "checkin.updated",
  CheckinDeleted: "checkin.deleted",
  CustomerCreated: "customer.created",
  CustomerUpdated: "customer.updated",
  CustomerDeleted: "customer.deleted",
  AppInstalled: "app.installed",
  AppUninstalled: "app.uninstalled",
} as const;
export type UpdateWebhookEventTypes = ClosedEnum<
  typeof UpdateWebhookEventTypes
>;

export type UpdateWebhookRequestBody = {
  /**
   * The URL to send the webhook to
   */
  url?: string | undefined;
  /**
   * The event types to listen for, valid event types include check
   */
  eventTypes: Array<UpdateWebhookEventTypes>;
};

export type UpdateWebhookRequest = {
  uuid: string;
  companyId?: string | undefined;
  requestBody: UpdateWebhookRequestBody;
};

export const UpdateWebhookWebhooksEventTypes = {
  CheckinCreated: "checkin.created",
  CheckinUpdated: "checkin.updated",
  CheckinDeleted: "checkin.deleted",
  CustomerCreated: "customer.created",
  CustomerUpdated: "customer.updated",
  CustomerDeleted: "customer.deleted",
  AppInstalled: "app.installed",
  AppUninstalled: "app.uninstalled",
} as const;
export type UpdateWebhookWebhooksEventTypes = ClosedEnum<
  typeof UpdateWebhookWebhooksEventTypes
>;

/**
 * Default Response
 */
export type UpdateWebhookResponseBody = {
  /**
   * The unique identifier for the webhook
   */
  id: string;
  /**
   * The URL that receives the webhook
   */
  url: string;
  eventTypes: Array<UpdateWebhookWebhooksEventTypes>;
  /**
   * Whether the webhook is actively receiving events or is disabled
   */
  active?: boolean | undefined;
  signingSecret: string;
};

/** @internal */
export const UpdateWebhookGlobals$inboundSchema: z.ZodType<
  UpdateWebhookGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  "company-id": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
  });
});

/** @internal */
export type UpdateWebhookGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const UpdateWebhookGlobals$outboundSchema: z.ZodType<
  UpdateWebhookGlobals$Outbound,
  z.ZodTypeDef,
  UpdateWebhookGlobals
> = z.object({
  companyId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookGlobals$ {
  /** @deprecated use `UpdateWebhookGlobals$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookGlobals$inboundSchema;
  /** @deprecated use `UpdateWebhookGlobals$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookGlobals$outboundSchema;
  /** @deprecated use `UpdateWebhookGlobals$Outbound` instead. */
  export type Outbound = UpdateWebhookGlobals$Outbound;
}

/** @internal */
export const UpdateWebhookEventTypes$inboundSchema: z.ZodNativeEnum<
  typeof UpdateWebhookEventTypes
> = z.nativeEnum(UpdateWebhookEventTypes);

/** @internal */
export const UpdateWebhookEventTypes$outboundSchema: z.ZodNativeEnum<
  typeof UpdateWebhookEventTypes
> = UpdateWebhookEventTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookEventTypes$ {
  /** @deprecated use `UpdateWebhookEventTypes$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookEventTypes$inboundSchema;
  /** @deprecated use `UpdateWebhookEventTypes$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookEventTypes$outboundSchema;
}

/** @internal */
export const UpdateWebhookRequestBody$inboundSchema: z.ZodType<
  UpdateWebhookRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  eventTypes: z.array(UpdateWebhookEventTypes$inboundSchema),
});

/** @internal */
export type UpdateWebhookRequestBody$Outbound = {
  url?: string | undefined;
  eventTypes: Array<string>;
};

/** @internal */
export const UpdateWebhookRequestBody$outboundSchema: z.ZodType<
  UpdateWebhookRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateWebhookRequestBody
> = z.object({
  url: z.string().optional(),
  eventTypes: z.array(UpdateWebhookEventTypes$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookRequestBody$ {
  /** @deprecated use `UpdateWebhookRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookRequestBody$inboundSchema;
  /** @deprecated use `UpdateWebhookRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookRequestBody$outboundSchema;
  /** @deprecated use `UpdateWebhookRequestBody$Outbound` instead. */
  export type Outbound = UpdateWebhookRequestBody$Outbound;
}

/** @internal */
export const UpdateWebhookRequest$inboundSchema: z.ZodType<
  UpdateWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  "company-id": z.string().optional(),
  RequestBody: z.lazy(() => UpdateWebhookRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateWebhookRequest$Outbound = {
  uuid: string;
  "company-id"?: string | undefined;
  RequestBody: UpdateWebhookRequestBody$Outbound;
};

/** @internal */
export const UpdateWebhookRequest$outboundSchema: z.ZodType<
  UpdateWebhookRequest$Outbound,
  z.ZodTypeDef,
  UpdateWebhookRequest
> = z.object({
  uuid: z.string(),
  companyId: z.string().optional(),
  requestBody: z.lazy(() => UpdateWebhookRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    companyId: "company-id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookRequest$ {
  /** @deprecated use `UpdateWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookRequest$inboundSchema;
  /** @deprecated use `UpdateWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookRequest$outboundSchema;
  /** @deprecated use `UpdateWebhookRequest$Outbound` instead. */
  export type Outbound = UpdateWebhookRequest$Outbound;
}

/** @internal */
export const UpdateWebhookWebhooksEventTypes$inboundSchema: z.ZodNativeEnum<
  typeof UpdateWebhookWebhooksEventTypes
> = z.nativeEnum(UpdateWebhookWebhooksEventTypes);

/** @internal */
export const UpdateWebhookWebhooksEventTypes$outboundSchema: z.ZodNativeEnum<
  typeof UpdateWebhookWebhooksEventTypes
> = UpdateWebhookWebhooksEventTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookWebhooksEventTypes$ {
  /** @deprecated use `UpdateWebhookWebhooksEventTypes$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookWebhooksEventTypes$inboundSchema;
  /** @deprecated use `UpdateWebhookWebhooksEventTypes$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookWebhooksEventTypes$outboundSchema;
}

/** @internal */
export const UpdateWebhookResponseBody$inboundSchema: z.ZodType<
  UpdateWebhookResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  url: z.string(),
  eventTypes: z.array(UpdateWebhookWebhooksEventTypes$inboundSchema),
  active: z.boolean().default(true),
  signingSecret: z.string(),
});

/** @internal */
export type UpdateWebhookResponseBody$Outbound = {
  id: string;
  url: string;
  eventTypes: Array<string>;
  active: boolean;
  signingSecret: string;
};

/** @internal */
export const UpdateWebhookResponseBody$outboundSchema: z.ZodType<
  UpdateWebhookResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateWebhookResponseBody
> = z.object({
  id: z.string(),
  url: z.string(),
  eventTypes: z.array(UpdateWebhookWebhooksEventTypes$outboundSchema),
  active: z.boolean().default(true),
  signingSecret: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookResponseBody$ {
  /** @deprecated use `UpdateWebhookResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookResponseBody$inboundSchema;
  /** @deprecated use `UpdateWebhookResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookResponseBody$outboundSchema;
  /** @deprecated use `UpdateWebhookResponseBody$Outbound` instead. */
  export type Outbound = UpdateWebhookResponseBody$Outbound;
}