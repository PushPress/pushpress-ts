# ListCheckinsResponse

## Example Usage

```typescript
import { ListCheckinsResponse } from "pushpress/models/operations";

let value: ListCheckinsResponse = {
  result: {
    data: [
      {
        details: {
          id: "<id>",
          name: "<value>",
          type: "ClassCheckin",
          classType: "<value>",
        },
        checkinTime: 681393,
        customer: "<value>",
        company: "Champlin - Huel",
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