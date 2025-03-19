# ResultArray

## Example Usage

```typescript
import { ResultArray } from "@pushpress/pushpress/models/operations";

let value: ResultArray = {
  id: "<id>",
  companyId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | Unique identifier for the class type                   |
| `companyId`                                            | *string*                                               | :heavy_check_mark:                                     | Unique identifier for the company the class type is in |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | Name of the class type                                 |
| `color`                                                | *string*                                               | :heavy_minus_sign:                                     | Hex code of color associated with the class type       |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | Description of the class type                          |