/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Name = {
  /**
   * First name of the customer
   */
  first: string;
  /**
   * Last name of the customer
   */
  last: string;
};

export type Address = {
  /**
   * Street address of the customer
   */
  line1?: string | undefined;
  /**
   * Street address of the customer
   */
  line2?: string | undefined;
  /**
   * City of the customer
   */
  city?: string | undefined;
  /**
   * Country of the customer
   */
  country?: string | undefined;
  /**
   * State of the customer
   */
  state?: string | undefined;
  /**
   * Zip code of the customer
   */
  zip?: string | undefined;
};

/**
 * Schema representing a customer, former customer or lead served by Company
 */
export type Customer = {
  /**
   * Unique identifier for the customer
   */
  id: string;
  name: Name;
  address: Address;
  /**
   * URL to the profile image of the customer
   */
  profileImage?: string | undefined;
  /**
   * Email address of the customer
   */
  email: string;
  /**
   * Phone number of the customer
   */
  phone?: string | undefined;
};

/** @internal */
export const Name$inboundSchema: z.ZodType<Name, z.ZodTypeDef, unknown> = z
  .object({
    first: z.string(),
    last: z.string(),
  });

/** @internal */
export type Name$Outbound = {
  first: string;
  last: string;
};

/** @internal */
export const Name$outboundSchema: z.ZodType<Name$Outbound, z.ZodTypeDef, Name> =
  z.object({
    first: z.string(),
    last: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Name$ {
  /** @deprecated use `Name$inboundSchema` instead. */
  export const inboundSchema = Name$inboundSchema;
  /** @deprecated use `Name$outboundSchema` instead. */
  export const outboundSchema = Name$outboundSchema;
  /** @deprecated use `Name$Outbound` instead. */
  export type Outbound = Name$Outbound;
}

/** @internal */
export const Address$inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown> =
  z.object({
    line1: z.string().optional(),
    line2: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  });

/** @internal */
export type Address$Outbound = {
  line1?: string | undefined;
  line2?: string | undefined;
  city?: string | undefined;
  country?: string | undefined;
  state?: string | undefined;
  zip?: string | undefined;
};

/** @internal */
export const Address$outboundSchema: z.ZodType<
  Address$Outbound,
  z.ZodTypeDef,
  Address
> = z.object({
  line1: z.string().optional(),
  line2: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Address$ {
  /** @deprecated use `Address$inboundSchema` instead. */
  export const inboundSchema = Address$inboundSchema;
  /** @deprecated use `Address$outboundSchema` instead. */
  export const outboundSchema = Address$outboundSchema;
  /** @deprecated use `Address$Outbound` instead. */
  export type Outbound = Address$Outbound;
}

/** @internal */
export const Customer$inboundSchema: z.ZodType<
  Customer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.lazy(() => Name$inboundSchema),
  address: z.lazy(() => Address$inboundSchema),
  profileImage: z.string().optional(),
  email: z.string(),
  phone: z.string().optional(),
});

/** @internal */
export type Customer$Outbound = {
  id: string;
  name: Name$Outbound;
  address: Address$Outbound;
  profileImage?: string | undefined;
  email: string;
  phone?: string | undefined;
};

/** @internal */
export const Customer$outboundSchema: z.ZodType<
  Customer$Outbound,
  z.ZodTypeDef,
  Customer
> = z.object({
  id: z.string(),
  name: z.lazy(() => Name$outboundSchema),
  address: z.lazy(() => Address$outboundSchema),
  profileImage: z.string().optional(),
  email: z.string(),
  phone: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Customer$ {
  /** @deprecated use `Customer$inboundSchema` instead. */
  export const inboundSchema = Customer$inboundSchema;
  /** @deprecated use `Customer$outboundSchema` instead. */
  export const outboundSchema = Customer$outboundSchema;
  /** @deprecated use `Customer$Outbound` instead. */
  export type Outbound = Customer$Outbound;
}
