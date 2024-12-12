/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SendEmailGlobals = {
  companyId?: string | undefined;
};

/**
 * One or more reply-to addresses
 */
export type ReplyTo = string | Array<string>;

export type SendEmailRequestBody = {
  /**
   * Uuid of the customer recipient
   */
  customer: string;
  subject: string;
  /**
   * The text email body
   */
  text: string;
  /**
   * The HTML email body
   */
  html: string;
  /**
   * The email sender name
   */
  from: string;
  /**
   * One or more reply-to addresses
   */
  replyTo?: string | Array<string> | undefined;
  /**
   * Optional email type
   */
  type?: string | undefined;
};

export type SendEmailRequest = {
  /**
   * When using multitenant API keys, specify the company
   */
  companyId?: string | undefined;
  requestBody: SendEmailRequestBody;
};

export const Status = {
  Success: "success",
} as const;
export type Status = ClosedEnum<typeof Status>;

/**
 * Default Response
 */
export type SendEmailResponseBody = {
  status: Status;
};

/** @internal */
export const SendEmailGlobals$inboundSchema: z.ZodType<
  SendEmailGlobals,
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
export type SendEmailGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const SendEmailGlobals$outboundSchema: z.ZodType<
  SendEmailGlobals$Outbound,
  z.ZodTypeDef,
  SendEmailGlobals
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
export namespace SendEmailGlobals$ {
  /** @deprecated use `SendEmailGlobals$inboundSchema` instead. */
  export const inboundSchema = SendEmailGlobals$inboundSchema;
  /** @deprecated use `SendEmailGlobals$outboundSchema` instead. */
  export const outboundSchema = SendEmailGlobals$outboundSchema;
  /** @deprecated use `SendEmailGlobals$Outbound` instead. */
  export type Outbound = SendEmailGlobals$Outbound;
}

export function sendEmailGlobalsToJSON(
  sendEmailGlobals: SendEmailGlobals,
): string {
  return JSON.stringify(
    SendEmailGlobals$outboundSchema.parse(sendEmailGlobals),
  );
}

export function sendEmailGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<SendEmailGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendEmailGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendEmailGlobals' from JSON`,
  );
}

/** @internal */
export const ReplyTo$inboundSchema: z.ZodType<ReplyTo, z.ZodTypeDef, unknown> =
  z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ReplyTo$Outbound = string | Array<string>;

/** @internal */
export const ReplyTo$outboundSchema: z.ZodType<
  ReplyTo$Outbound,
  z.ZodTypeDef,
  ReplyTo
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReplyTo$ {
  /** @deprecated use `ReplyTo$inboundSchema` instead. */
  export const inboundSchema = ReplyTo$inboundSchema;
  /** @deprecated use `ReplyTo$outboundSchema` instead. */
  export const outboundSchema = ReplyTo$outboundSchema;
  /** @deprecated use `ReplyTo$Outbound` instead. */
  export type Outbound = ReplyTo$Outbound;
}

export function replyToToJSON(replyTo: ReplyTo): string {
  return JSON.stringify(ReplyTo$outboundSchema.parse(replyTo));
}

export function replyToFromJSON(
  jsonString: string,
): SafeParseResult<ReplyTo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReplyTo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReplyTo' from JSON`,
  );
}

/** @internal */
export const SendEmailRequestBody$inboundSchema: z.ZodType<
  SendEmailRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  customer: z.string(),
  subject: z.string(),
  text: z.string(),
  html: z.string(),
  from: z.string(),
  replyTo: z.union([z.string(), z.array(z.string())]).optional(),
  type: z.string().optional(),
});

/** @internal */
export type SendEmailRequestBody$Outbound = {
  customer: string;
  subject: string;
  text: string;
  html: string;
  from: string;
  replyTo?: string | Array<string> | undefined;
  type?: string | undefined;
};

/** @internal */
export const SendEmailRequestBody$outboundSchema: z.ZodType<
  SendEmailRequestBody$Outbound,
  z.ZodTypeDef,
  SendEmailRequestBody
> = z.object({
  customer: z.string(),
  subject: z.string(),
  text: z.string(),
  html: z.string(),
  from: z.string(),
  replyTo: z.union([z.string(), z.array(z.string())]).optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendEmailRequestBody$ {
  /** @deprecated use `SendEmailRequestBody$inboundSchema` instead. */
  export const inboundSchema = SendEmailRequestBody$inboundSchema;
  /** @deprecated use `SendEmailRequestBody$outboundSchema` instead. */
  export const outboundSchema = SendEmailRequestBody$outboundSchema;
  /** @deprecated use `SendEmailRequestBody$Outbound` instead. */
  export type Outbound = SendEmailRequestBody$Outbound;
}

export function sendEmailRequestBodyToJSON(
  sendEmailRequestBody: SendEmailRequestBody,
): string {
  return JSON.stringify(
    SendEmailRequestBody$outboundSchema.parse(sendEmailRequestBody),
  );
}

export function sendEmailRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<SendEmailRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendEmailRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendEmailRequestBody' from JSON`,
  );
}

/** @internal */
export const SendEmailRequest$inboundSchema: z.ZodType<
  SendEmailRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "company-id": z.string().optional(),
  RequestBody: z.lazy(() => SendEmailRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SendEmailRequest$Outbound = {
  "company-id"?: string | undefined;
  RequestBody: SendEmailRequestBody$Outbound;
};

/** @internal */
export const SendEmailRequest$outboundSchema: z.ZodType<
  SendEmailRequest$Outbound,
  z.ZodTypeDef,
  SendEmailRequest
> = z.object({
  companyId: z.string().optional(),
  requestBody: z.lazy(() => SendEmailRequestBody$outboundSchema),
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
export namespace SendEmailRequest$ {
  /** @deprecated use `SendEmailRequest$inboundSchema` instead. */
  export const inboundSchema = SendEmailRequest$inboundSchema;
  /** @deprecated use `SendEmailRequest$outboundSchema` instead. */
  export const outboundSchema = SendEmailRequest$outboundSchema;
  /** @deprecated use `SendEmailRequest$Outbound` instead. */
  export type Outbound = SendEmailRequest$Outbound;
}

export function sendEmailRequestToJSON(
  sendEmailRequest: SendEmailRequest,
): string {
  return JSON.stringify(
    SendEmailRequest$outboundSchema.parse(sendEmailRequest),
  );
}

export function sendEmailRequestFromJSON(
  jsonString: string,
): SafeParseResult<SendEmailRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendEmailRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendEmailRequest' from JSON`,
  );
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const SendEmailResponseBody$inboundSchema: z.ZodType<
  SendEmailResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: Status$inboundSchema,
});

/** @internal */
export type SendEmailResponseBody$Outbound = {
  status: string;
};

/** @internal */
export const SendEmailResponseBody$outboundSchema: z.ZodType<
  SendEmailResponseBody$Outbound,
  z.ZodTypeDef,
  SendEmailResponseBody
> = z.object({
  status: Status$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendEmailResponseBody$ {
  /** @deprecated use `SendEmailResponseBody$inboundSchema` instead. */
  export const inboundSchema = SendEmailResponseBody$inboundSchema;
  /** @deprecated use `SendEmailResponseBody$outboundSchema` instead. */
  export const outboundSchema = SendEmailResponseBody$outboundSchema;
  /** @deprecated use `SendEmailResponseBody$Outbound` instead. */
  export type Outbound = SendEmailResponseBody$Outbound;
}

export function sendEmailResponseBodyToJSON(
  sendEmailResponseBody: SendEmailResponseBody,
): string {
  return JSON.stringify(
    SendEmailResponseBody$outboundSchema.parse(sendEmailResponseBody),
  );
}

export function sendEmailResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<SendEmailResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SendEmailResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SendEmailResponseBody' from JSON`,
  );
}
