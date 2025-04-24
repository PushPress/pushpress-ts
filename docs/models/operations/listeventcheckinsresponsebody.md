# ListEventCheckinsResponseBody

Default Response

## Example Usage

```typescript
import { ListEventCheckinsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListEventCheckinsResponseBody = {
  data: {
    resultArray: [
      {
        id: "chk_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
        name: "My Event",
        role: "staff",
        typeId: "cit_12345",
        eventId: "cal_item_12345",
        type: {
          id: "cit_12345",
          name: "Weightlifting Seminar",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.ListEventCheckinsData](../../models/operations/listeventcheckinsdata.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |