# ListEnrollmentsRequest

## Example Usage

```typescript
import { ListEnrollmentsRequest } from "@pushpress/pushpress/models/operations";

let value: ListEnrollmentsRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `page`                                                 | *number*                                               | :heavy_minus_sign:                                     | page number                                            |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | limit                                                  |
| `customerId`                                           | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `companyId`                                            | *string*                                               | :heavy_minus_sign:                                     | When using multitenant API keys, specify the company   |