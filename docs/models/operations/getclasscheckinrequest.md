# GetClassCheckinRequest

## Example Usage

```typescript
import { GetClassCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetClassCheckinRequest = {
  uuid: "a9c5443e-b09e-4c6b-99ad-695e8949e873",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |