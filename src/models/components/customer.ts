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
  /**
   * What the customer prefers to be called
   */
  nickname: string | null;
};

/**
 * The customer's gender, null if unknown or other
 */
export const Gender = {
  Male: "male",
  Female: "female",
} as const;
/**
 * The customer's gender, null if unknown or other
 */
export type Gender = ClosedEnum<typeof Gender>;

export type CustomerAddress = {
  /**
   * The primary street address of the customer
   */
  line1: string | null;
  /**
   * An additional street address line for the customer
   */
  line2: string | null;
  /**
   * The city where the customer resides
   */
  city: string | null;
  /**
   * The country where the customer resides
   */
  country: string | null;
  /**
   * The state or province where the customer resides
   */
  state: string | null;
  /**
   * The postal code of the customer's address
   */
  zip: string | null;
};

export type EmergencyContact = {
  /**
   * The name of the emergency contact
   */
  name: string;
  /**
   * The phone number of the emergency contact
   */
  phone: string;
  /**
   * The relationship of the emergency contact to the customer
   */
  relationship: string;
};

export type MembershipDetails = {
  /**
   * The date the customer first became a member
   */
  initialMembershipStartDate: string | null;
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
  /**
   * The customer's gender, null if unknown or other
   */
  gender: Gender | null;
  /**
   * The customer's date of birth, null if not provided, formatted YYYY-MM-DD
   */
  dob: string | null;
  address: CustomerAddress;
  /**
   * The UUID of the assigned staff member
   */
  assignedToStaffId: string | null;
  /**
   * A URL pointing to the customer's profile image
   */
  profileImage?: string | null | undefined;
  emergencyContact?: EmergencyContact | undefined;
  membershipDetails: MembershipDetails | null;
  /**
   * The email address of the customer
   */
  email: string;
  /**
   * The phone number of the customer
   */
  phone: string | null;
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
    nickname: z.nullable(z.string()),
  });

/** @internal */
export type Name$Outbound = {
  first: string;
  last: string;
  nickname: string | null;
};

/** @internal */
export const Name$outboundSchema: z.ZodType<Name$Outbound, z.ZodTypeDef, Name> =
  z.object({
    first: z.string(),
    last: z.string(),
    nickname: z.nullable(z.string()),
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
export const Gender$inboundSchema: z.ZodNativeEnum<typeof Gender> = z
  .nativeEnum(Gender);

/** @internal */
export const Gender$outboundSchema: z.ZodNativeEnum<typeof Gender> =
  Gender$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Gender$ {
  /** @deprecated use `Gender$inboundSchema` instead. */
  export const inboundSchema = Gender$inboundSchema;
  /** @deprecated use `Gender$outboundSchema` instead. */
  export const outboundSchema = Gender$outboundSchema;
}

/** @internal */
export const CustomerAddress$inboundSchema: z.ZodType<
  CustomerAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  line1: z.nullable(z.string()),
  line2: z.nullable(z.string()),
  city: z.nullable(z.string()),
  country: z.nullable(z.string()),
  state: z.nullable(z.string()),
  zip: z.nullable(z.string()),
});

/** @internal */
export type CustomerAddress$Outbound = {
  line1: string | null;
  line2: string | null;
  city: string | null;
  country: string | null;
  state: string | null;
  zip: string | null;
};

/** @internal */
export const CustomerAddress$outboundSchema: z.ZodType<
  CustomerAddress$Outbound,
  z.ZodTypeDef,
  CustomerAddress
> = z.object({
  line1: z.nullable(z.string()),
  line2: z.nullable(z.string()),
  city: z.nullable(z.string()),
  country: z.nullable(z.string()),
  state: z.nullable(z.string()),
  zip: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerAddress$ {
  /** @deprecated use `CustomerAddress$inboundSchema` instead. */
  export const inboundSchema = CustomerAddress$inboundSchema;
  /** @deprecated use `CustomerAddress$outboundSchema` instead. */
  export const outboundSchema = CustomerAddress$outboundSchema;
  /** @deprecated use `CustomerAddress$Outbound` instead. */
  export type Outbound = CustomerAddress$Outbound;
}

export function customerAddressToJSON(
  customerAddress: CustomerAddress,
): string {
  return JSON.stringify(CustomerAddress$outboundSchema.parse(customerAddress));
}

export function customerAddressFromJSON(
  jsonString: string,
): SafeParseResult<CustomerAddress, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerAddress$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerAddress' from JSON`,
  );
}

/** @internal */
export const EmergencyContact$inboundSchema: z.ZodType<
  EmergencyContact,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  phone: z.string(),
  relationship: z.string(),
});

/** @internal */
export type EmergencyContact$Outbound = {
  name: string;
  phone: string;
  relationship: string;
};

/** @internal */
export const EmergencyContact$outboundSchema: z.ZodType<
  EmergencyContact$Outbound,
  z.ZodTypeDef,
  EmergencyContact
> = z.object({
  name: z.string(),
  phone: z.string(),
  relationship: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmergencyContact$ {
  /** @deprecated use `EmergencyContact$inboundSchema` instead. */
  export const inboundSchema = EmergencyContact$inboundSchema;
  /** @deprecated use `EmergencyContact$outboundSchema` instead. */
  export const outboundSchema = EmergencyContact$outboundSchema;
  /** @deprecated use `EmergencyContact$Outbound` instead. */
  export type Outbound = EmergencyContact$Outbound;
}

export function emergencyContactToJSON(
  emergencyContact: EmergencyContact,
): string {
  return JSON.stringify(
    EmergencyContact$outboundSchema.parse(emergencyContact),
  );
}

export function emergencyContactFromJSON(
  jsonString: string,
): SafeParseResult<EmergencyContact, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmergencyContact$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmergencyContact' from JSON`,
  );
}

/** @internal */
export const MembershipDetails$inboundSchema: z.ZodType<
  MembershipDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  initialMembershipStartDate: z.nullable(z.string()),
});

/** @internal */
export type MembershipDetails$Outbound = {
  initialMembershipStartDate: string | null;
};

/** @internal */
export const MembershipDetails$outboundSchema: z.ZodType<
  MembershipDetails$Outbound,
  z.ZodTypeDef,
  MembershipDetails
> = z.object({
  initialMembershipStartDate: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MembershipDetails$ {
  /** @deprecated use `MembershipDetails$inboundSchema` instead. */
  export const inboundSchema = MembershipDetails$inboundSchema;
  /** @deprecated use `MembershipDetails$outboundSchema` instead. */
  export const outboundSchema = MembershipDetails$outboundSchema;
  /** @deprecated use `MembershipDetails$Outbound` instead. */
  export type Outbound = MembershipDetails$Outbound;
}

export function membershipDetailsToJSON(
  membershipDetails: MembershipDetails,
): string {
  return JSON.stringify(
    MembershipDetails$outboundSchema.parse(membershipDetails),
  );
}

export function membershipDetailsFromJSON(
  jsonString: string,
): SafeParseResult<MembershipDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MembershipDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MembershipDetails' from JSON`,
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
  gender: z.nullable(Gender$inboundSchema),
  dob: z.nullable(z.string()),
  address: z.lazy(() => CustomerAddress$inboundSchema),
  assignedToStaffId: z.nullable(z.string()),
  profileImage: z.nullable(z.string()).optional(),
  emergencyContact: z.lazy(() => EmergencyContact$inboundSchema).optional(),
  membershipDetails: z.nullable(z.lazy(() => MembershipDetails$inboundSchema)),
  email: z.string(),
  phone: z.nullable(z.string()),
  role: CustomerRole$inboundSchema,
});

/** @internal */
export type Customer$Outbound = {
  id: string;
  name: Name$Outbound;
  gender: string | null;
  dob: string | null;
  address: CustomerAddress$Outbound;
  assignedToStaffId: string | null;
  profileImage?: string | null | undefined;
  emergencyContact?: EmergencyContact$Outbound | undefined;
  membershipDetails: MembershipDetails$Outbound | null;
  email: string;
  phone: string | null;
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
  gender: z.nullable(Gender$outboundSchema),
  dob: z.nullable(z.string()),
  address: z.lazy(() => CustomerAddress$outboundSchema),
  assignedToStaffId: z.nullable(z.string()),
  profileImage: z.nullable(z.string()).optional(),
  emergencyContact: z.lazy(() => EmergencyContact$outboundSchema).optional(),
  membershipDetails: z.nullable(z.lazy(() => MembershipDetails$outboundSchema)),
  email: z.string(),
  phone: z.nullable(z.string()),
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
