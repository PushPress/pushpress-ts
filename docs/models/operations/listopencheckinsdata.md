# ListOpenCheckinsData

## Example Usage

```typescript
import { ListOpenCheckinsData } from "@pushpress/pushpress/models/operations";

let value: ListOpenCheckinsData = {
  resultArray: [
    {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      kind: "open",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `resultArray`                                                      | [components.OpenCheckin](../../models/components/opencheckin.md)[] | :heavy_check_mark:                                                 | N/A                                                                |