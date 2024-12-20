# GetClassCheckinRequest

## Example Usage

```typescript
import { GetClassCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetClassCheckinRequest = {
  uuid: "bf39993f-7db4-4d6e-89eb-b8fa6904a496",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |