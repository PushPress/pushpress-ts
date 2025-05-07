# DeactivateWebhookRequest

## Example Usage

```typescript
import { DeactivateWebhookRequest } from "@pushpress/pushpress/models/operations";

let value: DeactivateWebhookRequest = {
  uuid: "154b4b42-c07b-4900-aaef-72f040ccacd0",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |