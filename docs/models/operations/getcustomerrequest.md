# GetCustomerRequest

## Example Usage

```typescript
import { GetCustomerRequest } from "@pushpress/pushpress/models/operations";

let value: GetCustomerRequest = {
  uuid: "64b6201a-78ef-43a4-a0c5-69dad4c2fa3f",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |