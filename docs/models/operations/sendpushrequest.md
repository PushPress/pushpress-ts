# SendPushRequest

## Example Usage

```typescript
import { SendPushRequest } from "@pushpress/pushpress/models/operations";

let value: SendPushRequest = {
  requestBody: {
    deviceTokens: [
      "<value>",
    ],
    title: "<value>",
    body: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `companyId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `requestBody`                                                                    | [operations.SendPushRequestBody](../../models/operations/sendpushrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |