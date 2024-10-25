# ClassCheckin

Checkin for a class

## Example Usage

```typescript
import { ClassCheckin } from "@pushpress/pushpress/models/components";

let value: ClassCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  name: "My Class",
  typeId: "cit_12345",
  type: {
    id: "cit_12345",
    name: "Group HIIT Training",
  },
  timestamp: 1672531200000,
  role: "attendee",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for the checkin                                          |
| `customer`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the customer                                                       |
| `company`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the company                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Name of the checked-in class                                               |
| `typeId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the class type                                                     |
| `type`                                                                     | [components.ClassCheckinType](../../models/components/classcheckintype.md) | :heavy_check_mark:                                                         | information about the type of the class                                    |
| `kind`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `timestamp`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Unix timestamp of the checkin                                              |
| `role`                                                                     | [components.ClassCheckinRole](../../models/components/classcheckinrole.md) | :heavy_check_mark:                                                         | N/A                                                                        |