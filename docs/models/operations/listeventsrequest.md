# ListEventsRequest

## Example Usage

```typescript
import { ListEventsRequest } from "@pushpress/pushpress/models/operations";

let value: ListEventsRequest = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | page number                                          |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | limit                                                |
| `order`                                              | [operations.Order](../../models/operations/order.md) | :heavy_minus_sign:                                   | sort events by start timestamp                       |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |