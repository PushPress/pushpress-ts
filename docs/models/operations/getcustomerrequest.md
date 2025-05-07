# GetCustomerRequest

## Example Usage

```typescript
import { GetCustomerRequest } from "@pushpress/pushpress/models/operations";

let value: GetCustomerRequest = {
  uuid: "66758f58-ebc2-40b4-99d7-52513ddb9f5d",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |