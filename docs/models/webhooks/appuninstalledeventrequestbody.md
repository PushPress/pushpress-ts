# AppUninstalledEventRequestBody

App Uninstalled Event (Not implemented)

## Example Usage

```typescript
import { AppUninstalledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppUninstalledEventRequestBody = {
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
  created: 963663,
  event: "app.uninstalled",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                              | [components.AppInstall](../../models/components/appinstall.md)                                                      | :heavy_check_mark:                                                                                                  | Information about the app                                                                                           | {<br/>"company": {<br/>"id": "company-uuid"<br/>},<br/>"app": {<br/>"id": "app-uuid"<br/>},<br/>"installation": {<br/>"id": "installation-uuid"<br/>}<br/>} |
| `created`                                                                                                           | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | Unix timestamp representing when the event was created                                                              |                                                                                                                     |
| `event`                                                                                                             | [webhooks.AppUninstalledEventEvent](../../models/webhooks/appuninstalledeventevent.md)                              | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |