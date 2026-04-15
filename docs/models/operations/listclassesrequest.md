# ListClassesRequest

## Example Usage

```typescript
import { ListClassesRequest } from "@pushpress/pushpress/models/operations";

let value: ListClassesRequest = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `page`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | page number                                                                                      |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | limit                                                                                            |
| `startsAfter`                                                                                    | *number*                                                                                         | :heavy_minus_sign:                                                                               | Filter by classes that start after this timestamp (Unix Seconds)                                 |
| `access`                                                                                         | [operations.Access](../../models/operations/access.md)                                           | :heavy_minus_sign:                                                                               | Some events require an invitation for signup, most invites and all classes are open registration |
| `order`                                                                                          | [operations.Order](../../models/operations/order.md)                                             | :heavy_minus_sign:                                                                               | sort classes by start timestamp                                                                  |
| `companyId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | When using multitenant API keys, specify the company                                             |