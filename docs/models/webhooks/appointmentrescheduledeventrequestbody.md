# AppointmentRescheduledEventRequestBody

Appointment Rescheduled Event (Not implemented)

## Example Usage

```typescript
import { AppointmentRescheduledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppointmentRescheduledEventRequestBody = {
  data: {
    id: "apptschdl_12345",
    type: {
      name: "Personal Training",
    },
    companyId: "client_12345",
    customerId: "usr_12345",
    startTimestamp: 1677721600,
    staffId: "usr_78910",
  },
  created: 791725,
  event: "appointment.rescheduled",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        | Example                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                             | [components.Appointment](../../models/components/appointment.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                                 | Schema for representing a Regsitration for some scheduled event                                                                                                                    | {<br/>"id": "apptschdl_12345",<br/>"type": {<br/>"name": "Personal Training"<br/>},<br/>"companyId": "client_12345",<br/>"customerId": "usr_12345",<br/>"startTimestamp": 1677721600,<br/>"staffId": "usr_78910"<br/>} |
| `created`                                                                                                                                                                          | *number*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | Unix timestamp representing when the event was created                                                                                                                             |                                                                                                                                                                                    |
| `event`                                                                                                                                                                            | [webhooks.AppointmentRescheduledEventEvent](../../models/webhooks/appointmentrescheduledeventevent.md)                                                                             | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |                                                                                                                                                                                    |