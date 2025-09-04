# ListCustomersRequest

## Example Usage

```typescript
import { ListCustomersRequest } from "@pushpress/pushpress/models/operations";

let value: ListCustomersRequest = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | page number                                          |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | limit                                                |
| `role`                                               | [operations.Role](../../models/operations/role.md)   | :heavy_minus_sign:                                   | Filter by role such as admin, frontdesk, or member   |
| `email`                                              | *string*                                             | :heavy_minus_sign:                                   | optional filter by email                             |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |