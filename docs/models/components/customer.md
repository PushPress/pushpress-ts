# Customer

Schema representing a customer, former customer or lead served by Company

## Example Usage

```typescript
import { Customer } from "@pushpress/pushpress/models/components";

let value: Customer = {
  id: "usr_1234",
  name: "John Doe",
  address: "123 Main St, Anytown, USA",
  profileImage: "https://example.com/profile.jpg",
  email: "john.doe@example.com",
  phone: "+1-800-555-1234",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | Unique identifier for the customer       | usr_1234                                 |
| `name`                                   | *string*                                 | :heavy_minus_sign:                       | Name of the customer                     | John Doe                                 |
| `address`                                | *string*                                 | :heavy_minus_sign:                       | Address of the customer                  | 123 Main St, Anytown, USA                |
| `profileImage`                           | *string*                                 | :heavy_minus_sign:                       | URL to the profile image of the customer | https://example.com/profile.jpg          |
| `email`                                  | *string*                                 | :heavy_check_mark:                       | Email address of the customer            | john.doe@example.com                     |
| `phone`                                  | *string*                                 | :heavy_minus_sign:                       | Phone number of the customer             | +1-800-555-1234                          |