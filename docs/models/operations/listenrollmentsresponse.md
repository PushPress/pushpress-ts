# ListEnrollmentsResponse

## Example Usage

```typescript
import { ListEnrollmentsResponse } from "@pushpress/pushpress/models/operations";

let value: ListEnrollmentsResponse = {
  result: {
    data: {
      resultArray: [
        {
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
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.ListEnrollmentsResponseBody](../../models/operations/listenrollmentsresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |