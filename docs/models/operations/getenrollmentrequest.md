# GetEnrollmentRequest

## Example Usage

```typescript
import { GetEnrollmentRequest } from "@pushpress/pushpress/models/operations";

let value: GetEnrollmentRequest = {
  uuid: "32016f31-e1a4-47de-aa2f-7f72f8843e9d",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |