# GetWebhookResponseBody

Default Response

## Example Usage

```typescript
import { GetWebhookResponseBody } from "@pushpress/pushpress/models/operations";

let value: GetWebhookResponseBody = {
  id: "<id>",
  url: "https://repentant-ignorance.name/",
  eventTypes: [
    "app.uninstalled",
  ],
  signingSecret: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier for the webhook                                                |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | The URL that receives the webhook                                                    |
| `eventTypes`                                                                         | [operations.GetWebhookEventTypes](../../models/operations/getwebhookeventtypes.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `active`                                                                             | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether the webhook is actively receiving events or is disabled                      |
| `signingSecret`                                                                      | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |