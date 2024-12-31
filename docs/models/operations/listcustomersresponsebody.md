# ListCustomersResponseBody

Default Response

## Example Usage

```typescript
import { ListCustomersResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListCustomersResponseBody = {
  data: {
    resultArray: [
      {
        id: "usr_1234",
        name: {
          first: "John",
          last: "Doe",
          nickname: "jimmy",
        },
        gender: "male",
        dob: "1990-01-01",
        address: {
          line1: "123 Main St",
          line2: "Apt 1",
          city: "Anytown",
          country: "US",
          state: "NY",
          zip: "12345",
        },
        assignedToStaffId: null,
        profileImage: "https://example.com/profile.jpg",
        membershipDetails: {
          initialMembershipStartDate: "2022-01-01",
        },
        email: "john@doe.com",
        phone: "+1-800-555-1234",
        role: "member",
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.ListCustomersData](../../models/operations/listcustomersdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |