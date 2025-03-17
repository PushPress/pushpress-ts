# CountCheckinsRequest

## Example Usage

```typescript
import { CountCheckinsRequest } from "@pushpress/pushpress/models/operations";

let value: CountCheckinsRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `include`                                                                              | [operations.Include](../../models/operations/include.md)                               | :heavy_minus_sign:                                                                     | When defined only include checkins for these categories                                |
| `type`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | When defined only include sub categories of classes/appointments/events with this type |
| `customer`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `before`                                                                               | *number*                                                                               | :heavy_minus_sign:                                                                     | Checkins before this unix timestamp                                                    |
| `after`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | Checkins after this unix timestamp                                                     |
| `companyId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | When using multitenant API keys, specify the company                                   |