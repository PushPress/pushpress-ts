# GetCustomerRequest

## Example Usage

```typescript
import { GetCustomerRequest } from "@pushpress/pushpress/models/operations";

let value: GetCustomerRequest = {
  uuid: "4b6201a7-8ef3-4a40-9c56-9dad4c2fa3fb",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |