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
| `companyId`                                                                        | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `requestBody`                                                                      | [operations.SendEmailRequestBody](../../models/operations/sendemailrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |