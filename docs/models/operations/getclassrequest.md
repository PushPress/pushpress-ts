# GetClassRequest

## Example Usage

```typescript
import { GetClassRequest } from "@pushpress/pushpress/models/operations";

let value: GetClassRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `expand`                                                 | [operations.Expand](../../models/operations/expand.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `companyId`                                              | *string*                                                 | :heavy_minus_sign:                                       | When using multitenant API keys, specify the company     |