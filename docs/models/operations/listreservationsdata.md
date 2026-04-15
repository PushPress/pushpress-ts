# ListReservationsData

## Example Usage

```typescript
import { ListReservationsData } from "@pushpress/pushpress/models/operations";

let value: ListReservationsData = {
  resultArray: [
    {
      id: "reg_12345",
      reservedId: "cal-12345",
      customerId: "usr_12345",
      companyId: "cli_12345",
      registrationTimestamp: 1672531200000,
      status: "reserved",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `resultArray`                                                      | [components.Reservation](../../models/components/reservation.md)[] | :heavy_check_mark:                                                 | N/A                                                                |