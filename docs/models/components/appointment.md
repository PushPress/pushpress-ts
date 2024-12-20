# Appointment

Schema for representing a Regsitration for some scheduled event

## Example Usage

```typescript
import { Appointment } from "@pushpress/pushpress/models/components";

let value: Appointment = {
  id: "apptschdl_12345",
  type: {
    name: "Personal Training",
  },
  companyId: "client_12345",
  customerId: "usr_12345",
  startTimestamp: 1677721600,
  staffId: "usr_78910",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | unique identifier for the appointment                                                 |
| `type`                                                                                | [components.AppointmentType](../../models/components/appointmenttype.md)              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `companyId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | unique identifier for the company                                                     |
| `customerId`                                                                          | *string*                                                                              | :heavy_check_mark:                                                                    | unique identifier for the customer                                                    |
| `startTimestamp`                                                                      | *number*                                                                              | :heavy_check_mark:                                                                    | Unix timestamp for the start time of the appointment                                  |
| `staffId`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | unique identifier for the staff member, corresponding to a customer with a staff role |