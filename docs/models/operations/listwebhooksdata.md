# ListWebhooksData

## Example Usage

```typescript
import { ListWebhooksData } from "@pushpress/pushpress/models/operations";

let value: ListWebhooksData = {
  id: "<id>",
  url: "https://witty-stock.com",
  eventTypes: [
    "checkin.deleted",
  ],
  signingSecret: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The unique identifier for the webhook                                                    |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | The URL that receives the webhook                                                        |
| `eventTypes`                                                                             | [operations.ListWebhooksEventTypes](../../models/operations/listwebhookseventtypes.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `active`                                                                                 | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether the webhook is actively receiving events or is disabled                          |
| `signingSecret`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |