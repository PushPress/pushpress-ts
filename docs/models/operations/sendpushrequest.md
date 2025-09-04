# SendPushRequest

## Example Usage

```typescript
import { SendPushRequest } from "@pushpress/pushpress/models/operations";

let value: SendPushRequest = {
  requestBody: {
    customers: [
      "<value 1>",
      "<value 2>",
    ],
    message: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `companyId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | When using multitenant API keys, specify the company                             |
| `requestBody`                                                                    | [operations.SendPushRequestBody](../../models/operations/sendpushrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |