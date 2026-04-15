# GetReservationRequest

## Example Usage

```typescript
import { GetReservationRequest } from "@pushpress/pushpress/models/operations";

let value: GetReservationRequest = {
  id: "reg_12345",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | Unique identifier for the reservation                | reg_12345                                            |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |                                                      |