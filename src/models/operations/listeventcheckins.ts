/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListEventCheckinsGlobals = {
  companyId?: string | undefined;
};

export type ListEventCheckinsRequest = {
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

export type Data = {
  resultArray: Array<components.EventCheckin>;
};

/**
 * Default Response
 */
export type ListEventCheckinsResponseBody = {
  data: Data;
};

export type ListEventCheckinsResponse = {
  result: ListEventCheckinsResponseBody;
};

/** @internal */
export const ListEventCheckinsGlobals$inboundSchema: z.ZodType<
  ListEventCheckinsGlobals,
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
export type ListEventCheckinsGlobals$Outbound = {
  "company-id"?: string | undefined;
};

/** @internal */
export const ListEventCheckinsGlobals$outboundSchema: z.ZodType<
  ListEventCheckinsGlobals$Outbound,
  z.ZodTypeDef,
  ListEventCheckinsGlobals
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
export namespace ListEventCheckinsGlobals$ {
  /** @deprecated use `ListEventCheckinsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListEventCheckinsGlobals$inboundSchema;
  /** @deprecated use `ListEventCheckinsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListEventCheckinsGlobals$outboundSchema;
  /** @deprecated use `ListEventCheckinsGlobals$Outbound` instead. */
  export type Outbound = ListEventCheckinsGlobals$Outbound;
}

export function listEventCheckinsGlobalsToJSON(
  listEventCheckinsGlobals: ListEventCheckinsGlobals,
): string {
  return JSON.stringify(
    ListEventCheckinsGlobals$outboundSchema.parse(listEventCheckinsGlobals),
  );
}

export function listEventCheckinsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListEventCheckinsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEventCheckinsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEventCheckinsGlobals' from JSON`,
  );
}

/** @internal */
export const ListEventCheckinsRequest$inboundSchema: z.ZodType<
  ListEventCheckinsRequest,
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
export type ListEventCheckinsRequest$Outbound = {
  page: number;
  limit: number;
  customer?: string | undefined;
  before?: number | undefined;
  after?: number | undefined;
  "company-id"?: string | undefined;
};

/** @internal */
export const ListEventCheckinsRequest$outboundSchema: z.ZodType<
  ListEventCheckinsRequest$Outbound,
  z.ZodTypeDef,
  ListEventCheckinsRequest
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
export namespace ListEventCheckinsRequest$ {
  /** @deprecated use `ListEventCheckinsRequest$inboundSchema` instead. */
  export const inboundSchema = ListEventCheckinsRequest$inboundSchema;
  /** @deprecated use `ListEventCheckinsRequest$outboundSchema` instead. */
  export const outboundSchema = ListEventCheckinsRequest$outboundSchema;
  /** @deprecated use `ListEventCheckinsRequest$Outbound` instead. */
  export type Outbound = ListEventCheckinsRequest$Outbound;
}

export function listEventCheckinsRequestToJSON(
  listEventCheckinsRequest: ListEventCheckinsRequest,
): string {
  return JSON.stringify(
    ListEventCheckinsRequest$outboundSchema.parse(listEventCheckinsRequest),
  );
}

export function listEventCheckinsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListEventCheckinsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEventCheckinsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEventCheckinsRequest' from JSON`,
  );
}

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({
    resultArray: z.array(components.EventCheckin$inboundSchema),
  });

/** @internal */
export type Data$Outbound = {
  resultArray: Array<components.EventCheckin$Outbound>;
};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({
    resultArray: z.array(components.EventCheckin$outboundSchema),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}

/** @internal */
export const ListEventCheckinsResponseBody$inboundSchema: z.ZodType<
  ListEventCheckinsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => Data$inboundSchema),
});

/** @internal */
export type ListEventCheckinsResponseBody$Outbound = {
  data: Data$Outbound;
};

/** @internal */
export const ListEventCheckinsResponseBody$outboundSchema: z.ZodType<
  ListEventCheckinsResponseBody$Outbound,
  z.ZodTypeDef,
  ListEventCheckinsResponseBody
> = z.object({
  data: z.lazy(() => Data$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEventCheckinsResponseBody$ {
  /** @deprecated use `ListEventCheckinsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListEventCheckinsResponseBody$inboundSchema;
  /** @deprecated use `ListEventCheckinsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListEventCheckinsResponseBody$outboundSchema;
  /** @deprecated use `ListEventCheckinsResponseBody$Outbound` instead. */
  export type Outbound = ListEventCheckinsResponseBody$Outbound;
}

export function listEventCheckinsResponseBodyToJSON(
  listEventCheckinsResponseBody: ListEventCheckinsResponseBody,
): string {
  return JSON.stringify(
    ListEventCheckinsResponseBody$outboundSchema.parse(
      listEventCheckinsResponseBody,
    ),
  );
}

export function listEventCheckinsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListEventCheckinsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEventCheckinsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEventCheckinsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListEventCheckinsResponse$inboundSchema: z.ZodType<
  ListEventCheckinsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListEventCheckinsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListEventCheckinsResponse$Outbound = {
  Result: ListEventCheckinsResponseBody$Outbound;
};

/** @internal */
export const ListEventCheckinsResponse$outboundSchema: z.ZodType<
  ListEventCheckinsResponse$Outbound,
  z.ZodTypeDef,
  ListEventCheckinsResponse
> = z.object({
  result: z.lazy(() => ListEventCheckinsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEventCheckinsResponse$ {
  /** @deprecated use `ListEventCheckinsResponse$inboundSchema` instead. */
  export const inboundSchema = ListEventCheckinsResponse$inboundSchema;
  /** @deprecated use `ListEventCheckinsResponse$outboundSchema` instead. */
  export const outboundSchema = ListEventCheckinsResponse$outboundSchema;
  /** @deprecated use `ListEventCheckinsResponse$Outbound` instead. */
  export type Outbound = ListEventCheckinsResponse$Outbound;
}

export function listEventCheckinsResponseToJSON(
  listEventCheckinsResponse: ListEventCheckinsResponse,
): string {
  return JSON.stringify(
    ListEventCheckinsResponse$outboundSchema.parse(listEventCheckinsResponse),
  );
}

export function listEventCheckinsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListEventCheckinsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEventCheckinsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEventCheckinsResponse' from JSON`,
  );
}
