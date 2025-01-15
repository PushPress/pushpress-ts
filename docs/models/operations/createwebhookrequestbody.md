# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@pushpress/pushpress/models/operations";

let value: CreateWebhookRequestBody = {
  url: "https://complete-provision.info",
  eventTypes: [
    "enrollment.created",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `appId`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | Webhooks for application lifecycle events must be created with an app ID |
| `url`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | The URL to send the webhook to                                           |
| `eventTypes`                                                             | [operations.EventTypes](../../models/operations/eventtypes.md)[]         | :heavy_check_mark:                                                       | Webhooks are registered to specific events                               |