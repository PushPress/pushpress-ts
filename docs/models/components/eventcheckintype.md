# EventCheckinType

Information about the type of the event

## Example Usage

```typescript
import { EventCheckinType } from "@pushpress/pushpress/models/components";

let value: EventCheckinType = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *string*               | :heavy_check_mark:     | UUID of the event type |
| `name`                 | *string*               | :heavy_check_mark:     | Name of the event type |