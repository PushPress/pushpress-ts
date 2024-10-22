# ListAppointmentCheckinsQueryParamTime

## Example Usage

```typescript
import { ListAppointmentCheckinsQueryParamTime } from "@pushpress/pushpress/models/operations";

let value: ListAppointmentCheckinsQueryParamTime = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `before`                                              | *number*                                              | :heavy_minus_sign:                                    | Get all checkins before this unix timestamp (seconds) |
| `after`                                               | *number*                                              | :heavy_minus_sign:                                    | Get all checkins after this unix timestamp (seconds)  |