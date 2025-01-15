# GetEventCheckinRequest

## Example Usage

```typescript
import { GetEventCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetEventCheckinRequest = {
  uuid: "7f9b0414-1561-4b94-9819-e5a2b4290d0a",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |