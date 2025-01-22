# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: UpdateWebhookRequest = {
  uuid: "11a368db-4204-447a-9b46-2c0bcc459453",
  requestBody: {
    eventTypes: [
      "appointment.scheduled",
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