# UpdateWebhookRequestBody

## Example Usage

```typescript
import { UpdateWebhookRequestBody } from "@pushpress/pushpress/models/operations";

let value: UpdateWebhookRequestBody = {
  eventTypes: [
    "appointment.scheduled",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `url`                                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | The URL to send the webhook to                                                             |
| `eventTypes`                                                                               | [operations.UpdateWebhookEventTypes](../../models/operations/updatewebhookeventtypes.md)[] | :heavy_check_mark:                                                                         | The event types to listen for, valid event types include check                             |