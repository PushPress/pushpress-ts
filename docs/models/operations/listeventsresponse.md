# ListEventsResponse

## Example Usage

```typescript
import { ListEventsResponse } from "@pushpress/pushpress/models/operations";

let value: ListEventsResponse = {
  result: {
    data: {
      resultArray: [
        {
          id: "cal-12345",
          coachUuid: "usr_12345",
          access: "open",
          assistantCoachUuid: "usr_12345",
          company: "cli_12345",
          title: "My Class",
          locationUuid: "loc_12345",
          start: 1704063600,
          end: 1704067200,
          isAllDay: false,
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [operations.ListEventsResponseBody](../../models/operations/listeventsresponsebody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |