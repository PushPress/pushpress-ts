# GetWebhookRequest

## Example Usage

```typescript
import { GetWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: GetWebhookRequest = {
  uuid: "d4d9052f-77a5-42d3-8831-dffec516320b",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |