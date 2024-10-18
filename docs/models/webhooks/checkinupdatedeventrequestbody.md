# CheckinUpdatedEventRequestBody

## Example Usage

```typescript
import { CheckinUpdatedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: CheckinUpdatedEventRequestBody = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [components.Checkin](../../models/components/checkin.md)                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | Unix timestamp of the update event                                                             |
| `eventType`                                                                                    | [webhooks.CheckinUpdatedEventEventType](../../models/webhooks/checkinupdatedeventeventtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |