# SendEmailRequest

## Example Usage

```typescript
import { SendEmailRequest } from "@pushpress/pushpress/models/operations";

let value: SendEmailRequest = {
  requestBody: {
    to: "Ashlee87@gmail.com",
    subject: "<value>",
    body: "<value>",
    from: "Jakayla14@hotmail.com",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `companyId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `requestBody`                                                                      | [operations.SendEmailRequestBody](../../models/operations/sendemailrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |