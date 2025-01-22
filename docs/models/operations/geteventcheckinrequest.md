# GetEventCheckinRequest

## Example Usage

```typescript
import { GetEventCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetEventCheckinRequest = {
  uuid: "04141561-b948-419e-a5a2-b4290d0a4bf3",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |