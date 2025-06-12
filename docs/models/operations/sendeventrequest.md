# SendEventRequest

## Example Usage

```typescript
import { SendEventRequest } from "@pushpress/pushpress/models/operations";

let value: SendEventRequest = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `companyId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | When using multitenant API keys, specify the company                               |
| `requestBody`                                                                      | [operations.SendEventRequestBody](../../models/operations/sendeventrequestbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |