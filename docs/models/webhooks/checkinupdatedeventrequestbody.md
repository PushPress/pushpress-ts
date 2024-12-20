# CheckinUpdatedEventRequestBody

not implemented

## Example Usage

```typescript
import { CheckinUpdatedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: CheckinUpdatedEventRequestBody = {
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
  previousvalues: "<value>",
  created: 544883,
  event: "checkin.updated",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | *components.Checkin*                                                                   | :heavy_check_mark:                                                                     | Checkin for a class, event, appointment or an open facility                            |
| `previousvalues`                                                                       | *any*                                                                                  | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | Unix timestamp representing when the event was created                                 |
| `event`                                                                                | [webhooks.CheckinUpdatedEventEvent](../../models/webhooks/checkinupdatedeventevent.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |