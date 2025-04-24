# ListAttributionsResponseBody

Default Response

## Example Usage

```typescript
import { ListAttributionsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListAttributionsResponseBody = {
  data: {
    resultArray: [
      {
        customerId: "<id>",
        companyId: "<id>",
        event: "signup",
      },
    ],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_check_mark:                                 | N/A                                                |