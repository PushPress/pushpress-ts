# AppUninstalledEventRequestBody

App Uninstalled Event

## Example Usage

```typescript
import { AppUninstalledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppUninstalledEventRequestBody = {
  data: {},
  created: 891773,
  event: "app.uninstalled",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [webhooks.AppUninstalledEventData](../../models/webhooks/appuninstalledeventdata.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | Unix timestamp representing when the event was created                                 |
| `event`                                                                                | [webhooks.AppUninstalledEventEvent](../../models/webhooks/appuninstalledeventevent.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |