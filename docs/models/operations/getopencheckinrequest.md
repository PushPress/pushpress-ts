# GetOpenCheckinRequest

## Example Usage

```typescript
import { GetOpenCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetOpenCheckinRequest = {
  uuid: "ecb1ebf2-d291-4dc9-861b-7bdfd05b2803",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |