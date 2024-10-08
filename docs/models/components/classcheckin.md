# ClassCheckin

## Example Usage

```typescript
import { ClassCheckin } from "pushpress/models/components";

let value: ClassCheckin = {
  id: "<id>",
  name: "<value>",
  type: "ClassCheckin",
  classType: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for the checkin                                          |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Name of the checked-in class                                               |
| `type`                                                                     | [components.ClassCheckinType](../../models/components/classcheckintype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `classType`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Type of the class                                                          |