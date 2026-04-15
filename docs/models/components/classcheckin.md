# ClassCheckin

Schema representing a checkin for a class

## Example Usage

```typescript
import { ClassCheckin } from "@pushpress/pushpress/models/components";

let value: ClassCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  name: "My Class",
  typeId: "cit_12345",
  classId: "cal_item_12345",
  source: "staff app",
  result: "success",
  type: {
    id: "cit_12345",
    name: "Group HIIT Training",
  },
  kind: "class",
  role: "attendee",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Unique identifier for the checkin record                                                                                         |
| `customer`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | UUID of the customer who checked in                                                                                              |
| `company`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | UUID of the company                                                                                                              |
| `timestamp`                                                                                                                      | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | Unix timestamp representing the time of checkin                                                                                  |
| `enrollmentId`                                                                                                                   | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | UUID of the enrollment record, null if the checkin is not associated with a plan enrollment                                      |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Name of the class that the customer checked into                                                                                 |
| `typeId`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | UUID of the class type                                                                                                           |
| `classId`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | UUID of the class                                                                                                                |
| `source`                                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Source of the checkin provided at checkin time, (e.g kiosk, staff app), will be an empty string when the source was not provided |
| `result`                                                                                                                         | [components.Result](../../models/components/result.md)                                                                           | :heavy_check_mark:                                                                                                               | Indicates if the customer was permitted to check into the class, for details about any failures, see failureReason               |
| `failureReason`                                                                                                                  | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Only populated when a checkin fails, a message containing details about why the failure occurred                                 |
| `type`                                                                                                                           | [components.ClassCheckinType](../../models/components/classcheckintype.md)                                                       | :heavy_check_mark:                                                                                                               | Detailed information about the type of the class                                                                                 |
| `kind`                                                                                                                           | *"class"*                                                                                                                        | :heavy_check_mark:                                                                                                               | Indicates that this checkin is for a class                                                                                       |
| `role`                                                                                                                           | [components.ClassCheckinRole](../../models/components/classcheckinrole.md)                                                       | :heavy_check_mark:                                                                                                               | Role of the customer in the class                                                                                                |