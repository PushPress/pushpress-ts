# AppointmentCanceledEventRequestBody

Appointment Canceled Event

## Example Usage

```typescript
import { AppointmentCanceledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: AppointmentCanceledEventRequestBody = {
  data: {
    id: "<id>",
    customerId: "<id>",
    companyId: "<id>",
  },
  created: 990864,
  event: "appointment.canceled",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [webhooks.Data](../../models/webhooks/data.md)                                                   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `created`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | Unix timestamp representing when the event was created                                           |
| `event`                                                                                          | [webhooks.AppointmentCanceledEventEvent](../../models/webhooks/appointmentcanceledeventevent.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |