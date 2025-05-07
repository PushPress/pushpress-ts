# EnrollmentDeletedRequestBody

Enrollment deleted, most often because of a failed initial payment

## Example Usage

```typescript
import { EnrollmentDeletedRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: EnrollmentDeletedRequestBody = {
  data: {
    id: "<id>",
  },
  created: 408140,
  event: "enrollment.deleted",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [webhooks.EnrollmentDeletedData](../../models/webhooks/enrollmentdeleteddata.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `created`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | Unix timestamp representing when the event was created                             |
| `event`                                                                            | [webhooks.EnrollmentDeletedEvent](../../models/webhooks/enrollmentdeletedevent.md) | :heavy_check_mark:                                                                 | N/A                                                                                |