# GetEventCheckinRequest

## Example Usage

```typescript
import { GetEventCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetEventCheckinRequest = {
  uuid: "141561b9-4819-4e5a-a2b4-290d0a4bf399",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |