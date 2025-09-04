# ListInvitationsResponse

## Example Usage

```typescript
import { ListInvitationsResponse } from "@pushpress/pushpress/models/operations";

let value: ListInvitationsResponse = {
  result: {
    data: {
      resultArray: [
        {
          id: "invite_12345",
          eventId: "cal_12345",
          customerId: "cus_12345",
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.ListInvitationsResponseBody](../../models/operations/listinvitationsresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |