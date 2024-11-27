# GetEventCheckinRequest

## Example Usage

```typescript
import { GetEventCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetEventCheckinRequest = {
  uuid: "86a7ef6c-89e1-410d-acdf-c7c1a2f864c7",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |