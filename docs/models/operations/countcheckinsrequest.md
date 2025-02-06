# CountCheckinsRequest

## Example Usage

```typescript
import { CountCheckinsRequest } from "@pushpress/pushpress/models/operations";

let value: CountCheckinsRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `session`                                                                                | *operations.Session*                                                                     | :heavy_minus_sign:                                                                       | Filter for checkins for specific session kinds and optionally filter further on the type |
| `customer`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `before`                                                                                 | *number*                                                                                 | :heavy_minus_sign:                                                                       | Checkins before this unix timestamp                                                      |
| `after`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | Checkins after this unix timestamp                                                       |
| `companyId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | When using multitenant API keys, specify the company                                     |