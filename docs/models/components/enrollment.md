# Enrollment

Schema representing a subscription that a customer has to a plan

## Example Usage

```typescript
import { Enrollment } from "@pushpress/pushpress/models/components";

let value: Enrollment = {
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
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for the subscription                                     |
| `customerId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for the customer                                         |
| `companyId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for the company                                          |
| `planId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | Unique identifier for the plan                                             |
| `status`                                                                   | [components.EnrollmentStatus](../../models/components/enrollmentstatus.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `checkinDetails`                                                           | [components.CheckinDetails](../../models/components/checkindetails.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `entitlements`                                                             | [components.Entitlements](../../models/components/entitlements.md)[]       | :heavy_check_mark:                                                         | N/A                                                                        |