# ActivateWebhookRequest

## Example Usage

```typescript
import { ActivateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: ActivateWebhookRequest = {
  uuid: "d38fadfc-bff7-4142-8629-6ef849e68476",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |