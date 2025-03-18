# GetCustomerRequest

## Example Usage

```typescript
import { GetCustomerRequest } from "@pushpress/pushpress/models/operations";

let value: GetCustomerRequest = {
  uuid: "2b692275-fcbe-4189-bf43-10eac4917fe5",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |