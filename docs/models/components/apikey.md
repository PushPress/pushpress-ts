# ApiKey

Platform API key

## Example Usage

```typescript
import { ApiKey } from "@pushpress/pushpress/models/components";

let value: ApiKey = {
  keyUuid: "key_asdfghjklqwertyuiop",
  companyId: "client_asdfghjklqwertyuiop",
  name: "My API Key",
  description: "Additional description to add context to the key",
  createdAt: 1577836800000,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `keyUuid`          | *string*           | :heavy_check_mark: | N/A                |
| `companyId`        | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `description`      | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_minus_sign: | N/A                |