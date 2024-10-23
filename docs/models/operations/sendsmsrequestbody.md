# SendSmsRequestBody

## Example Usage

```typescript
import { SendSmsRequestBody } from "@pushpress/pushpress/models/operations";

let value: SendSmsRequestBody = {
  message: "<value>",
  to: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `message`                                       | *string*                                        | :heavy_check_mark:                              | Message body, maximum 160 characters            |
| `to`                                            | *string*                                        | :heavy_check_mark:                              | Phone number, e.g. +18005555555 or 555-555-5555 |