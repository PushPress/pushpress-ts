# ListCheckinsResponse

## Example Usage

```typescript
import { ListCheckinsResponse } from "pushpress/models/operations";

let value: ListCheckinsResponse = {
  result: {
    data: [
      {
        details: {
          name: "<value>",
          type: "EventCheckin",
          eventType: "<value>",
        },
        checkinTime: 543806,
        customer: "<value>",
        company: "Tillman Inc",
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.ListCheckinsResponseBody](../../models/operations/listcheckinsresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |