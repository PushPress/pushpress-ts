# ListOpenCheckinsResponseBody

Default Response

## Example Usage

```typescript
import { ListOpenCheckinsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListOpenCheckinsResponseBody = {
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [operations.ListOpenCheckinsData](../../models/operations/listopencheckinsdata.md) | :heavy_check_mark:                                                                 | N/A                                                                                |