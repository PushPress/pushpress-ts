# GetClassTypeResponseBody

Default Response

## Example Usage

```typescript
import { GetClassTypeResponseBody } from "@pushpress/pushpress/models/operations";

let value: GetClassTypeResponseBody = {
  id: "<id>",
  companyId: "<id>",
  name: "<value>",
  active: false,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for the class type                             |
| `companyId`                                                      | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for the company the class type is in           |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | Name of the class type                                           |
| `color`                                                          | *string*                                                         | :heavy_minus_sign:                                               | Hex code of color associated with the class type                 |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | Description of the class type                                    |
| `active`                                                         | *boolean*                                                        | :heavy_check_mark:                                               | Whether the class type is active and can be selected for a class |