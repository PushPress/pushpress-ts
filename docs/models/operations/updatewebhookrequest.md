# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: UpdateWebhookRequest = {
  uuid: "26e1fd75-3900-4614-9342-019ff62a7f1c",
  requestBody: {
    eventTypes: [
      "checkin.updated",
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