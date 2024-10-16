# ApiKey

Platform API key

## Example Usage

```typescript
import { ApiKey } from "pushpress/models/components";

let value: ApiKey = {
  keyUuid: "key_asdfghjklqwertyuiop",
  apiKey: "sk_zyxvutsrqponmlkjihgfedcba",
  clientUuid: "client_asdfghjklqwertyuiop",
  name: "My API Key",
  description: "Additional description to add context to the key",
  createdAt: 1577836800000,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `keyUuid`          | *string*           | :heavy_check_mark: | N/A                |
| `apiKey`           | *string*           | :heavy_check_mark: | N/A                |
| `clientUuid`       | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `description`      | *string*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `expiresAt`        | *number*           | :heavy_minus_sign: | N/A                |