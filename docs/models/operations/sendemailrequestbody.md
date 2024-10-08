# SendEmailRequestBody

## Example Usage

```typescript
import { SendEmailRequestBody } from "pushpress/models/operations";

let value: SendEmailRequestBody = {
  to: "Destini.McGlynn37@hotmail.com",
  subject: "<value>",
  body: "<value>",
  from: "Alvena_Blick@yahoo.com",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `to`               | *string*           | :heavy_check_mark: | N/A                |
| `subject`          | *string*           | :heavy_check_mark: | N/A                |
| `body`             | *string*           | :heavy_check_mark: | N/A                |
| `from`             | *string*           | :heavy_check_mark: | N/A                |
| `cc`               | *string*           | :heavy_minus_sign: | N/A                |
| `bcc`              | *string*           | :heavy_minus_sign: | N/A                |
| `replyTo`          | *string*           | :heavy_minus_sign: | N/A                |