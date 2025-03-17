# GetEnrollmentRequest

## Example Usage

```typescript
import { GetEnrollmentRequest } from "@pushpress/pushpress/models/operations";

let value: GetEnrollmentRequest = {
  uuid: "ad4d9052-f77a-452d-a383-1dffec516320",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |