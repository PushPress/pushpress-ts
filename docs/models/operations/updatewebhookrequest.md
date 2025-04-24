# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: UpdateWebhookRequest = {
  uuid: "ff62a7f1-c43a-43a8-9684-b65de035dffe",
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