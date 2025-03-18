# GetWebhookRequest

## Example Usage

```typescript
import { GetWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: GetWebhookRequest = {
  uuid: "688a426f-2e87-4e7b-b6eb-b5ca32cf79d7",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |