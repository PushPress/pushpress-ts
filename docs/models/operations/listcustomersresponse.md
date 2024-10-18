# ListCustomersResponse

## Example Usage

```typescript
import { ListCustomersResponse } from "@pushpress/pushpress/models/operations";

let value: ListCustomersResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.ListCustomersResponseBody](../../models/operations/listcustomersresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |