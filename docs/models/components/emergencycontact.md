# EmergencyContact

## Example Usage

```typescript
import { EmergencyContact } from "@pushpress/pushpress/models/components";

let value: EmergencyContact = {
  name: "<value>",
  phone: "746.701.8935 x78543",
  relationship: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `name`                                                    | *string*                                                  | :heavy_check_mark:                                        | The name of the emergency contact                         |
| `phone`                                                   | *string*                                                  | :heavy_check_mark:                                        | The phone number of the emergency contact                 |
| `relationship`                                            | *string*                                                  | :heavy_check_mark:                                        | The relationship of the emergency contact to the customer |