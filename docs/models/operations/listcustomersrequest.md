# ListCustomersRequest

## Example Usage

```typescript
import { ListCustomersRequest } from "@pushpress/pushpress/models/operations";

let value: ListCustomersRequest = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `role`                                               | *operations.Role*                                    | :heavy_minus_sign:                                   | Filter by role such as admin, frontdesk, or member   |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |