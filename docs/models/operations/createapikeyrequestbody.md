# CreateApiKeyRequestBody

Create a new key

## Example Usage

```typescript
import { CreateApiKeyRequestBody } from "@pushpress/pushpress/models/operations";

let value: CreateApiKeyRequestBody = {
  name: "my-key",
  description: "my key",
  expiresAt: 1672531200000,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `name`                         | *string*                       | :heavy_check_mark:             | N/A                            |
| `description`                  | *string*                       | :heavy_minus_sign:             | N/A                            |
| `expiresAt`                    | *number*                       | :heavy_minus_sign:             | unix timestamp in milliseconds |