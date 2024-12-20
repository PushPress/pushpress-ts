# MemberAppUpdatedRequestBody

Member App Updated (Not Implemented)

## Example Usage

```typescript
import { MemberAppUpdatedRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: MemberAppUpdatedRequestBody = {
  data: {},
  created: 778157,
  event: "memberapp.updated",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [webhooks.Data](../../models/webhooks/data.md)                                   | :heavy_check_mark:                                                               | N/A                                                                              |
| `created`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | Unix timestamp representing when the event was created                           |
| `event`                                                                          | [webhooks.MemberAppUpdatedEvent](../../models/webhooks/memberappupdatedevent.md) | :heavy_check_mark:                                                               | N/A                                                                              |