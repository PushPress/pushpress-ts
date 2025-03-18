# GetOpenCheckinRequest

## Example Usage

```typescript
import { GetOpenCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetOpenCheckinRequest = {
  uuid: "6e56ecb1-ebf2-4d29-81dc-961b7bdfd05b",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |