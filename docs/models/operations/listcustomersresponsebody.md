# ListCustomersResponseBody

A paginated response containing an array of customerIds

## Example Usage

```typescript
import { ListCustomersResponseBody } from "pushpress/models/operations";

let value: ListCustomersResponseBody = {
  data: [
    {
      id: "usr_1234",
      name: "John Doe",
      address: "123 Main St, Anytown, USA",
      profileImage: "https://example.com/profile.jpg",
      email: "john.doe@example.com",
      phone: "+1-800-555-1234",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.Customer](../../models/components/customer.md)[] | :heavy_check_mark:                                           | An array of objects containing customerIds                   |