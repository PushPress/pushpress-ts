# AppInstalledEventRequestBody

App Installed Event

## Example Usage

```typescript
import { AppInstalledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppInstalledEventRequestBody = {
  data: {
    clientUuid: "company-uuid",
    appId: "app-uuid",
    installationId: "installation-uuid",
  },
  created: 591238,
  event: "app.installed",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.AppInstall](../../models/components/appinstall.md)                               | :heavy_check_mark:                                                                           | Information about the app                                                                    | {<br/>"clientUuid": "company-uuid",<br/>"appId": "app-uuid",<br/>"installationId": "installation-uuid"<br/>} |
| `created`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | Unix timestamp representing when the event was created                                       |                                                                                              |
| `event`                                                                                      | [webhooks.AppInstalledEventEvent](../../models/webhooks/appinstalledeventevent.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |