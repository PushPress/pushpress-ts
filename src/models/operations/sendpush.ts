/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SendPushGlobals = {
  companyId?: string | undefined;
};

export type SendPushRequestBody = {
  /**
   * customer ids to notify
   */
  customers: Array<string>;
  /**
   * message to send
   */
  message: string;
  /**
   * type of message
   */
  type?: string | undefined;
  /**
   * Optional metadata to attach to the message
   */
  data?: any | undefined;
};

export type SendPushRequest = {
  /**
   * When using multitenant API keys, specify the company
   */
  companyId?: string | undefined;
  requestBody: SendPushRequestBody;
};

export type InvalidAliases = {
  externalId: Array<string>;
};

export type Errors = {
  invalidAliases: InvalidAliases;
};

/**
 * Default Response
 */
export type SendPushResponseBody = {
  id?: string | undefined;
  externalId?: string | null | undefined;
  errors?: Errors | undefined;
};

/** @internal */
export const SendPushGlobals$inboundSchema: z.ZodType<
  SendPushGlobals,
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
export type SendPushGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const SendPushGlobals$outboundSchema: z.ZodType<
  SendPushGlobals$Outbound,
  z.ZodTypeDef,
  SendPushGlobals
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
export namespace SendPushGlobals$ {
  /** @deprecated use `SendPushGlobals$inboundSchema` instead. */
  export const inboundSchema = SendPushGlobals$inboundSchema;
  /** @deprecated use `SendPushGlobals$outboundSchema` instead. */
  export const outboundSchema = SendPushGlobals$outboundSchema;
  /** @deprecated use `SendPushGlobals$Outbound` instead. */
  export type Outbound = SendPushGlobals$Outbound;
}

export function sendPushGlobalsToJSON(
  sendPushGlobals: SendPushGlobals,
): string {
  return JSON.stringify(SendPushGlobals$outboundSchema.parse(sendPushGlobals));
}

export function sendPushGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<SendPushGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendPushGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendPushGlobals' from JSON`,
  );
}

/** @internal */
export const SendPushRequestBody$inboundSchema: z.ZodType<
  SendPushRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  customers: z.array(z.string()),
  message: z.string(),
  type: z.string().optional(),
  data: z.any().optional(),
});

/** @internal */
export type SendPushRequestBody$Outbound = {
  customers: Array<string>;
  message: string;
  type?: string | undefined;
  data?: any | undefined;
};

/** @internal */
export const SendPushRequestBody$outboundSchema: z.ZodType<
  SendPushRequestBody$Outbound,
  z.ZodTypeDef,
  SendPushRequestBody
> = z.object({
  customers: z.array(z.string()),
  message: z.string(),
  type: z.string().optional(),
  data: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendPushRequestBody$ {
  /** @deprecated use `SendPushRequestBody$inboundSchema` instead. */
  export const inboundSchema = SendPushRequestBody$inboundSchema;
  /** @deprecated use `SendPushRequestBody$outboundSchema` instead. */
  export const outboundSchema = SendPushRequestBody$outboundSchema;
  /** @deprecated use `SendPushRequestBody$Outbound` instead. */
  export type Outbound = SendPushRequestBody$Outbound;
}

export function sendPushRequestBodyToJSON(
  sendPushRequestBody: SendPushRequestBody,
): string {
  return JSON.stringify(
    SendPushRequestBody$outboundSchema.parse(sendPushRequestBody),
  );
}

export function sendPushRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SendPushRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendPushRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendPushRequestBody' from JSON`,
  );
}

/** @internal */
export const SendPushRequest$inboundSchema: z.ZodType<
  SendPushRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "company-id": z.string().optional(),
  RequestBody: z.lazy(() => SendPushRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SendPushRequest$Outbound = {
  "company-id"?: string | undefined;
  RequestBody: SendPushRequestBody$Outbound;
};

/** @internal */
export const SendPushRequest$outboundSchema: z.ZodType<
  SendPushRequest$Outbound,
  z.ZodTypeDef,
  SendPushRequest
> = z.object({
  companyId: z.string().optional(),
  requestBody: z.lazy(() => SendPushRequestBody$outboundSchema),
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
export namespace SendPushRequest$ {
  /** @deprecated use `SendPushRequest$inboundSchema` instead. */
  export const inboundSchema = SendPushRequest$inboundSchema;
  /** @deprecated use `SendPushRequest$outboundSchema` instead. */
  export const outboundSchema = SendPushRequest$outboundSchema;
  /** @deprecated use `SendPushRequest$Outbound` instead. */
  export type Outbound = SendPushRequest$Outbound;
}

export function sendPushRequestToJSON(
  sendPushRequest: SendPushRequest,
): string {
  return JSON.stringify(SendPushRequest$outboundSchema.parse(sendPushRequest));
}

export function sendPushRequestFromJSON(
  jsonString: string,
): SafeParseResult<SendPushRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendPushRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendPushRequest' from JSON`,
  );
}

/** @internal */
export const InvalidAliases$inboundSchema: z.ZodType<
  InvalidAliases,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
  });
});

/** @internal */
export type InvalidAliases$Outbound = {
  external_id: Array<string>;
};

/** @internal */
export const InvalidAliases$outboundSchema: z.ZodType<
  InvalidAliases$Outbound,
  z.ZodTypeDef,
  InvalidAliases
> = z.object({
  externalId: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvalidAliases$ {
  /** @deprecated use `InvalidAliases$inboundSchema` instead. */
  export const inboundSchema = InvalidAliases$inboundSchema;
  /** @deprecated use `InvalidAliases$outboundSchema` instead. */
  export const outboundSchema = InvalidAliases$outboundSchema;
  /** @deprecated use `InvalidAliases$Outbound` instead. */
  export type Outbound = InvalidAliases$Outbound;
}

export function invalidAliasesToJSON(invalidAliases: InvalidAliases): string {
  return JSON.stringify(InvalidAliases$outboundSchema.parse(invalidAliases));
}

export function invalidAliasesFromJSON(
  jsonString: string,
): SafeParseResult<InvalidAliases, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvalidAliases$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvalidAliases' from JSON`,
  );
}

/** @internal */
export const Errors$inboundSchema: z.ZodType<Errors, z.ZodTypeDef, unknown> = z
  .object({
    invalid_aliases: z.lazy(() => InvalidAliases$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "invalid_aliases": "invalidAliases",
    });
  });

/** @internal */
export type Errors$Outbound = {
  invalid_aliases: InvalidAliases$Outbound;
};

/** @internal */
export const Errors$outboundSchema: z.ZodType<
  Errors$Outbound,
  z.ZodTypeDef,
  Errors
> = z.object({
  invalidAliases: z.lazy(() => InvalidAliases$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    invalidAliases: "invalid_aliases",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Errors$ {
  /** @deprecated use `Errors$inboundSchema` instead. */
  export const inboundSchema = Errors$inboundSchema;
  /** @deprecated use `Errors$outboundSchema` instead. */
  export const outboundSchema = Errors$outboundSchema;
  /** @deprecated use `Errors$Outbound` instead. */
  export type Outbound = Errors$Outbound;
}

export function errorsToJSON(errors: Errors): string {
  return JSON.stringify(Errors$outboundSchema.parse(errors));
}

export function errorsFromJSON(
  jsonString: string,
): SafeParseResult<Errors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Errors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Errors' from JSON`,
  );
}

/** @internal */
export const SendPushResponseBody$inboundSchema: z.ZodType<
  SendPushResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  external_id: z.nullable(z.string()).optional(),
  errors: z.lazy(() => Errors$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
  });
});

/** @internal */
export type SendPushResponseBody$Outbound = {
  id?: string | undefined;
  external_id?: string | null | undefined;
  errors?: Errors$Outbound | undefined;
};

/** @internal */
export const SendPushResponseBody$outboundSchema: z.ZodType<
  SendPushResponseBody$Outbound,
  z.ZodTypeDef,
  SendPushResponseBody
> = z.object({
  id: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  errors: z.lazy(() => Errors$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendPushResponseBody$ {
  /** @deprecated use `SendPushResponseBody$inboundSchema` instead. */
  export const inboundSchema = SendPushResponseBody$inboundSchema;
  /** @deprecated use `SendPushResponseBody$outboundSchema` instead. */
  export const outboundSchema = SendPushResponseBody$outboundSchema;
  /** @deprecated use `SendPushResponseBody$Outbound` instead. */
  export type Outbound = SendPushResponseBody$Outbound;
}

export function sendPushResponseBodyToJSON(
  sendPushResponseBody: SendPushResponseBody,
): string {
  return JSON.stringify(
    SendPushResponseBody$outboundSchema.parse(sendPushResponseBody),
  );
}

export function sendPushResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<SendPushResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendPushResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendPushResponseBody' from JSON`,
  );
}
