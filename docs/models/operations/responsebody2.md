# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "@pushpress/pushpress/models/operations";

let value: ResponseBody2 = {
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