# CreateAttributionRequest

## Example Usage

```typescript
import { CreateAttributionRequest } from "@pushpress/pushpress/models/operations";

let value: CreateAttributionRequest = {
  requestBody: {
    customerId: "<id>",
    event: "signup",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | When using multitenant API keys, specify the company                                               |
| `requestBody`                                                                                      | [operations.CreateAttributionRequestBody](../../models/operations/createattributionrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |