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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | A unique identifier assigned to each customer                            |
| `name`                                                                   | [components.Name](../../models/components/name.md)                       | :heavy_check_mark:                                                       | N/A                                                                      |
| `address`                                                                | [components.CustomerAddress](../../models/components/customeraddress.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `profileImage`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL pointing to the customer's profile image                           |
| `email`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The email address of the customer                                        |
| `phone`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The phone number of the customer                                         |
| `role`                                                                   | [components.CustomerRole](../../models/components/customerrole.md)       | :heavy_check_mark:                                                       | The role of the customer within the company (e.g., admin, coach, member) |