# ListAppointmentCheckinsRequest

## Example Usage

```typescript
import { ListAppointmentCheckinsRequest } from "@pushpress/pushpress/models/operations";

let value: ListAppointmentCheckinsRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `next`                                                | *string*                                              | :heavy_minus_sign:                                    | Next cursor                                           |
| `customer`                                            | *string*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `before`                                              | *number*                                              | :heavy_minus_sign:                                    | Get all checkins before this unix timestamp (seconds) |
| `after`                                               | *number*                                              | :heavy_minus_sign:                                    | Get all checkins after this unix timestamp (seconds)  |
| `companyId`                                           | *any*                                                 | :heavy_minus_sign:                                    | N/A                                                   |