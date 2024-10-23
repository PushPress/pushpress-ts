# SendSmsRequest

## Example Usage

```typescript
import { SendSmsRequest } from "@pushpress/pushpress/models/operations";

let value: SendSmsRequest = {
  requestBody: {
    message: "<value>",
    to: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `companyId`                                                                    | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `requestBody`                                                                  | [operations.SendSmsRequestBody](../../models/operations/sendsmsrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |