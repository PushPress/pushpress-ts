# RotateWebhookSigningSecretRequest

## Example Usage

```typescript
import { RotateWebhookSigningSecretRequest } from "@pushpress/pushpress/models/operations";

let value: RotateWebhookSigningSecretRequest = {
  uuid: "9e684763-8458-4c5e-9d04-715ba9b35ae8",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |