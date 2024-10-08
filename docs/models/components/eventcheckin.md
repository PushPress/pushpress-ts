# EventCheckin

## Example Usage

```typescript
import { EventCheckin } from "pushpress/models/components";

let value: EventCheckin = {
  name: "<value>",
  type: "EventCheckin",
  eventType: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Name of the checked-in event                                               |
| `type`                                                                     | [components.EventCheckinType](../../models/components/eventcheckintype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `eventType`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Type of the event                                                          |