# GetEventRequest

## Example Usage

```typescript
import { GetEventRequest } from "@pushpress/pushpress/models/operations";

let value: GetEventRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `expand`                                                                     | [operations.QueryParamExpand](../../models/operations/queryparamexpand.md)[] | :heavy_minus_sign:                                                           | N/A                                                                          |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `companyId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | When using multitenant API keys, specify the company                         |