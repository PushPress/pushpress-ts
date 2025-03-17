# GetAppointmentCheckinRequest

## Example Usage

```typescript
import { GetAppointmentCheckinRequest } from "@pushpress/pushpress/models/operations";

let value: GetAppointmentCheckinRequest = {
  uuid: "c35eb029-93e9-489b-8463-2fb734064b62",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `uuid`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |