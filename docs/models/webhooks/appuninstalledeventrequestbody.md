# AppUninstalledEventRequestBody

App Uninstalled Event

## Example Usage

```typescript
import { AppUninstalledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppUninstalledEventRequestBody = {
  data: {
    clientUuid: "company-uuid",
    appId: "app-uuid",
    installationId: "installation-uuid",
  },
  created: 791132,
  event: "app.uninstalled",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.AppInstall](../../models/components/appinstall.md)                               | :heavy_check_mark:                                                                           | Information about the app                                                                    | {<br/>"clientUuid": "company-uuid",<br/>"appId": "app-uuid",<br/>"installationId": "installation-uuid"<br/>} |
| `created`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | Unix timestamp representing when the event was created                                       |                                                                                              |
| `event`                                                                                      | [webhooks.AppUninstalledEventEvent](../../models/webhooks/appuninstalledeventevent.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |