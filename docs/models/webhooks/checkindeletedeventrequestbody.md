# CheckinDeletedEventRequestBody

Checkin Deleted Event (Not implemented)

## Example Usage

```typescript
import { CheckinDeletedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: CheckinDeletedEventRequestBody = {
  data: {
    id: "chk_12345",
    name: "My Event",
    customer: "usr_12345",
    company: "cli_12345",
    timestamp: 1672531200000,
    role: "staff",
    typeId: "cit_12345",
    type: {
      id: "cit_12345",
      name: "Weightlifting Seminar",
    },
  },
  created: 437587,
  event: "checkin.deleted",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | *components.Checkin*                                                                   | :heavy_check_mark:                                                                     | Checkin for a class, event, appointment or an open facility                            |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | Unix timestamp representing when the event was created                                 |
| `event`                                                                                | [webhooks.CheckinDeletedEventEvent](../../models/webhooks/checkindeletedeventevent.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |