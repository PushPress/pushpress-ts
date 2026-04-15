# ListReservationsResponse

## Example Usage

```typescript
import { ListReservationsResponse } from "@pushpress/pushpress/models/operations";

let value: ListReservationsResponse = {
  result: {
    data: {
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
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.ListReservationsResponseBody](../../models/operations/listreservationsresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |