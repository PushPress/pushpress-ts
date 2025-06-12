# ListInvitationsResponseBody

Default Response

## Example Usage

```typescript
import { ListInvitationsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListInvitationsResponseBody = {
  data: {
    resultArray: [
      {
        id: "invite_12345",
        eventId: "cal_12345",
        customerId: "cus_12345",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.ListInvitationsData](../../models/operations/listinvitationsdata.md) | :heavy_check_mark:                                                               | N/A                                                                              |