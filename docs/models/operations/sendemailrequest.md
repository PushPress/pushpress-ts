# SendEmailRequest

## Example Usage

```typescript
import { SendEmailRequest } from "@pushpress/pushpress/models/operations";

let value: SendEmailRequest = {
  requestBody: {
    customer: "<value>",
    subject: "<value>",
    text: "<value>",
    html: "<value>",
    from: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `companyId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | When using multitenant API keys, specify the company                               |
| `requestBody`                                                                      | [operations.SendEmailRequestBody](../../models/operations/sendemailrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |