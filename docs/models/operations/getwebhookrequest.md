# GetWebhookRequest

## Example Usage

```typescript
import { GetWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: GetWebhookRequest = {
  uuid: "7fe5f3ff-cad4-4d90-b52f-77a52d3831df",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |