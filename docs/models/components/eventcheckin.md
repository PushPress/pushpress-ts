# EventCheckin

Details of a customer's check-in for an event

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
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | Unique identifier for the event check-in           |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name of the event being checked into               |
| `customer`                                         | *string*                                           | :heavy_check_mark:                                 | UUID of the customer checking in                   |
| `company`                                          | *string*                                           | :heavy_check_mark:                                 | UUID of the company hosting the event              |
| `kind`                                             | *string*                                           | :heavy_check_mark:                                 | Type of check-in, which is always 'event'          |
| `timestamp`                                        | *number*                                           | :heavy_check_mark:                                 | Unix timestamp of when the check-in occurred       |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_check_mark:                                 | Role of the customer at the event                  |
| `typeId`                                           | *string*                                           | :heavy_check_mark:                                 | UUID of the event type                             |
| `type`                                             | [components.Type](../../models/components/type.md) | :heavy_check_mark:                                 | Information about the type of the event            |