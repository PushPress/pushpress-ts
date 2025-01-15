# GetAppointmentCheckinRequest

## Example Usage

```typescript
import { GetAppointmentCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetAppointmentCheckinRequest = {
  uuid: "fd05b280-30c3-45eb-a029-93e989b4632f",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |