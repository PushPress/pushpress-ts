# Company

Represents an entity with one or more PushPress accounts, such as a gym, martial arts studio, or mermaid swim school

## Example Usage

```typescript
import { Company } from "@pushpress/pushpress/models/components";

let value: Company = {
  id: "client_asdfghjklqwertyuiop",
  name: "PushPress",
  subdomain: "pushpress",
  address: {
    city: "Los Angeles",
    state: "CA",
    postalCode: "90210",
    country: {
      name: "United States",
      iso: "US",
    },
    line1: "123 Street",
    line2: "Apt 4B",
  },
  defaultTimezone: "America/Los_Angeles",
  phone: "(555) 555-5555",
  email: "support@pushpress.com",
  url: "https://pushpress.com",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | A unique identifier for the company                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | The name of the company                                  |
| `subdomain`                                              | *string*                                                 | :heavy_check_mark:                                       | The subdomain associated with the company                |
| `address`                                                | [components.Address](../../models/components/address.md) | :heavy_check_mark:                                       | N/A                                                      |
| `defaultTimezone`                                        | *string*                                                 | :heavy_check_mark:                                       | The default timezone of the company                      |
| `phone`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The contact phone number of the company                  |
| `email`                                                  | *string*                                                 | :heavy_check_mark:                                       | The contact email address of the company                 |
| `url`                                                    | *string*                                                 | :heavy_minus_sign:                                       | The website URL of the company                           |