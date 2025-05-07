# CheckinDeletedEventRequestBody

Checkin Deleted Event

## Example Usage

```typescript
import { CheckinDeletedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: CheckinDeletedEventRequestBody = {
  data: {
    id: "<id>",
    customerId: "<id>",
    companyId: "<id>",
  },
  created: 218238,
  event: "checkin.deleted",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [webhooks.Data](../../models/webhooks/data.md)                                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | Unix timestamp representing when the event was created                                 |
| `event`                                                                                | [webhooks.CheckinDeletedEventEvent](../../models/webhooks/checkindeletedeventevent.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |