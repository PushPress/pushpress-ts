# GetClassCheckinRequest

## Example Usage

```typescript
import { GetClassCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetClassCheckinRequest = {
  uuid: "b4d6e9eb-b8fa-4690-94a4-9624999aa6e5",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |