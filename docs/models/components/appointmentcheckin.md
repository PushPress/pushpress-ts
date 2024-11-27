# AppointmentCheckin

Schema for checking in to an appointment, including relevant details such as customer and company information

## Example Usage

```typescript
import { AppointmentCheckin } from "@pushpress/pushpress/models/components";

let value: AppointmentCheckin = {
  id: "apptschdl_12345",
  name: "Personal Training",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  typeId: "appttype_12345",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | A unique identifier for the appointment, typically a UUID                |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | The name or title of the appointment, if available                       |
| `customer`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The UUID of the customer associated with the appointment                 |
| `company`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The UUID of the company hosting the appointment                          |
| `timestamp`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | The Unix timestamp representing the scheduled time of the appointment    |
| `kind`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | A constant value indicating the type of check-in, which is 'appointment' |
| `typeId`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The UUID representing the type or category of the appointment            |