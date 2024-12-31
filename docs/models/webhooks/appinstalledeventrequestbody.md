# AppInstalledEventRequestBody

App Installed Event (Not implemented)

## Example Usage

```typescript
import { AppInstalledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppInstalledEventRequestBody = {
  data: {
    company: {
      id: "company-uuid",
    },
    app: {
      id: "app-uuid",
    },
    installation: {
      id: "installation-uuid",
    },
  },
  created: 891773,
  event: "app.installed",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                              | [components.AppInstall](../../models/components/appinstall.md)                                                      | :heavy_check_mark:                                                                                                  | Information about the app                                                                                           | {<br/>"company": {<br/>"id": "company-uuid"<br/>},<br/>"app": {<br/>"id": "app-uuid"<br/>},<br/>"installation": {<br/>"id": "installation-uuid"<br/>}<br/>} |
| `created`                                                                                                           | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | Unix timestamp representing when the event was created                                                              |                                                                                                                     |
| `event`                                                                                                             | [webhooks.AppInstalledEventEvent](../../models/webhooks/appinstalledeventevent.md)                                  | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |