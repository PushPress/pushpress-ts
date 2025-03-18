# CreateWebhookRequest

## Example Usage

```typescript
import { CreateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: CreateWebhookRequest = {
  requestBody: {
    url: "https://delirious-scorpion.com/",
    eventTypes: [
      "memberapp.updated",
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `companyId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | When using multitenant API keys, specify the company                                       |
| `requestBody`                                                                              | [operations.CreateWebhookRequestBody](../../models/operations/createwebhookrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |