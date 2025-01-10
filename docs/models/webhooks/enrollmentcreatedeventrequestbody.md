# EnrollmentCreatedEventRequestBody

Enrollment Created Event (Not implemented)

## Example Usage

```typescript
import { EnrollmentCreatedEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: EnrollmentCreatedEventRequestBody = {
  data: {
    id: "sub_12345",
    customerId: "usr_12345",
    companyId: "client_12345",
    planId: "plan_12345",
    status: "active",
    checkinDetails: {
      checkins: 0,
      limit: -1,
    },
    entitlements: [
      {
        type: "24_HOUR_ACCESS",
        id: "plnentl_12345",
        interval: "",
        quantity: 1,
        metadata: {},
      },
    ],
  },
  created: 20218,
  event: "enrollment.created",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                                                              | [components.Enrollment](../../models/components/enrollment.md)                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | Schema representing a subscription that a customer has to a plan                                                                                                                                                                                                                                    | {<br/>"id": "sub_12345",<br/>"customerId": "usr_12345",<br/>"companyId": "client_12345",<br/>"planId": "plan_12345",<br/>"status": "active",<br/>"checkinDetails": {<br/>"checkins": 0,<br/>"limit": -1<br/>},<br/>"entitlements": [<br/>{<br/>"id": "plnentl_12345",<br/>"type": "24_HOUR_ACCESS",<br/>"interval": "",<br/>"quantity": 1,<br/>"metadata": {}<br/>}<br/>]<br/>} |
| `created`                                                                                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | Unix timestamp representing when the event was created                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                     |
| `event`                                                                                                                                                                                                                                                                                             | [webhooks.EnrollmentCreatedEventEvent](../../models/webhooks/enrollmentcreatedeventevent.md)                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                     |