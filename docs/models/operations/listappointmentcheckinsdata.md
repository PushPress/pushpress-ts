# ListAppointmentCheckinsData

## Example Usage

```typescript
import { ListAppointmentCheckinsData } from "@pushpress/pushpress/models/operations";

let value: ListAppointmentCheckinsData = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resultArray`                                                                    | [components.AppointmentCheckin](../../models/components/appointmentcheckin.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |