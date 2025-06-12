# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: UpdateWebhookRequest = {
  uuid: "f5aa9e8d-33b8-4ea9-a2a0-4723114fb58c",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `uuid`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `companyId`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | When using multitenant API keys, specify the company                                       |
| `requestBody`                                                                              | [operations.UpdateWebhookRequestBody](../../models/operations/updatewebhookrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |