# DeleteWebhookRequest

## Example Usage

```typescript
import { DeleteWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: DeleteWebhookRequest = {
  uuid: "43a3a868-4b65-4de0-b35d-ffe4f31f3b0b",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |