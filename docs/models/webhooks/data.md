# Data

## Example Usage

```typescript
import { Data } from "@pushpress/pushpress/models/webhooks";

let value: Data = {
  id: "<id>",
  customerId: "<id>",
  companyId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `customerId`                                                   | *string*                                                       | :heavy_check_mark:                                             | Unique identifier for the customer                             |
| `companyId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Unique identifier for the company the checkin was deleted from |