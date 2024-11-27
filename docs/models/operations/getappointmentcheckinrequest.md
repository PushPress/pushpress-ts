# GetAppointmentCheckinRequest

## Example Usage

```typescript
import { GetAppointmentCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetAppointmentCheckinRequest = {
  uuid: "90d0a4bf-3999-43f7-8db4-d6e9ebb8fa69",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |