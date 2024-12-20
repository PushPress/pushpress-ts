# GetOpenCheckinRequest

## Example Usage

```typescript
import { GetOpenCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetOpenCheckinRequest = {
  uuid: "4999aa6e-56ec-4b1e-bbf2-d291dc961b7b",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |