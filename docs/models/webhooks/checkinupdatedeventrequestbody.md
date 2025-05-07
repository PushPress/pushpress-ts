# CheckinUpdatedEventRequestBody

Any general update to a checkin will trigger this event

## Example Usage

```typescript
import { CheckinUpdatedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: CheckinUpdatedEventRequestBody = {
  data: {
    id: "apptschdl_12345",
    customer: "usr_12345",
    company: "cli_12345",
    timestamp: 1672531200000,
    name: "Personal Training",
    appointmentId: "apptschdl_12345",
    typeId: "appttype_12345",
    staffId: "usr_78910",
  },
  created: 114172,
  event: "checkin.updated",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | *components.Checkin*                                                                   | :heavy_check_mark:                                                                     | Checkin for a class, event, appointment or an open facility                            |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | Unix timestamp representing when the event was created                                 |
| `event`                                                                                | [webhooks.CheckinUpdatedEventEvent](../../models/webhooks/checkinupdatedeventevent.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |