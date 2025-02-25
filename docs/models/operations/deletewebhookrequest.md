# DeleteWebhookRequest

## Example Usage

```typescript
import { DeleteWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: DeleteWebhookRequest = {
  uuid: "4b65de03-5dff-4e4f-931f-3b0be465b327",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |