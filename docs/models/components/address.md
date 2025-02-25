# Address

## Example Usage

```typescript
import { Address } from "@pushpress/pushpress/models/components";

let value: Address = {
  city: "East Freidafield",
  state: "California",
  postalCode: "09496-7021",
  country: {
    name: "<value>",
    iso: "<value>",
  },
  line1: "<value>",
  line2: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `city`                                                   | *string*                                                 | :heavy_check_mark:                                       | The city of the company                                  |
| `state`                                                  | *string*                                                 | :heavy_check_mark:                                       | The state of the company                                 |
| `postalCode`                                             | *string*                                                 | :heavy_check_mark:                                       | The postal code of the company                           |
| `country`                                                | [components.Country](../../models/components/country.md) | :heavy_check_mark:                                       | N/A                                                      |
| `line1`                                                  | *string*                                                 | :heavy_check_mark:                                       | The first line of the company address                    |
| `line2`                                                  | *string*                                                 | :heavy_check_mark:                                       | The second line of the company address                   |