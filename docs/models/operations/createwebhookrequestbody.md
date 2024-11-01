# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@pushpress/pushpress/models/operations";

let value: CreateWebhookRequestBody = {
  url: "https://usable-providence.org/",
  eventTypes: [
    "checkin.updated",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | The URL to send the webhook to                                   |
| `eventTypes`                                                     | [operations.EventTypes](../../models/operations/eventtypes.md)[] | :heavy_check_mark:                                               | The event types to listen for, valid event types include check   |