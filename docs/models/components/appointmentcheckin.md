# AppointmentCheckin

Checkin for an appointment

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

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `id`                                  | *string*                              | :heavy_check_mark:                    | Unique identifier for the appointment |
| `name`                                | *string*                              | :heavy_minus_sign:                    | Name of the appointment               |
| `customer`                            | *string*                              | :heavy_check_mark:                    | UUID of the customer                  |
| `company`                             | *string*                              | :heavy_check_mark:                    | UUID of the company                   |
| `timestamp`                           | *number*                              | :heavy_check_mark:                    | Unix timestamp of the appointment     |
| `kind`                                | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `typeId`                              | *string*                              | :heavy_check_mark:                    | UUID of the appointment type          |