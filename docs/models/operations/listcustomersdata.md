# ListCustomersData

## Example Usage

```typescript
import { ListCustomersData } from "@pushpress/pushpress/models/operations";

let value: ListCustomersData = {
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
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `resultArray`                                                | [components.Customer](../../models/components/customer.md)[] | :heavy_check_mark:                                           | N/A                                                          |