# ClassCheckin

Schema representing a checkin for a class

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
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for the checkin record                                   |
| `customer`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the customer who checked in                                        |
| `company`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the company hosting the class                                      |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Name of the class that the customer checked into                           |
| `typeId`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the class type                                                     |
| `type`                                                                     | [components.ClassCheckinType](../../models/components/classcheckintype.md) | :heavy_check_mark:                                                         | Detailed information about the type of the class                           |
| `kind`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Indicates that this checkin is for a class                                 |
| `timestamp`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Unix timestamp representing the time of checkin                            |
| `role`                                                                     | [components.ClassCheckinRole](../../models/components/classcheckinrole.md) | :heavy_check_mark:                                                         | Role of the customer in the class                                          |