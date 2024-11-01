# CreateWebhookResponseBody

Default Response

## Example Usage

```typescript
import { CreateWebhookResponseBody } from "@pushpress/pushpress/models/operations";

let value: CreateWebhookResponseBody = {
  id: "<id>",
  url: "https://impure-battle.net",
  eventTypes: [
    "customer.created",
  ],
  signingSecret: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique identifier for the webhook                                                      |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The URL that receives the webhook                                                          |
| `eventTypes`                                                                               | [operations.CreateWebhookEventTypes](../../models/operations/createwebhookeventtypes.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `active`                                                                                   | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether the webhook is actively receiving events or is disabled                            |
| `signingSecret`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |