# RotateWebhookSigningSecretRequest

## Example Usage

```typescript
import { RotateWebhookSigningSecretRequest } from "@pushpress/pushpress/models/operations";

let value: RotateWebhookSigningSecretRequest = {
  uuid: "47638458-c5ed-4047-915b-a9b35ae840b0",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |