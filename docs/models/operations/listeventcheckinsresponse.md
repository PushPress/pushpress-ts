# ListEventCheckinsResponse

## Example Usage

```typescript
import { ListEventCheckinsResponse } from "@pushpress/pushpress/models/operations";

let value: ListEventCheckinsResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `result`                                                                                             | [operations.ListEventCheckinsResponseBody](../../models/operations/listeventcheckinsresponsebody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |