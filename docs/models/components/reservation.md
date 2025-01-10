# Reservation

Schema for representing a reservation for a class or event

## Example Usage

```typescript
import { Reservation } from "@pushpress/pushpress/models/components";

let value: Reservation = {
  id: "reg_12345",
  reservedId: "cal-12345",
  customerId: "usr_12345",
  companyId: "cli_12345",
  registrationTimestamp: 1672531200000,
  status: "reserved",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier for the reservation                                        |
| `reservedId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier for the scheduled calendar event the registration is for   |
| `customerId`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for the customer                                           |
| `companyId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier for the company                                            |
| `registrationTimestamp`                                                      | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp of when the registration was made                             |
| `status`                                                                     | [components.ReservationStatus](../../models/components/reservationstatus.md) | :heavy_check_mark:                                                           | Current status of the reservation                                            |
| `checkin`                                                                    | *components.Checkin*                                                         | :heavy_minus_sign:                                                           | Checkin for a class, event, appointment or an open facility                  |