# ListClassCheckinsData

## Example Usage

```typescript
import { ListClassCheckinsData } from "@pushpress/pushpress/models/operations";

let value: ListClassCheckinsData = {
  resultArray: [
    {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      name: "My Class",
      timestamp: 1672531200000,
      role: "attendee",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `resultArray`                                                        | [components.ClassCheckin](../../models/components/classcheckin.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |