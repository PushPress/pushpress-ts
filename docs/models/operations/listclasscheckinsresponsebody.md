# ListClassCheckinsResponseBody

Default Response

## Example Usage

```typescript
import { ListClassCheckinsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListClassCheckinsResponseBody = {
  data: {
    resultArray: [
      {
        id: "chk_12345",
        customer: "usr_12345",
        company: "cli_12345",
        name: "My Class",
        timestamp: 1672531200000,
        role: "attendee",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.ListClassCheckinsData](../../models/operations/listclasscheckinsdata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |