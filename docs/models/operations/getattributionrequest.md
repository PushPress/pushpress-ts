# GetAttributionRequest

## Example Usage

```typescript
import { GetAttributionRequest } from "@pushpress/pushpress/models/operations";

let value: GetAttributionRequest = {
  uuid: "b1ebf2d2-91dc-4961-8b7b-dfd05b28030c",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |