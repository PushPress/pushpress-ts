# SendPushRequestBody

## Example Usage

```typescript
import { SendPushRequestBody } from "pushpress/models/operations";

let value: SendPushRequestBody = {
  deviceTokens: [
    "<value>",
  ],
  title: "<value>",
  body: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `deviceTokens`        | *string*[]            | :heavy_check_mark:    | N/A                   |
| `title`               | *string*              | :heavy_check_mark:    | N/A                   |
| `body`                | *string*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |