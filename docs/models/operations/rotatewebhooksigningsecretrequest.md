# RotateWebhookSigningSecretRequest

## Example Usage

```typescript
import { RotateWebhookSigningSecretRequest } from "@pushpress/pushpress/models/operations";

let value: RotateWebhookSigningSecretRequest = {
  uuid: "8458c5ed-0471-45ba-99b3-5ae840b058e1",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |