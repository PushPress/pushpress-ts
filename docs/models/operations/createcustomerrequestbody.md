# CreateCustomerRequestBody

## Example Usage

```typescript
import { CreateCustomerRequestBody } from "@pushpress/pushpress/models/operations";

let value: CreateCustomerRequestBody = {
  email: "Anthony.Gleichner@yahoo.com",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | A unique identifier assigned to each customer                              |
| `assignedToStaffId`                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | The UUID of the assigned staff member                                      |
| `address`                                                                  | [operations.Address](../../models/operations/address.md)                   | :heavy_minus_sign:                                                         | Customer address. Defaults to an empty string if no value is set.          |
| `name`                                                                     | [operations.Name](../../models/operations/name.md)                         | :heavy_minus_sign:                                                         | N/A                                                                        |
| `email`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The email address of the customer                                          |
| `phone`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | The phone number of the customer                                           |
| `emergencyContact`                                                         | [operations.EmergencyContact](../../models/operations/emergencycontact.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `dob`                                                                      | *string*                                                                   | :heavy_minus_sign:                                                         | The customer's date of birth, null if not provided, formatted YYYY-MM-DD   |
| `gender`                                                                   | [operations.Gender](../../models/operations/gender.md)                     | :heavy_minus_sign:                                                         | The customer's gender, null if unknown or other                            |
| `account`                                                                  | *operations.Account*                                                       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `source`                                                                   | [operations.Source](../../models/operations/source.md)                     | :heavy_minus_sign:                                                         | The source of the lead                                                     |