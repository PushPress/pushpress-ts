# Data

## Example Usage

```typescript
import { Data } from "@pushpress/pushpress/models/operations";

let value: Data = {
  resultArray: [
    {
      customerId: "<id>",
      companyId: "<id>",
      event: "client_signup",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `resultArray`                                                      | [operations.ResultArray](../../models/operations/resultarray.md)[] | :heavy_check_mark:                                                 | N/A                                                                |