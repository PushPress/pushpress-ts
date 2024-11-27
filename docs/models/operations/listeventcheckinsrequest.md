# ListEventCheckinsRequest

## Example Usage

```typescript
import { ListEventCheckinsRequest } from "@pushpress/pushpress/models/operations";

let value: ListEventCheckinsRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `page`                                                | *number*                                              | :heavy_minus_sign:                                    | page number                                           |
| `limit`                                               | *number*                                              | :heavy_minus_sign:                                    | limit                                                 |
| `customer`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `before`                                              | *number*                                              | :heavy_minus_sign:                                    | Get all checkins before this unix timestamp (seconds) |
| `after`                                               | *number*                                              | :heavy_minus_sign:                                    | Get all checkins after this unix timestamp (seconds)  |
| `companyId`                                           | *string*                                              | :heavy_minus_sign:                                    | When using multitenant API keys, specify the company  |