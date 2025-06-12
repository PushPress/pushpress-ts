# ListInvitationsData

## Example Usage

```typescript
import { ListInvitationsData } from "@pushpress/pushpress/models/operations";

let value: ListInvitationsData = {
  resultArray: [
    {
      id: "invite_12345",
      eventId: "cal_12345",
      customerId: "cus_12345",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `resultArray`                                                    | [components.Invitation](../../models/components/invitation.md)[] | :heavy_check_mark:                                               | N/A                                                              |