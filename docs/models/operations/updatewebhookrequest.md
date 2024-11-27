# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: UpdateWebhookRequest = {
  uuid: "b692275f-cbe1-489f-8431-0eac4917fe5f",
  requestBody: {
    eventTypes: [
      "app.uninstalled",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `uuid`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `companyId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | When using multitenant API keys, specify the company                                       |
| `requestBody`                                                                              | [operations.UpdateWebhookRequestBody](../../models/operations/updatewebhookrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |