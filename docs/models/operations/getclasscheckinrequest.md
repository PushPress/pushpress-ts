# GetClassCheckinRequest

## Example Usage

```typescript
import { GetClassCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetClassCheckinRequest = {
  uuid: "db4d6e9e-bb8f-4a69-904a-49624999aa6e",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |