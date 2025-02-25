# GetClassCheckinRequest

## Example Usage

```typescript
import { GetClassCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetClassCheckinRequest = {
  uuid: "d6e9ebb8-fa69-404a-b496-24999aa6e56e",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |