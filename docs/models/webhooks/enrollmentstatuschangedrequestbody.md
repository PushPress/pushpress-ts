# EnrollmentStatusChangedRequestBody

Enrollment Status Changed Event

## Example Usage

```typescript
import { EnrollmentStatusChangedRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: EnrollmentStatusChangedRequestBody = {
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
  previousValues: {
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
  created: 778157,
  event: "enrollment.status.changed",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                                                              | [components.Enrollment](../../models/components/enrollment.md)                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | Schema representing a subscription that a customer has to a plan                                                                                                                                                                                                                                    | {<br/>"id": "sub_12345",<br/>"customerId": "usr_12345",<br/>"companyId": "client_12345",<br/>"planId": "plan_12345",<br/>"status": "active",<br/>"checkinDetails": {<br/>"checkins": 0,<br/>"limit": -1<br/>},<br/>"entitlements": [<br/>{<br/>"id": "plnentl_12345",<br/>"type": "24_HOUR_ACCESS",<br/>"interval": "",<br/>"quantity": 1,<br/>"metadata": {}<br/>}<br/>]<br/>} |
| `previousValues`                                                                                                                                                                                                                                                                                    | [components.Enrollment](../../models/components/enrollment.md)                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                  | Schema representing a subscription that a customer has to a plan                                                                                                                                                                                                                                    | {<br/>"id": "sub_12345",<br/>"customerId": "usr_12345",<br/>"companyId": "client_12345",<br/>"planId": "plan_12345",<br/>"status": "active",<br/>"checkinDetails": {<br/>"checkins": 0,<br/>"limit": -1<br/>},<br/>"entitlements": [<br/>{<br/>"id": "plnentl_12345",<br/>"type": "24_HOUR_ACCESS",<br/>"interval": "",<br/>"quantity": 1,<br/>"metadata": {}<br/>}<br/>]<br/>} |
| `created`                                                                                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | Unix timestamp representing when the event was created                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                     |
| `event`                                                                                                                                                                                                                                                                                             | [webhooks.EnrollmentStatusChangedEvent](../../models/webhooks/enrollmentstatuschangedevent.md)                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                     |