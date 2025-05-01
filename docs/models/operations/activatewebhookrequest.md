# ActivateWebhookRequest

## Example Usage

```typescript
import { ActivateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: ActivateWebhookRequest = {
  uuid: "49e68476-3845-48c5-aed0-4715ba9b35ae",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |