# ListOpenCheckinsResponse

## Example Usage

```typescript
import { ListOpenCheckinsResponse } from "@pushpress/pushpress/models/operations";

let value: ListOpenCheckinsResponse = {
  result: {
    data: {
      resultArray: [
        {
          id: "chk_12345",
          customer: "usr_12345",
          company: "cli_12345",
          timestamp: 1672531200000,
          kind: "open",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [operations.ListOpenCheckinsResponseBody](../../models/operations/listopencheckinsresponsebody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |