# ListCheckinsResponseBody

A paginated response containing a list of check-ins

## Example Usage

```typescript
import { ListCheckinsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListCheckinsResponseBody = {
  data: [
    {
      details: {
        name: "<value>",
        type: "EventCheckin",
        eventType: "<value>",
      },
      checkinTime: 645570,
      customer: "<value>",
      company: "Keeling - Langosh",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Checkin](../../models/components/checkin.md)[] | :heavy_check_mark:                                         | N/A                                                        |