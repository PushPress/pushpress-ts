# GetOpenCheckinRequest

## Example Usage

```typescript
import { GetOpenCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetOpenCheckinRequest = {
  uuid: "a6e56ecb-1ebf-42d2-a91d-c961b7bdfd05",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |