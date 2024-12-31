/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateWebhookGlobals = {
  companyId?: string | undefined;
};

export const EventTypes = {
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
export type EventTypes = ClosedEnum<typeof EventTypes>;

export type CreateWebhookRequestBody = {
  /**
   * The URL to send the webhook to
   */
  url: string;
  /**
   * The event types to listen for, valid event types include check
   */
  eventTypes: Array<EventTypes>;
};

export type CreateWebhookRequest = {
  /**
   * When using multitenant API keys, specify the company
   */
  companyId?: string | undefined;
  requestBody: CreateWebhookRequestBody;
};

export const CreateWebhookEventTypes = {
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
export type CreateWebhookEventTypes = ClosedEnum<
  typeof CreateWebhookEventTypes
>;

/**
 * Default Response
 */
export type CreateWebhookResponseBody = {
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
  eventTypes: Array<CreateWebhookEventTypes>;
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
export const CreateWebhookGlobals$inboundSchema: z.ZodType<
  CreateWebhookGlobals,
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
export type CreateWebhookGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const CreateWebhookGlobals$outboundSchema: z.ZodType<
  CreateWebhookGlobals$Outbound,
  z.ZodTypeDef,
  CreateWebhookGlobals
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
export namespace CreateWebhookGlobals$ {
  /** @deprecated use `CreateWebhookGlobals$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookGlobals$inboundSchema;
  /** @deprecated use `CreateWebhookGlobals$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookGlobals$outboundSchema;
  /** @deprecated use `CreateWebhookGlobals$Outbound` instead. */
  export type Outbound = CreateWebhookGlobals$Outbound;
}

export function createWebhookGlobalsToJSON(
  createWebhookGlobals: CreateWebhookGlobals,
): string {
  return JSON.stringify(
    CreateWebhookGlobals$outboundSchema.parse(createWebhookGlobals),
  );
}

export function createWebhookGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CreateWebhookGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWebhookGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWebhookGlobals' from JSON`,
  );
}

/** @internal */
export const EventTypes$inboundSchema: z.ZodNativeEnum<typeof EventTypes> = z
  .nativeEnum(EventTypes);

/** @internal */
export const EventTypes$outboundSchema: z.ZodNativeEnum<typeof EventTypes> =
  EventTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventTypes$ {
  /** @deprecated use `EventTypes$inboundSchema` instead. */
  export const inboundSchema = EventTypes$inboundSchema;
  /** @deprecated use `EventTypes$outboundSchema` instead. */
  export const outboundSchema = EventTypes$outboundSchema;
}

/** @internal */
export const CreateWebhookRequestBody$inboundSchema: z.ZodType<
  CreateWebhookRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  eventTypes: z.array(EventTypes$inboundSchema),
});

/** @internal */
export type CreateWebhookRequestBody$Outbound = {
  url: string;
  eventTypes: Array<string>;
};

/** @internal */
export const CreateWebhookRequestBody$outboundSchema: z.ZodType<
  CreateWebhookRequestBody$Outbound,
  z.ZodTypeDef,
  CreateWebhookRequestBody
> = z.object({
  url: z.string(),
  eventTypes: z.array(EventTypes$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookRequestBody$ {
  /** @deprecated use `CreateWebhookRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookRequestBody$inboundSchema;
  /** @deprecated use `CreateWebhookRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookRequestBody$outboundSchema;
  /** @deprecated use `CreateWebhookRequestBody$Outbound` instead. */
  export type Outbound = CreateWebhookRequestBody$Outbound;
}

export function createWebhookRequestBodyToJSON(
  createWebhookRequestBody: CreateWebhookRequestBody,
): string {
  return JSON.stringify(
    CreateWebhookRequestBody$outboundSchema.parse(createWebhookRequestBody),
  );
}

export function createWebhookRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateWebhookRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWebhookRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWebhookRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateWebhookRequest$inboundSchema: z.ZodType<
  CreateWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "company-id": z.string().optional(),
  RequestBody: z.lazy(() => CreateWebhookRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateWebhookRequest$Outbound = {
  "company-id"?: string | undefined;
  RequestBody: CreateWebhookRequestBody$Outbound;
};

/** @internal */
export const CreateWebhookRequest$outboundSchema: z.ZodType<
  CreateWebhookRequest$Outbound,
  z.ZodTypeDef,
  CreateWebhookRequest
> = z.object({
  companyId: z.string().optional(),
  requestBody: z.lazy(() => CreateWebhookRequestBody$outboundSchema),
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
export namespace CreateWebhookRequest$ {
  /** @deprecated use `CreateWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookRequest$inboundSchema;
  /** @deprecated use `CreateWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookRequest$outboundSchema;
  /** @deprecated use `CreateWebhookRequest$Outbound` instead. */
  export type Outbound = CreateWebhookRequest$Outbound;
}

export function createWebhookRequestToJSON(
  createWebhookRequest: CreateWebhookRequest,
): string {
  return JSON.stringify(
    CreateWebhookRequest$outboundSchema.parse(createWebhookRequest),
  );
}

export function createWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWebhookRequest' from JSON`,
  );
}

/** @internal */
export const CreateWebhookEventTypes$inboundSchema: z.ZodNativeEnum<
  typeof CreateWebhookEventTypes
> = z.nativeEnum(CreateWebhookEventTypes);

/** @internal */
export const CreateWebhookEventTypes$outboundSchema: z.ZodNativeEnum<
  typeof CreateWebhookEventTypes
> = CreateWebhookEventTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookEventTypes$ {
  /** @deprecated use `CreateWebhookEventTypes$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookEventTypes$inboundSchema;
  /** @deprecated use `CreateWebhookEventTypes$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookEventTypes$outboundSchema;
}

/** @internal */
export const CreateWebhookResponseBody$inboundSchema: z.ZodType<
  CreateWebhookResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  url: z.string(),
  eventTypes: z.array(CreateWebhookEventTypes$inboundSchema),
  active: z.boolean().default(true),
  signingSecret: z.string(),
});

/** @internal */
export type CreateWebhookResponseBody$Outbound = {
  id: string;
  url: string;
  eventTypes: Array<string>;
  active: boolean;
  signingSecret: string;
};

/** @internal */
export const CreateWebhookResponseBody$outboundSchema: z.ZodType<
  CreateWebhookResponseBody$Outbound,
  z.ZodTypeDef,
  CreateWebhookResponseBody
> = z.object({
  id: z.string(),
  url: z.string(),
  eventTypes: z.array(CreateWebhookEventTypes$outboundSchema),
  active: z.boolean().default(true),
  signingSecret: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookResponseBody$ {
  /** @deprecated use `CreateWebhookResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookResponseBody$inboundSchema;
  /** @deprecated use `CreateWebhookResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookResponseBody$outboundSchema;
  /** @deprecated use `CreateWebhookResponseBody$Outbound` instead. */
  export type Outbound = CreateWebhookResponseBody$Outbound;
}

export function createWebhookResponseBodyToJSON(
  createWebhookResponseBody: CreateWebhookResponseBody,
): string {
  return JSON.stringify(
    CreateWebhookResponseBody$outboundSchema.parse(createWebhookResponseBody),
  );
}

export function createWebhookResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateWebhookResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateWebhookResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateWebhookResponseBody' from JSON`,
  );
}
