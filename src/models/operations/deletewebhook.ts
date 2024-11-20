/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteWebhookGlobals = {
  companyId?: string | undefined;
};

export type DeleteWebhookRequest = {
  uuid: string;
  companyId?: string | undefined;
};

/** @internal */
export const DeleteWebhookGlobals$inboundSchema: z.ZodType<
  DeleteWebhookGlobals,
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
export type DeleteWebhookGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const DeleteWebhookGlobals$outboundSchema: z.ZodType<
  DeleteWebhookGlobals$Outbound,
  z.ZodTypeDef,
  DeleteWebhookGlobals
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
export namespace DeleteWebhookGlobals$ {
  /** @deprecated use `DeleteWebhookGlobals$inboundSchema` instead. */
  export const inboundSchema = DeleteWebhookGlobals$inboundSchema;
  /** @deprecated use `DeleteWebhookGlobals$outboundSchema` instead. */
  export const outboundSchema = DeleteWebhookGlobals$outboundSchema;
  /** @deprecated use `DeleteWebhookGlobals$Outbound` instead. */
  export type Outbound = DeleteWebhookGlobals$Outbound;
}

export function deleteWebhookGlobalsToJSON(
  deleteWebhookGlobals: DeleteWebhookGlobals,
): string {
  return JSON.stringify(
    DeleteWebhookGlobals$outboundSchema.parse(deleteWebhookGlobals),
  );
}

export function deleteWebhookGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<DeleteWebhookGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteWebhookGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteWebhookGlobals' from JSON`,
  );
}

/** @internal */
export const DeleteWebhookRequest$inboundSchema: z.ZodType<
  DeleteWebhookRequest,
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
export type DeleteWebhookRequest$Outbound = {
  uuid: string;
  "company-id"?: string | undefined;
};

/** @internal */
export const DeleteWebhookRequest$outboundSchema: z.ZodType<
  DeleteWebhookRequest$Outbound,
  z.ZodTypeDef,
  DeleteWebhookRequest
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
export namespace DeleteWebhookRequest$ {
  /** @deprecated use `DeleteWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteWebhookRequest$inboundSchema;
  /** @deprecated use `DeleteWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteWebhookRequest$outboundSchema;
  /** @deprecated use `DeleteWebhookRequest$Outbound` instead. */
  export type Outbound = DeleteWebhookRequest$Outbound;
}

export function deleteWebhookRequestToJSON(
  deleteWebhookRequest: DeleteWebhookRequest,
): string {
  return JSON.stringify(
    DeleteWebhookRequest$outboundSchema.parse(deleteWebhookRequest),
  );
}

export function deleteWebhookRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteWebhookRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteWebhookRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteWebhookRequest' from JSON`,
  );
}
