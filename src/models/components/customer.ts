/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Name = {
  /**
   * The first name of the customer
   */
  first: string;
  /**
   * The last name of the customer
   */
  last: string;
};

export type Address = {
  /**
   * The primary street address of the customer
   */
  line1?: string | undefined;
  /**
   * An additional street address line for the customer
   */
  line2?: string | undefined;
  /**
   * The city where the customer resides
   */
  city?: string | undefined;
  /**
   * The country where the customer resides
   */
  country?: string | undefined;
  /**
   * The state or province where the customer resides
   */
  state?: string | undefined;
  /**
   * The postal code of the customer's address
   */
  zip?: string | undefined;
};

/**
 * The role of the customer within the company (e.g., admin, coach, member)
 */
export const CustomerRole = {
  Superuser: "superuser",
  Admin: "admin",
  Frontdesk: "frontdesk",
  Coach: "coach",
  Member: "member",
} as const;
/**
 * The role of the customer within the company (e.g., admin, coach, member)
 */
export type CustomerRole = ClosedEnum<typeof CustomerRole>;

/**
 * Schema representing a customer, former customer, or lead served by the company
 */
export type Customer = {
  /**
   * A unique identifier assigned to each customer
   */
  id: string;
  name: Name;
  address: Address;
  /**
   * A URL pointing to the customer's profile image
   */
  profileImage?: string | undefined;
  /**
   * The email address of the customer
   */
  email: string;
  /**
   * The phone number of the customer
   */
  phone?: string | undefined;
  /**
   * The role of the customer within the company (e.g., admin, coach, member)
   */
  role: CustomerRole;
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

export function nameToJSON(name: Name): string {
  return JSON.stringify(Name$outboundSchema.parse(name));
}

export function nameFromJSON(
  jsonString: string,
): SafeParseResult<Name, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Name$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Name' from JSON`,
  );
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

export function addressToJSON(address: Address): string {
  return JSON.stringify(Address$outboundSchema.parse(address));
}

export function addressFromJSON(
  jsonString: string,
): SafeParseResult<Address, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Address$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Address' from JSON`,
  );
}

/** @internal */
export const CustomerRole$inboundSchema: z.ZodNativeEnum<typeof CustomerRole> =
  z.nativeEnum(CustomerRole);

/** @internal */
export const CustomerRole$outboundSchema: z.ZodNativeEnum<typeof CustomerRole> =
  CustomerRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerRole$ {
  /** @deprecated use `CustomerRole$inboundSchema` instead. */
  export const inboundSchema = CustomerRole$inboundSchema;
  /** @deprecated use `CustomerRole$outboundSchema` instead. */
  export const outboundSchema = CustomerRole$outboundSchema;
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
  role: CustomerRole$inboundSchema,
});

/** @internal */
export type Customer$Outbound = {
  id: string;
  name: Name$Outbound;
  address: Address$Outbound;
  profileImage?: string | undefined;
  email: string;
  phone?: string | undefined;
  role: string;
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
  role: CustomerRole$outboundSchema,
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

export function customerToJSON(customer: Customer): string {
  return JSON.stringify(Customer$outboundSchema.parse(customer));
}

export function customerFromJSON(
  jsonString: string,
): SafeParseResult<Customer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Customer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Customer' from JSON`,
  );
}
