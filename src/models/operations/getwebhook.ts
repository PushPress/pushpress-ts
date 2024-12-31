/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetWebhookGlobals = {
  companyId?: string | undefined;
};

export type GetWebhookRequest = {
  uuid: string;
  /**
   * When using multitenant API keys, specify the company
   */
  companyId?: string | undefined;
};

export const GetWebhookEventTypes = {
  AppInstalled: "app.installed",
  AppUninstalled: "app.uninstalled",
  AppointmentScheduled: "appointment.scheduled",
  AppointmentRescheduled: "appointment.rescheduled",
  AppointmentNoshowed: "appointment.noshowed",
  CheckinCreated: "checkin.created",
  CheckinUpdated: "checkin.updated",
  CheckinDeleted: "checkin.deleted",
  ClassCancelled: "class.cancelled",
  CustomerCreated: "customer.created",
  CustomerUpdated: "customer.updated",
  CustomerDeleted: "customer.deleted",
  EnrollmentCreated: "enrollment.created",
  EnrollmentStatusChanged: "enrollment.status.changed",
  MemberappUpdated: "memberapp.updated",
  ReservationCreated: "reservation.created",
  ReservationWaitlisted: "reservation.waitlisted",
  ReservationCancelled: "reservation.cancelled",
  ReservationNoshowed: "reservation.noshowed",
} as const;
export type GetWebhookEventTypes = ClosedEnum<typeof GetWebhookEventTypes>;

/**
 * Default Response
 */
export type GetWebhookResponseBody = {
  /**
   * A unique identifier for the webhook
   */
  id: string;
  /**
   * The endpoint URL that will receive the webhook payloads
   */
  url: string;
  /**
   * A list of event types that the webhook is subscribed to
   */
  eventTypes: Array<GetWebhookEventTypes>;
  /**
   * Indicates whether the webhook is currently active and receiving events
   */
  active?: boolean | undefined;
  /**
   * A secret key used to sign the webhook payloads for security purposes
   */
  signingSecret: string;
};

/** @internal */
export const GetWebhookGlobals$inboundSchema: z.ZodType<
  GetWebhookGlobals,
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
export type GetWebhookGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const GetWebhookGlobals$outboundSchema: z.ZodType<
  GetWebhookGlobals$Outbound,
  z.ZodTypeDef,
  GetWebhookGlobals
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
export namespace GetWebhookGlobals$ {
  /** @deprecated use `GetWebhookGlobals$inboundSchema` instead. */
  export const inboundSchema = GetWebhookGlobals$inboundSchema;
  /** @deprecated use `GetWebhookGlobals$outboundSchema` instead. */
  export const outboundSchema = GetWebhookGlobals$outboundSchema;
  /** @deprecated use `GetWebhookGlobals$Outbound` instead. */
  export type Outbound = GetWebhookGlobals$Outbound;
}

export function getWebhookGlobalsToJSON(
  getWebhookGlobals: GetWebhookGlobals,
): string {
  return JSON.stringify(
    GetWebhookGlobals$outboundSchema.parse(getWebhookGlobals),
  );
}

export function getWebhookGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<GetWebhookGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWebhookGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWebhookGlobals' from JSON`,
  );
}

/** @internal */
export const GetWebhookRequest$inboundSchema: z.ZodType<
  GetWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  "company-id": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
  });
});

/** @internal */
export type GetWebhookRequest$Outbound = {
  uuid: string;
  "company-id"?: string | undefined;
};

/** @internal */
export const GetWebhookRequest$outboundSchema: z.ZodType<
  GetWebhookRequest$Outbound,
  z.ZodTypeDef,
  GetWebhookRequest
> = z.object({
  uuid: z.string(),
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
export namespace GetWebhookRequest$ {
  /** @deprecated use `GetWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = GetWebhookRequest$inboundSchema;
  /** @deprecated use `GetWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = GetWebhookRequest$outboundSchema;
  /** @deprecated use `GetWebhookRequest$Outbound` instead. */
  export type Outbound = GetWebhookRequest$Outbound;
}

export function getWebhookRequestToJSON(
  getWebhookRequest: GetWebhookRequest,
): string {
  return JSON.stringify(
    GetWebhookRequest$outboundSchema.parse(getWebhookRequest),
  );
}

export function getWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWebhookRequest' from JSON`,
  );
}

/** @internal */
export const GetWebhookEventTypes$inboundSchema: z.ZodNativeEnum<
  typeof GetWebhookEventTypes
> = z.nativeEnum(GetWebhookEventTypes);

/** @internal */
export const GetWebhookEventTypes$outboundSchema: z.ZodNativeEnum<
  typeof GetWebhookEventTypes
> = GetWebhookEventTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhookEventTypes$ {
  /** @deprecated use `GetWebhookEventTypes$inboundSchema` instead. */
  export const inboundSchema = GetWebhookEventTypes$inboundSchema;
  /** @deprecated use `GetWebhookEventTypes$outboundSchema` instead. */
  export const outboundSchema = GetWebhookEventTypes$outboundSchema;
}

/** @internal */
export const GetWebhookResponseBody$inboundSchema: z.ZodType<
  GetWebhookResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  url: z.string(),
  eventTypes: z.array(GetWebhookEventTypes$inboundSchema),
  active: z.boolean().default(true),
  signingSecret: z.string(),
});

/** @internal */
export type GetWebhookResponseBody$Outbound = {
  id: string;
  url: string;
  eventTypes: Array<string>;
  active: boolean;
  signingSecret: string;
};

/** @internal */
export const GetWebhookResponseBody$outboundSchema: z.ZodType<
  GetWebhookResponseBody$Outbound,
  z.ZodTypeDef,
  GetWebhookResponseBody
> = z.object({
  id: z.string(),
  url: z.string(),
  eventTypes: z.array(GetWebhookEventTypes$outboundSchema),
  active: z.boolean().default(true),
  signingSecret: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhookResponseBody$ {
  /** @deprecated use `GetWebhookResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetWebhookResponseBody$inboundSchema;
  /** @deprecated use `GetWebhookResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetWebhookResponseBody$outboundSchema;
  /** @deprecated use `GetWebhookResponseBody$Outbound` instead. */
  export type Outbound = GetWebhookResponseBody$Outbound;
}

export function getWebhookResponseBodyToJSON(
  getWebhookResponseBody: GetWebhookResponseBody,
): string {
  return JSON.stringify(
    GetWebhookResponseBody$outboundSchema.parse(getWebhookResponseBody),
  );
}

export function getWebhookResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetWebhookResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWebhookResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWebhookResponseBody' from JSON`,
  );
}
