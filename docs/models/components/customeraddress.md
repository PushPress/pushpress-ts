# CustomerAddress

## Example Usage

```typescript
import { CustomerAddress } from "@pushpress/pushpress/models/components";

let value: CustomerAddress = {
  line1: "<value>",
  line2: "<value>",
  city: "Osborneland",
  country: "Nicaragua",
  state: "Delaware",
  zip: "54274-5066",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `line1`                                            | *string*                                           | :heavy_check_mark:                                 | The primary street address of the customer         |
| `line2`                                            | *string*                                           | :heavy_check_mark:                                 | An additional street address line for the customer |
| `city`                                             | *string*                                           | :heavy_check_mark:                                 | The city where the customer resides                |
| `country`                                          | *string*                                           | :heavy_check_mark:                                 | The country where the customer resides             |
| `state`                                            | *string*                                           | :heavy_check_mark:                                 | The state or province where the customer resides   |
| `zip`                                              | *string*                                           | :heavy_check_mark:                                 | The postal code of the customer's address          |