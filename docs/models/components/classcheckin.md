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
| `type`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `timestamp`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | Unix timestamp of the checkin                                              |
| `role`                                                                     | [components.ClassCheckinRole](../../models/components/classcheckinrole.md) | :heavy_check_mark:                                                         | N/A                                                                        |