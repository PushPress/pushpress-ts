# CustomerDeletedEventRequestBody

Customer Deleted Event

## Example Usage

```typescript
import { CustomerDeletedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: CustomerDeletedEventRequestBody = {
  data: {
    id: "<id>",
  },
  created: 20218,
  event: "customer.deleted",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [webhooks.CustomerDeletedEventData](../../models/webhooks/customerdeletedeventdata.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `created`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | Unix timestamp representing when the event was created                                   |
| `event`                                                                                  | [webhooks.CustomerDeletedEventEvent](../../models/webhooks/customerdeletedeventevent.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |