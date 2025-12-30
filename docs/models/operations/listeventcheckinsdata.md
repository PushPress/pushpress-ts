# ListEventCheckinsData

## Example Usage

```typescript
import { ListEventCheckinsData } from "@pushpress/pushpress/models/operations";

let value: ListEventCheckinsData = {
  resultArray: [
    {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "My Event",
      kind: "event",
      role: "staff",
      typeId: "cit_12345",
      eventId: "cal_item_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `resultArray`                                                        | [components.EventCheckin](../../models/components/eventcheckin.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |