# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: CreateWebhookRequest = {
  requestBody: {
    url: "https://damp-object.com",
    eventTypes: [
      "app.installed",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `companyId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.CreateWebhookRequestBody](../../models/operations/createwebhookrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |