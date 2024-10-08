# CheckinDeletedEventRequestBody

## Example Usage

```typescript
import { CheckinDeletedEventRequestBody } from "pushpress/models/webhooks";

let value: CheckinDeletedEventRequestBody = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [components.Checkin](../../models/components/checkin.md)                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | Unix timestamp of the deletion event                                                           |
| `eventType`                                                                                    | [webhooks.CheckinDeletedEventEventType](../../models/webhooks/checkindeletedeventeventtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |