# RotateWebhookSigningSecretRequest

## Example Usage

```typescript
import { RotateWebhookSigningSecretRequest } from "@pushpress/pushpress/models/operations";

let value: RotateWebhookSigningSecretRequest = {
  uuid: "3274d38f-adfc-4bff-a714-26296ef849e6",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |