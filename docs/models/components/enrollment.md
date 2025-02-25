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
  billingSchedule: {
    period: "month",
    interval: 1,
  },
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
| `billingSchedule`                                                          | [components.BillingSchedule](../../models/components/billingschedule.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `status`                                                                   | [components.EnrollmentStatus](../../models/components/enrollmentstatus.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `startDate`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Date format string of start date                                           |
| `endDate`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | Date format string of end date e.g. 2022-01-01                             |
| `lastCharge`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Date format string of last charge date e.g. 2022-01-01                     |
| `nextCharge`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Date format string of next charge date e.g. 2022-01-01                     |
| `paidUntil`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Date format string of paid until date e.g. 2022-01-01                      |
| `checkinDetails`                                                           | [components.CheckinDetails](../../models/components/checkindetails.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `entitlements`                                                             | [components.Entitlements](../../models/components/entitlements.md)[]       | :heavy_check_mark:                                                         | N/A                                                                        |