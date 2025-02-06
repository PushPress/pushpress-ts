# One

A linked account may be linked to exactly one primary account. Linked accounts may have limited permissions and depend on the primary account for billing and other functionality.

## Example Usage

```typescript
import { One } from "@pushpress/pushpress/models/operations";

let value: One = {
  type: "linked",
  primaryCustomerId: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_check_mark:                                 | N/A                                                |
| `primaryCustomerId`                                | *string*                                           | :heavy_check_mark:                                 | The UUID of the primary account                    |