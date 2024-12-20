# CheckinDeletedEventRequestBody

Checkin Deleted Event (Not implemented)

## Example Usage

```typescript
import { CheckinDeletedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: CheckinDeletedEventRequestBody = {
  data: {
    id: "apptschdl_12345",
    name: "Personal Training",
    customer: "usr_12345",
    company: "cli_12345",
    timestamp: 1672531200000,
    typeId: "appttype_12345",
  },
  created: 645894,
  event: "checkin.deleted",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | *components.Checkin*                                                                   | :heavy_check_mark:                                                                     | Checkin for a class, event, appointment or an open facility                            |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | Unix timestamp representing when the event was created                                 |
| `event`                                                                                | [webhooks.CheckinDeletedEventEvent](../../models/webhooks/checkindeletedeventevent.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |