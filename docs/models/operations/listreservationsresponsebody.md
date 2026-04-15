# ListReservationsResponseBody

Default Response

## Example Usage

```typescript
import { ListReservationsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListReservationsResponseBody = {
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.ListReservationsData](../../models/operations/listreservationsdata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |