# GetCustomerRequest

## Example Usage

```typescript
import { GetCustomerRequest } from "@pushpress/pushpress/models/operations";

let value: GetCustomerRequest = {
  uuid: "fcbe189f-4310-4eac-b491-7fe5f3ffcad4",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |