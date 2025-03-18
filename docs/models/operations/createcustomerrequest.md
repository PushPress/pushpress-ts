# CreateCustomerRequest

## Example Usage

```typescript
import { CreateCustomerRequest } from "@pushpress/pushpress/models/operations";

let value: CreateCustomerRequest = {
  requestBody: {
    email: "Garland_Gottlieb86@yahoo.com",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `companyId`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | When using multitenant API keys, specify the company                                         |
| `requestBody`                                                                                | [operations.CreateCustomerRequestBody](../../models/operations/createcustomerrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |