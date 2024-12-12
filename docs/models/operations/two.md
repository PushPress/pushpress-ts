# Two

## Example Usage

```typescript
import { Two } from "@pushpress/pushpress/models/operations";

let value: Two = {
  errors: {
    invalidAliases: {
      externalId: [
        "<id>",
      ],
    },
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `externalId`                                           | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `errors`                                               | [operations.Errors](../../models/operations/errors.md) | :heavy_check_mark:                                     | N/A                                                    |