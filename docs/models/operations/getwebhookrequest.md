# GetWebhookRequest

## Example Usage

```typescript
import { GetWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: GetWebhookRequest = {
  uuid: "1a78ef3a-40c5-469d-9ad4-c2fa3fb43803",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |