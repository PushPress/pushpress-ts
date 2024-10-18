# AppointmentCheckin

## Example Usage

```typescript
import { AppointmentCheckin } from "@pushpress/pushpress/models/components";

let value: AppointmentCheckin = {
  id: "<id>",
  name: "<value>",
  type: "AppointmentCheckin",
  appointmentType: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | Unique identifier for the checkin                  |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the checked-in appointment                 |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | N/A                                                |
| `appointmentType`                                  | *string*                                           | :heavy_check_mark:                                 | Type of the appointment                            |