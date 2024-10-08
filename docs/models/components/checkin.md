# Checkin

## Example Usage

```typescript
import { Checkin } from "pushpress/models/components";

let value: Checkin = {
  details: {
    id: "<id>",
    name: "<value>",
    type: "AppointmentCheckin",
    appointmentType: "<value>",
  },
  checkinTime: 660174,
  customer: "<value>",
  company: "Mosciski - Keebler",
  name: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `details`                          | *components.Details*               | :heavy_check_mark:                 | Type of the check-in               |
| `checkinTime`                      | *number*                           | :heavy_check_mark:                 | Check-in time in Unix timestamp    |
| `customer`                         | *string*                           | :heavy_check_mark:                 | Customer ID for the check-in       |
| `company`                          | *string*                           | :heavy_check_mark:                 | Company ID for the check-in        |
| `name`                             | *string*                           | :heavy_check_mark:                 | Name of the thing being checked in |