# CheckinCreatedEventRequestBody

## Example Usage

```typescript
import { CheckinCreatedEventRequestBody } from "pushpress/models/webhooks";

let value: CheckinCreatedEventRequestBody = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [components.Checkin](../../models/components/checkin.md)                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `created`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | Unix timestamp of the creation event                                                           |
| `eventType`                                                                                    | [webhooks.CheckinCreatedEventEventType](../../models/webhooks/checkincreatedeventeventtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |