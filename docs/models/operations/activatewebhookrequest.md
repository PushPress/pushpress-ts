# ActivateWebhookRequest

## Example Usage

```typescript
import { ActivateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: ActivateWebhookRequest = {
  uuid: "a8684b65-de03-45df-afe4-f31f3b0be465",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |