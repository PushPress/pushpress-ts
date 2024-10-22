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
        name: "My Event",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
        role: "staff",
      },
    ],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |