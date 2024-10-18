# Webhook

## Example Usage

```typescript
import { Webhook } from "@pushpress/pushpress/models/components";

let value: Webhook = {
  id: "UUID",
  url: "https://new-webhook-url.com",
  events: [
    "event_3",
    "event_4",
  ],
  created: 1354.74,
  updated: 2982.82,
  company: "McLaughlin LLC",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | N/A                                                   | UUID                                                  |
| `url`                                                 | *string*                                              | :heavy_check_mark:                                    | URL to post the event data to                         | https://new-webhook-url.com                           |
| `events`                                              | *string*[]                                            | :heavy_check_mark:                                    | List of events the webhook is subscribed to           | [<br/>"event_3",<br/>"event_4"<br/>]                  |
| `created`                                             | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |                                                       |
| `updated`                                             | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |                                                       |
| `company`                                             | *string*                                              | :heavy_check_mark:                                    | companyId of the company to which the webhook belongs |                                                       |