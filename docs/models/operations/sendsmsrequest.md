# SendSmsRequest

## Example Usage

```typescript
import { SendSmsRequest } from "@pushpress/pushpress/models/operations";

let value: SendSmsRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `companyId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | When using multitenant API keys, specify the company                           |
| `requestBody`                                                                  | [operations.SendSmsRequestBody](../../models/operations/sendsmsrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |