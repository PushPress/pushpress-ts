# AppInstalledEventRequestBody

## Example Usage

```typescript
import { AppInstalledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppInstalledEventRequestBody = {
  data: {},
  created: 44612,
  eventType: "created",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [webhooks.Data](../../models/webhooks/data.md)           | :heavy_check_mark:                                       | N/A                                                      |
| `created`                                                | *number*                                                 | :heavy_check_mark:                                       | Unix timestamp of the creation event                     |
| `eventType`                                              | [webhooks.EventType](../../models/webhooks/eventtype.md) | :heavy_check_mark:                                       | N/A                                                      |