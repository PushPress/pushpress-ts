# DeleteWebhookRequest

## Example Usage

```typescript
import { DeleteWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: DeleteWebhookRequest = {
  uuid: "831dffec-5163-420b-90c2-11a368db4204",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |