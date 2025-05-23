/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListOpenCheckinsGlobals = {
  companyId?: string | undefined;
};

export type ListOpenCheckinsRequest = {
  /**
   * page number
   */
  page?: number | undefined;
  /**
   * limit
   */
  limit?: number | undefined;
  customer?: string | undefined;
  /**
   * Get all checkins before this unix timestamp (seconds)
   */
  before?: number | undefined;
  /**
   * Get all checkins after this unix timestamp (seconds)
   */
  after?: number | undefined;
  /**
   * When using multitenant API keys, specify the company
   */
  companyId?: string | undefined;
};

export type ListOpenCheckinsData = {
  resultArray: Array<components.OpenCheckin>;
};

/**
 * Default Response
 */
export type ListOpenCheckinsResponseBody = {
  data: ListOpenCheckinsData;
};

export type ListOpenCheckinsResponse = {
  result: ListOpenCheckinsResponseBody;
};

/** @internal */
export const ListOpenCheckinsGlobals$inboundSchema: z.ZodType<
  ListOpenCheckinsGlobals,
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
export type ListOpenCheckinsGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const ListOpenCheckinsGlobals$outboundSchema: z.ZodType<
  ListOpenCheckinsGlobals$Outbound,
  z.ZodTypeDef,
  ListOpenCheckinsGlobals
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
export namespace ListOpenCheckinsGlobals$ {
  /** @deprecated use `ListOpenCheckinsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListOpenCheckinsGlobals$inboundSchema;
  /** @deprecated use `ListOpenCheckinsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListOpenCheckinsGlobals$outboundSchema;
  /** @deprecated use `ListOpenCheckinsGlobals$Outbound` instead. */
  export type Outbound = ListOpenCheckinsGlobals$Outbound;
}

export function listOpenCheckinsGlobalsToJSON(
  listOpenCheckinsGlobals: ListOpenCheckinsGlobals,
): string {
  return JSON.stringify(
    ListOpenCheckinsGlobals$outboundSchema.parse(listOpenCheckinsGlobals),
  );
}

export function listOpenCheckinsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListOpenCheckinsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListOpenCheckinsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOpenCheckinsGlobals' from JSON`,
  );
}

/** @internal */
export const ListOpenCheckinsRequest$inboundSchema: z.ZodType<
  ListOpenCheckinsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  customer: z.string().optional(),
  before: z.number().optional(),
  after: z.number().optional(),
  "company-id": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
  });
});

/** @internal */
export type ListOpenCheckinsRequest$Outbound = {
  page: number;
  limit: number;
  customer?: string | undefined;
  before?: number | undefined;
  after?: number | undefined;
  "company-id"?: string | undefined;
};

/** @internal */
export const ListOpenCheckinsRequest$outboundSchema: z.ZodType<
  ListOpenCheckinsRequest$Outbound,
  z.ZodTypeDef,
  ListOpenCheckinsRequest
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  customer: z.string().optional(),
  before: z.number().optional(),
  after: z.number().optional(),
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
export namespace ListOpenCheckinsRequest$ {
  /** @deprecated use `ListOpenCheckinsRequest$inboundSchema` instead. */
  export const inboundSchema = ListOpenCheckinsRequest$inboundSchema;
  /** @deprecated use `ListOpenCheckinsRequest$outboundSchema` instead. */
  export const outboundSchema = ListOpenCheckinsRequest$outboundSchema;
  /** @deprecated use `ListOpenCheckinsRequest$Outbound` instead. */
  export type Outbound = ListOpenCheckinsRequest$Outbound;
}

export function listOpenCheckinsRequestToJSON(
  listOpenCheckinsRequest: ListOpenCheckinsRequest,
): string {
  return JSON.stringify(
    ListOpenCheckinsRequest$outboundSchema.parse(listOpenCheckinsRequest),
  );
}

export function listOpenCheckinsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListOpenCheckinsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListOpenCheckinsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOpenCheckinsRequest' from JSON`,
  );
}

/** @internal */
export const ListOpenCheckinsData$inboundSchema: z.ZodType<
  ListOpenCheckinsData,
  z.ZodTypeDef,
  unknown
> = z.object({
  resultArray: z.array(components.OpenCheckin$inboundSchema),
});

/** @internal */
export type ListOpenCheckinsData$Outbound = {
  resultArray: Array<components.OpenCheckin$Outbound>;
};

/** @internal */
export const ListOpenCheckinsData$outboundSchema: z.ZodType<
  ListOpenCheckinsData$Outbound,
  z.ZodTypeDef,
  ListOpenCheckinsData
> = z.object({
  resultArray: z.array(components.OpenCheckin$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOpenCheckinsData$ {
  /** @deprecated use `ListOpenCheckinsData$inboundSchema` instead. */
  export const inboundSchema = ListOpenCheckinsData$inboundSchema;
  /** @deprecated use `ListOpenCheckinsData$outboundSchema` instead. */
  export const outboundSchema = ListOpenCheckinsData$outboundSchema;
  /** @deprecated use `ListOpenCheckinsData$Outbound` instead. */
  export type Outbound = ListOpenCheckinsData$Outbound;
}

export function listOpenCheckinsDataToJSON(
  listOpenCheckinsData: ListOpenCheckinsData,
): string {
  return JSON.stringify(
    ListOpenCheckinsData$outboundSchema.parse(listOpenCheckinsData),
  );
}

export function listOpenCheckinsDataFromJSON(
  jsonString: string,
): SafeParseResult<ListOpenCheckinsData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListOpenCheckinsData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOpenCheckinsData' from JSON`,
  );
}

/** @internal */
export const ListOpenCheckinsResponseBody$inboundSchema: z.ZodType<
  ListOpenCheckinsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => ListOpenCheckinsData$inboundSchema),
});

/** @internal */
export type ListOpenCheckinsResponseBody$Outbound = {
  data: ListOpenCheckinsData$Outbound;
};

/** @internal */
export const ListOpenCheckinsResponseBody$outboundSchema: z.ZodType<
  ListOpenCheckinsResponseBody$Outbound,
  z.ZodTypeDef,
  ListOpenCheckinsResponseBody
> = z.object({
  data: z.lazy(() => ListOpenCheckinsData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOpenCheckinsResponseBody$ {
  /** @deprecated use `ListOpenCheckinsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListOpenCheckinsResponseBody$inboundSchema;
  /** @deprecated use `ListOpenCheckinsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListOpenCheckinsResponseBody$outboundSchema;
  /** @deprecated use `ListOpenCheckinsResponseBody$Outbound` instead. */
  export type Outbound = ListOpenCheckinsResponseBody$Outbound;
}

export function listOpenCheckinsResponseBodyToJSON(
  listOpenCheckinsResponseBody: ListOpenCheckinsResponseBody,
): string {
  return JSON.stringify(
    ListOpenCheckinsResponseBody$outboundSchema.parse(
      listOpenCheckinsResponseBody,
    ),
  );
}

export function listOpenCheckinsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListOpenCheckinsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListOpenCheckinsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOpenCheckinsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListOpenCheckinsResponse$inboundSchema: z.ZodType<
  ListOpenCheckinsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListOpenCheckinsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListOpenCheckinsResponse$Outbound = {
  Result: ListOpenCheckinsResponseBody$Outbound;
};

/** @internal */
export const ListOpenCheckinsResponse$outboundSchema: z.ZodType<
  ListOpenCheckinsResponse$Outbound,
  z.ZodTypeDef,
  ListOpenCheckinsResponse
> = z.object({
  result: z.lazy(() => ListOpenCheckinsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListOpenCheckinsResponse$ {
  /** @deprecated use `ListOpenCheckinsResponse$inboundSchema` instead. */
  export const inboundSchema = ListOpenCheckinsResponse$inboundSchema;
  /** @deprecated use `ListOpenCheckinsResponse$outboundSchema` instead. */
  export const outboundSchema = ListOpenCheckinsResponse$outboundSchema;
  /** @deprecated use `ListOpenCheckinsResponse$Outbound` instead. */
  export type Outbound = ListOpenCheckinsResponse$Outbound;
}

export function listOpenCheckinsResponseToJSON(
  listOpenCheckinsResponse: ListOpenCheckinsResponse,
): string {
  return JSON.stringify(
    ListOpenCheckinsResponse$outboundSchema.parse(listOpenCheckinsResponse),
  );
}

export function listOpenCheckinsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListOpenCheckinsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListOpenCheckinsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListOpenCheckinsResponse' from JSON`,
  );
}
