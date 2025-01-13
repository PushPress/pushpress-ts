# ReservationCanceledEventRequestBody

Reservation canceled Event

## Example Usage

```typescript
import { ReservationCanceledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: ReservationCanceledEventRequestBody = {
  data: {
    id: "reg_12345",
    reservedId: "cal-12345",
    customerId: "usr_12345",
    companyId: "cli_12345",
    registrationTimestamp: 1672531200000,
    status: "reserved",
  },
  created: 978619,
  event: "reservation.canceled",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         | Example                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                              | [components.Reservation](../../models/components/reservation.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                  | Schema for representing a reservation for a class or event                                                                                                          | {<br/>"id": "reg_12345",<br/>"customerId": "usr_12345",<br/>"companyId": "cli_12345",<br/>"reservedId": "cal-12345",<br/>"registrationTimestamp": 1672531200000,<br/>"status": "reserved"<br/>} |
| `created`                                                                                                                                                           | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Unix timestamp representing when the event was created                                                                                                              |                                                                                                                                                                     |
| `event`                                                                                                                                                             | [webhooks.ReservationCanceledEventEvent](../../models/webhooks/reservationcanceledeventevent.md)                                                                    | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |                                                                                                                                                                     |