# ListAppointmentCheckinsResponseBody

Default Response

## Example Usage

```typescript
import { ListAppointmentCheckinsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListAppointmentCheckinsResponseBody = {
  data: {
    resultArray: [
      {
        id: "apptschdl_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
        name: "Personal Training",
        appointmentId: "apptschdl_12345",
        typeId: "appttype_12345",
        staffId: "usr_78910",
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `next`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [operations.ListAppointmentCheckinsData](../../models/operations/listappointmentcheckinsdata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |