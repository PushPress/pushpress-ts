# Entitlements

## Example Usage

```typescript
import { Entitlements } from "@pushpress/pushpress/models/components";

let value: Entitlements = {
  type: "<value>",
  id: "<id>",
  interval: "<value>",
  quantity: 4663.11,
  metadata: {},
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `interval`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `quantity`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `metadata`                                                 | [components.Metadata](../../models/components/metadata.md) | :heavy_check_mark:                                         | misc metadata about the entitlement                        |