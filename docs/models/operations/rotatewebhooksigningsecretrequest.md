# RotateWebhookSigningSecretRequest

## Example Usage

```typescript
import { RotateWebhookSigningSecretRequest } from "@pushpress/pushpress/models/operations";

let value: RotateWebhookSigningSecretRequest = {
  uuid: "cc975aa0-02c5-4240-a0de-25f549f9545d",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |