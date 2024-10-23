/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListCustomersRequest = {
  page?: number | undefined;
  limit?: number | undefined;
  companyId?: any | undefined;
};

export type ListCustomersData = {
  resultArray: Array<components.Customer>;
};

/**
 * Default Response
 */
export type ListCustomersResponseBody = {
  data: ListCustomersData;
};

export type ListCustomersResponse = {
  result: ListCustomersResponseBody;
};

/** @internal */
export const ListCustomersRequest$inboundSchema: z.ZodType<
  ListCustomersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().default(1),
  limit: z.number().default(10),
  "company-id": z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    "company-id": "companyId",
  });
});

/** @internal */
export type ListCustomersRequest$Outbound = {
  page: number;
  limit: number;
  "company-id"?: any | undefined;
};

/** @internal */
export const ListCustomersRequest$outboundSchema: z.ZodType<
  ListCustomersRequest$Outbound,
  z.ZodTypeDef,
  ListCustomersRequest
> = z.object({
  page: z.number().default(1),
  limit: z.number().default(10),
  companyId: z.any().optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersRequest$ {
  /** @deprecated use `ListCustomersRequest$inboundSchema` instead. */
  export const inboundSchema = ListCustomersRequest$inboundSchema;
  /** @deprecated use `ListCustomersRequest$outboundSchema` instead. */
  export const outboundSchema = ListCustomersRequest$outboundSchema;
  /** @deprecated use `ListCustomersRequest$Outbound` instead. */
  export type Outbound = ListCustomersRequest$Outbound;
}

/** @internal */
export const ListCustomersData$inboundSchema: z.ZodType<
  ListCustomersData,
  z.ZodTypeDef,
  unknown
> = z.object({
  resultArray: z.array(components.Customer$inboundSchema),
});

/** @internal */
export type ListCustomersData$Outbound = {
  resultArray: Array<components.Customer$Outbound>;
};

/** @internal */
export const ListCustomersData$outboundSchema: z.ZodType<
  ListCustomersData$Outbound,
  z.ZodTypeDef,
  ListCustomersData
> = z.object({
  resultArray: z.array(components.Customer$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersData$ {
  /** @deprecated use `ListCustomersData$inboundSchema` instead. */
  export const inboundSchema = ListCustomersData$inboundSchema;
  /** @deprecated use `ListCustomersData$outboundSchema` instead. */
  export const outboundSchema = ListCustomersData$outboundSchema;
  /** @deprecated use `ListCustomersData$Outbound` instead. */
  export type Outbound = ListCustomersData$Outbound;
}

/** @internal */
export const ListCustomersResponseBody$inboundSchema: z.ZodType<
  ListCustomersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.lazy(() => ListCustomersData$inboundSchema),
});

/** @internal */
export type ListCustomersResponseBody$Outbound = {
  data: ListCustomersData$Outbound;
};

/** @internal */
export const ListCustomersResponseBody$outboundSchema: z.ZodType<
  ListCustomersResponseBody$Outbound,
  z.ZodTypeDef,
  ListCustomersResponseBody
> = z.object({
  data: z.lazy(() => ListCustomersData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersResponseBody$ {
  /** @deprecated use `ListCustomersResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListCustomersResponseBody$inboundSchema;
  /** @deprecated use `ListCustomersResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListCustomersResponseBody$outboundSchema;
  /** @deprecated use `ListCustomersResponseBody$Outbound` instead. */
  export type Outbound = ListCustomersResponseBody$Outbound;
}

/** @internal */
export const ListCustomersResponse$inboundSchema: z.ZodType<
  ListCustomersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListCustomersResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListCustomersResponse$Outbound = {
  Result: ListCustomersResponseBody$Outbound;
};

/** @internal */
export const ListCustomersResponse$outboundSchema: z.ZodType<
  ListCustomersResponse$Outbound,
  z.ZodTypeDef,
  ListCustomersResponse
> = z.object({
  result: z.lazy(() => ListCustomersResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersResponse$ {
  /** @deprecated use `ListCustomersResponse$inboundSchema` instead. */
  export const inboundSchema = ListCustomersResponse$inboundSchema;
  /** @deprecated use `ListCustomersResponse$outboundSchema` instead. */
  export const outboundSchema = ListCustomersResponse$outboundSchema;
  /** @deprecated use `ListCustomersResponse$Outbound` instead. */
  export type Outbound = ListCustomersResponse$Outbound;
}
