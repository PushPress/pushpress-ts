# SendEmailRequestBody

## Example Usage

```typescript
import { SendEmailRequestBody } from "@pushpress/pushpress/models/operations";

let value: SendEmailRequestBody = {
  customer: "<value>",
  subject: "<value>",
  text: "<value>",
  html: "<value>",
  from: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `customer`                     | *string*                       | :heavy_check_mark:             | Uuid of the customer recipient |
| `subject`                      | *string*                       | :heavy_check_mark:             | N/A                            |
| `text`                         | *string*                       | :heavy_check_mark:             | The text email body            |
| `html`                         | *string*                       | :heavy_check_mark:             | The HTML email body            |
| `from`                         | *string*                       | :heavy_check_mark:             | The email sender name          |
| `replyTo`                      | *operations.ReplyTo*           | :heavy_minus_sign:             | One or more reply-to addresses |
| `type`                         | *string*                       | :heavy_minus_sign:             | Optional email type            |