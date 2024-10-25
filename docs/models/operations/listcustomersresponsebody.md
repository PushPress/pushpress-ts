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
        },
        address: {
          line1: "123 Main St",
          line2: "Apt 1",
          city: "Anytown",
          state: "USA",
          zip: "12345",
        },
        profileImage: "https://example.com/profile.jpg",
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