# GetAttributionRequest

## Example Usage

```typescript
import { GetAttributionRequest } from "@pushpress/pushpress/models/operations";

let value: GetAttributionRequest = {
  uuid: "4f78e169-e061-48ba-8dba-a4eb6fcfac86",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |