# SendPingRequest

## Example Usage

```typescript
import { SendPingRequest } from "@pushpress/pushpress/models/operations";

let value: SendPingRequest = {
  requestBody: {
    channel: "<value>",
    message: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `companyId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `requestBody`                                                                    | [operations.SendPingRequestBody](../../models/operations/sendpingrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |