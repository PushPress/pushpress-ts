# DeleteWebhookRequest

## Example Usage

```typescript
import { DeleteWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: DeleteWebhookRequest = {
  uuid: "426f2e87-e7b6-4ebb-b5ca-32cf79d7f9de",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |