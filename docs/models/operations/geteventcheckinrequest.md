# GetEventCheckinRequest

## Example Usage

```typescript
import { GetEventCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetEventCheckinRequest = {
  uuid: "dfc7c1a2-f864-4c79-9099-9fa56b0aa325",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |