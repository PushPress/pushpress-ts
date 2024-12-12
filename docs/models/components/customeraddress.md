# CustomerAddress

## Example Usage

```typescript
import { CustomerAddress } from "@pushpress/pushpress/models/components";

let value: CustomerAddress = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `line1`                                            | *string*                                           | :heavy_minus_sign:                                 | The primary street address of the customer         |
| `line2`                                            | *string*                                           | :heavy_minus_sign:                                 | An additional street address line for the customer |
| `city`                                             | *string*                                           | :heavy_minus_sign:                                 | The city where the customer resides                |
| `country`                                          | *string*                                           | :heavy_minus_sign:                                 | The country where the customer resides             |
| `state`                                            | *string*                                           | :heavy_minus_sign:                                 | The state or province where the customer resides   |
| `zip`                                              | *string*                                           | :heavy_minus_sign:                                 | The postal code of the customer's address          |