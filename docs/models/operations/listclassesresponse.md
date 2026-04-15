# ListClassesResponse

## Example Usage

```typescript
import { ListClassesResponse } from "@pushpress/pushpress/models/operations";

let value: ListClassesResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [operations.ListClassesResponseBody](../../models/operations/listclassesresponsebody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |