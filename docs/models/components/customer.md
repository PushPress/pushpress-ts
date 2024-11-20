# Customer

Schema representing a customer, former customer or lead served by Company

## Example Usage

```typescript
import { Customer } from "@pushpress/pushpress/models/components";

let value: Customer = {
  id: "usr_1234",
  name: {
    first: "John",
    last: "Doe",
  },
  address: {
    line1: "123 Main St",
    line2: "Apt 1",
    city: "Anytown",
    state: "USA",
    zip: "12345",
  },
  profileImage: "https://example.com/profile.jpg",
  email: "john@doe.com",
  phone: "+1-800-555-1234",
  role: "member",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier for the customer                                 |
| `name`                                                             | [components.Name](../../models/components/name.md)                 | :heavy_check_mark:                                                 | N/A                                                                |
| `address`                                                          | [components.Address](../../models/components/address.md)           | :heavy_check_mark:                                                 | N/A                                                                |
| `profileImage`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | URL to the profile image of the customer                           |
| `email`                                                            | *string*                                                           | :heavy_check_mark:                                                 | Email address of the customer                                      |
| `phone`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | Phone number of the customer                                       |
| `role`                                                             | [components.CustomerRole](../../models/components/customerrole.md) | :heavy_check_mark:                                                 | Customer role in the company (.e.g. admin, coach, member)          |