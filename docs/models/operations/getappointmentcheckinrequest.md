# GetAppointmentCheckinRequest

## Example Usage

```typescript
import { GetAppointmentCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetAppointmentCheckinRequest = {
  uuid: "0c35eb02-993e-4989-8b46-32fb734064b6",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |