# One

A linked account may be linked to exactly one primary account. Linked accounts may have limited permissions and depend on the primary account for billing and other functionality.

## Example Usage

```typescript
import { One } from "@pushpress/pushpress/models/components";

let value: One = {
  type: "linked",
  primaryCustomerId: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `type`                          | *"linked"*                      | :heavy_check_mark:              | N/A                             |
| `primaryCustomerId`             | *string*                        | :heavy_check_mark:              | The UUID of the primary account |