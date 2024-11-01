# UpdateWebhookResponseBody

Default Response

## Example Usage

```typescript
import { UpdateWebhookResponseBody } from "@pushpress/pushpress/models/operations";

let value: UpdateWebhookResponseBody = {
  id: "<id>",
  url: "https://oblong-contractor.com/",
  eventTypes: [
    "customer.created",
  ],
  signingSecret: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The unique identifier for the webhook                                                                      |
| `url`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The URL that receives the webhook                                                                          |
| `eventTypes`                                                                                               | [operations.UpdateWebhookWebhooksEventTypes](../../models/operations/updatewebhookwebhookseventtypes.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `active`                                                                                                   | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Whether the webhook is actively receiving events or is disabled                                            |
| `signingSecret`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |