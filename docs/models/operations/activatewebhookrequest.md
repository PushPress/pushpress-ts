# ActivateWebhookRequest

## Example Usage

```typescript
import { ActivateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: ActivateWebhookRequest = {
  uuid: "f79d7f9d-ed2a-4616-84d0-f55026e1fd75",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |