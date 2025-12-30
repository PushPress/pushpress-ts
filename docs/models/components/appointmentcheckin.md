# AppointmentCheckin

Schema for checking in to an appointment, including relevant details such as customer and company information

## Example Usage

```typescript
import { AppointmentCheckin } from "@pushpress/pushpress/models/components";

let value: AppointmentCheckin = {
  id: "apptschdl_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  name: "Personal Training",
  kind: "appointment",
  appointmentId: "apptschdl_12345",
  typeId: "appttype_12345",
  staffId: "usr_78910",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Unique identifier for the checkin record                                                    |
| `customer`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | UUID of the customer who checked in                                                         |
| `company`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | UUID of the company                                                                         |
| `timestamp`                                                                                 | *number*                                                                                    | :heavy_check_mark:                                                                          | Unix timestamp representing the time of checkin                                             |
| `enrollmentId`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | UUID of the enrollment record, null if the checkin is not associated with a plan enrollment |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | The name or title of the appointment, if available                                          |
| `kind`                                                                                      | *"appointment"*                                                                             | :heavy_check_mark:                                                                          | A constant value indicating the type of check-in, which is 'appointment'                    |
| `appointmentId`                                                                             | *string*                                                                                    | :heavy_check_mark:                                                                          | UUID for the checked in appointment                                                         |
| `typeId`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | The UUID representing the type or category of the appointment                               |
| `staffId`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | unique identifier for the staff member, corresponding to a customer with a staff role       |