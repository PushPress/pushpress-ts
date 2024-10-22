# ListEventCheckinsRequest

## Example Usage

```typescript
import { ListEventCheckinsRequest } from "@pushpress/pushpress/models/operations";

let value: ListEventCheckinsRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `page`                                                | *number*                                              | :heavy_minus_sign:                                    | Page number                                           |
| `limit`                                               | *number*                                              | :heavy_minus_sign:                                    | Limit                                                 |
| `customer`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `before`                                              | *number*                                              | :heavy_minus_sign:                                    | Get all checkins before this unix timestamp (seconds) |
| `after`                                               | *number*                                              | :heavy_minus_sign:                                    | Get all checkins after this unix timestamp (seconds)  |
| `companyId`                                           | *any*                                                 | :heavy_minus_sign:                                    | N/A                                                   |