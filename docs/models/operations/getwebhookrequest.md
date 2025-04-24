# GetWebhookRequest

## Example Usage

```typescript
import { GetWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: GetWebhookRequest = {
  uuid: "7f9ded2a-6164-4d0f-9550-26e1fd753900",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |