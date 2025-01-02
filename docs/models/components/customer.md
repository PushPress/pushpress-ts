# Customer

Schema representing a customer, former customer, or lead served by the company

## Example Usage

```typescript
import { Customer } from "@pushpress/pushpress/models/components";

let value: Customer = {
  id: "usr_1234",
  name: {
    first: "John",
    last: "Doe",
    nickname: "jimmy",
  },
  gender: "male",
  dob: "1990-01-01",
  address: {
    line1: "123 Main St",
    line2: "Apt 1",
    city: "Anytown",
    country: "US",
    state: "NY",
    zip: "12345",
  },
  assignedToStaffId: null,
  account: {},
  profileImage: "https://example.com/profile.jpg",
  membershipDetails: {
    initialMembershipStartDate: "2022-01-01",
  },
  email: "john@doe.com",
  phone: "+1-800-555-1234",
  role: "member",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | A unique identifier assigned to each customer                                |
| `name`                                                                       | [components.Name](../../models/components/name.md)                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `gender`                                                                     | [components.Gender](../../models/components/gender.md)                       | :heavy_check_mark:                                                           | The customer's gender, null if unknown or other                              |
| `dob`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | The customer's date of birth, null if not provided, formatted YYYY-MM-DD     |
| `address`                                                                    | [components.CustomerAddress](../../models/components/customeraddress.md)     | :heavy_check_mark:                                                           | Customer address. defaults to an empty string if no value is available       |
| `assignedToStaffId`                                                          | *string*                                                                     | :heavy_check_mark:                                                           | The UUID of the assigned staff member                                        |
| `account`                                                                    | *components.Account*                                                         | :heavy_check_mark:                                                           | N/A                                                                          |
| `profileImage`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL pointing to the customer's profile image                               |
| `emergencyContact`                                                           | [components.EmergencyContact](../../models/components/emergencycontact.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `membershipDetails`                                                          | [components.MembershipDetails](../../models/components/membershipdetails.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `email`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The email address of the customer                                            |
| `phone`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The phone number of the customer                                             |
| `role`                                                                       | [components.CustomerRole](../../models/components/customerrole.md)           | :heavy_check_mark:                                                           | The role of the customer within the company (e.g., admin, coach, member)     |