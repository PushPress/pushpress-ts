# ListCheckinsResponseBody

A paginated response containing a list of check-ins

## Example Usage

```typescript
import { ListCheckinsResponseBody } from "pushpress/models/operations";

let value: ListCheckinsResponseBody = {
  data: [
    {
      details: {
        id: "<id>",
        name: "<value>",
        type: "AppointmentCheckin",
        appointmentType: "<value>",
      },
      checkinTime: 128860,
      customer: "<value>",
      company: "Will Group",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Checkin](../../models/components/checkin.md)[] | :heavy_check_mark:                                         | N/A                                                        |