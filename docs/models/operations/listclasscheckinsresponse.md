# ListClassCheckinsResponse

## Example Usage

```typescript
import { ListClassCheckinsResponse } from "@pushpress/pushpress/models/operations";

let value: ListClassCheckinsResponse = {
  result: {
    data: {
      resultArray: [
        {
          id: "chk_12345",
          customer: "usr_12345",
          company: "cli_12345",
          timestamp: 1672531200000,
          name: "My Class",
          typeId: "cit_12345",
          classId: "cal_item_12345",
          type: {
            id: "cit_12345",
            name: "Group HIIT Training",
          },
          role: "attendee",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.ListClassCheckinsResponseBody](../../models/operations/listclasscheckinsresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |