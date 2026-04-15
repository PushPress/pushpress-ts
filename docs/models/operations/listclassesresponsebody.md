# ListClassesResponseBody

Default Response

## Example Usage

```typescript
import { ListClassesResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListClassesResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.ListClassesData](../../models/operations/listclassesdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |