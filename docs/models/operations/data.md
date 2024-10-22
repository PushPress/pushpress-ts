# Data

## Example Usage

```typescript
import { Data } from "@pushpress/pushpress/models/operations";

let value: Data = {
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `resultArray`                                                        | [components.EventCheckin](../../models/components/eventcheckin.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |