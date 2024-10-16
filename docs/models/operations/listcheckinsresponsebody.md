# ListCheckinsResponseBody

A paginated response containing a list of check-ins

## Example Usage

```typescript
import { ListCheckinsResponseBody } from "pushpress/models/operations";

let value: ListCheckinsResponseBody = {
  data: [
    {
      details: {
        id: "<id>",
        name: "<value>",
        type: "ClassCheckin",
        classType: "<value>",
      },
      checkinTime: 536178,
      customer: "<value>",
      company: "Gottlieb, Champlin and Huel",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Checkin](../../models/components/checkin.md)[] | :heavy_check_mark:                                         | N/A                                                        |