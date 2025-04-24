# GetEnrollmentRequest

## Example Usage

```typescript
import { GetEnrollmentRequest } from "@pushpress/pushpress/models/operations";

let value: GetEnrollmentRequest = {
  uuid: "16320b0c-211a-4368-adb4-20447ab462c0",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |