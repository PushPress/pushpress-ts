# SendPushRequestBody

## Example Usage

```typescript
import { SendPushRequestBody } from "@pushpress/pushpress/models/operations";

let value: SendPushRequestBody = {
  customers: [],
  message: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `customers`                                | *string*[]                                 | :heavy_check_mark:                         | customer ids to notify                     |
| `message`                                  | *string*                                   | :heavy_check_mark:                         | message to send                            |
| `type`                                     | *string*                                   | :heavy_minus_sign:                         | type of message                            |
| `data`                                     | *any*                                      | :heavy_minus_sign:                         | Optional metadata to attach to the message |