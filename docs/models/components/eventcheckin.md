# EventCheckin

Checkin for an event

## Example Usage

```typescript
import { EventCheckin } from "@pushpress/pushpress/models/components";

let value: EventCheckin = {
  id: "chk_12345",
  name: "My Event",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  role: "staff",
  typeId: "cit_12345",
  type: {
    id: "cit_12345",
    name: "Weightlifting Seminar",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | Unique identifier for the event                    |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the event                                  |
| `customer`                                         | *string*                                           | :heavy_check_mark:                                 | UUID of the customer                               |
| `company`                                          | *string*                                           | :heavy_check_mark:                                 | UUID of the company                                |
| `kind`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `timestamp`                                        | *number*                                           | :heavy_check_mark:                                 | Unix timestamp of the event                        |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_check_mark:                                 | N/A                                                |
| `typeId`                                           | *string*                                           | :heavy_check_mark:                                 | UUID of the event type                             |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | information about the type of the event            |