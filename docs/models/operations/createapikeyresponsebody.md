# CreateApiKeyResponseBody

Platform API key

## Example Usage

```typescript
import { CreateApiKeyResponseBody } from "@pushpress/pushpress/models/operations";

let value: CreateApiKeyResponseBody = {
  keyUuid: "key_asdfghjklqwertyuiop",
  companyId: "client_asdfghjklqwertyuiop",
  name: "My API Key",
  description: "Additional description to add context to the key",
  createdAt: 1577836800000,
  lastUsedAt: null,
  expiresAt: null,
  apiKey: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `keyUuid`                      | *string*                       | :heavy_check_mark:             | N/A                            |
| `companyId`                    | *string*                       | :heavy_check_mark:             | N/A                            |
| `name`                         | *string*                       | :heavy_check_mark:             | N/A                            |
| `description`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `createdAt`                    | *number*                       | :heavy_check_mark:             | N/A                            |
| `lastUsedAt`                   | *number*                       | :heavy_minus_sign:             | Unix timestamp in milliseconds |
| `expiresAt`                    | *number*                       | :heavy_minus_sign:             | Unix timestamp in milliseconds |
| `apiKey`                       | *string*                       | :heavy_check_mark:             | Newly created API key          |