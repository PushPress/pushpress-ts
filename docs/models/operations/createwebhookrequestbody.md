# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@pushpress/pushpress/models/operations";

let value: CreateWebhookRequestBody = {
  url: "https://your-webhook-url.com",
  events: [
    "event_1",
    "event_2",
  ],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `url`                                                 | *string*                                              | :heavy_check_mark:                                    | URL to send the event data to                         | https://your-webhook-url.com                          |
| `events`                                              | *string*[]                                            | :heavy_check_mark:                                    | List of events the webhook is subscribed to           | [<br/>"event_1",<br/>"event_2"<br/>]                  |
| `company`                                             | *string*                                              | :heavy_minus_sign:                                    | companyId of the company to which the webhook belongs |                                                       |