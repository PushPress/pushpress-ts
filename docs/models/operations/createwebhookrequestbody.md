# CreateWebhookRequestBody

## Example Usage

```typescript
import { CreateWebhookRequestBody } from "@pushpress/pushpress/models/operations";

let value: CreateWebhookRequestBody = {
  url: "https://thin-gazebo.name",
  eventTypes: [
    "app.installed",
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `appId`                                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | Webhooks for application lifecycle events must be created with an app ID                                                       |
| `url`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The URL to send the webhook to                                                                                                 |
| `eventTypes`                                                                                                                   | *operations.EventTypes*                                                                                                        | :heavy_check_mark:                                                                                                             | Webhooks registration must either apply to a set application events (e.g app.installed, app.uninstalled) or to customer events |