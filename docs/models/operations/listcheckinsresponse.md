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
        checkinTime: 187131,
        customer: "<value>",
        company: "Little, Koch and Tillman",
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