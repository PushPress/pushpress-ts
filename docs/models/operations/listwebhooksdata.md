# ListWebhooksData

## Example Usage

```typescript
import { ListWebhooksData } from "@pushpress/pushpress/models/operations";

let value: ListWebhooksData = {
  id: "<id>",
  url: "https://prime-designation.com",
  eventTypes: [
    "reservation.waitlisted",
  ],
  signingSecret: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | A unique identifier for the webhook                                                        |
| `url`                                                                                      | *string*                                                                                   | :heavy_check_mark:                                                                         | The endpoint URL that will receive the webhook payloads                                    |
| `appId`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | The app ID with which application lifecyle event types (e.g. app.installed) are associated |
| `eventTypes`                                                                               | [operations.ListWebhooksEventTypes](../../models/operations/listwebhookseventtypes.md)[]   | :heavy_check_mark:                                                                         | A list of event types that the webhook is subscribed to                                    |
| `active`                                                                                   | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Indicates whether the webhook is currently active and receiving events                     |
| `signingSecret`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | A secret key used to sign the webhook payloads for security purposes                       |