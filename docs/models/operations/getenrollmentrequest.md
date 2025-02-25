# GetEnrollmentRequest

## Example Usage

```typescript
import { GetEnrollmentRequest } from "@pushpress/pushpress/models/operations";

let value: GetEnrollmentRequest = {
  uuid: "9052f77a-52d3-4831-8dff-ec516320b0c2",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |