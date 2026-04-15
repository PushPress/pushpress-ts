# ListClassesData

## Example Usage

```typescript
import { ListClassesData } from "@pushpress/pushpress/models/operations";

let value: ListClassesData = {
  resultArray: [
    {
      id: "cal-12345",
      coachUuid: "usr_12345",
      assistantCoachUuid: "usr_12345",
      company: "cli_12345",
      title: "My Class",
      classTypeName: "HIIT",
      locationUuid: "loc_12345",
      start: 1704063600,
      end: 1704067200,
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `resultArray`                                          | [components.Class](../../models/components/class.md)[] | :heavy_check_mark:                                     | N/A                                                    |