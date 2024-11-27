# GetOpenCheckinRequest

## Example Usage

```typescript
import { GetOpenCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetOpenCheckinRequest = {
  uuid: "5d1d1f7f-9b04-4141-8561-b94819e5a2b4",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |