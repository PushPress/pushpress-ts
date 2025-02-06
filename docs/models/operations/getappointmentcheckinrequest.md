# GetAppointmentCheckinRequest

## Example Usage

```typescript
import { GetAppointmentCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetAppointmentCheckinRequest = {
  uuid: "28030c35-eb02-4993-9e98-9b4632fb7340",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |