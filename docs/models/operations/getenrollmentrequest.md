# GetEnrollmentRequest

## Example Usage

```typescript
import { GetEnrollmentRequest } from "@pushpress/pushpress/models/operations";

let value: GetEnrollmentRequest = {
  uuid: "3ffcad4d-9052-4f77-9a52-d3831dffec51",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |