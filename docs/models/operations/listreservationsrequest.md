# ListReservationsRequest

## Example Usage

```typescript
import { ListReservationsRequest } from "@pushpress/pushpress/models/operations";

let value: ListReservationsRequest = {
  calendarItemId: "cal_12345",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | page number                                          |                                                      |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | limit                                                |                                                      |
| `calendarItemId`                                     | *string*                                             | :heavy_check_mark:                                   | Unique identifier for the scheduled calendar event   | cal_12345                                            |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |                                                      |