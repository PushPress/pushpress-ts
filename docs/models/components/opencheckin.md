# OpenCheckin

Schema representing an open facility checkin

## Example Usage

```typescript
import { OpenCheckin } from "@pushpress/pushpress/models/components";

let value: OpenCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | Unique identifier for the checkin record                                                    |
| `customer`                                                                                  | *string*                                                                                    | :heavy_check_mark:                                                                          | UUID of the customer who checked in                                                         |
| `company`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | UUID of the company                                                                         |
| `timestamp`                                                                                 | *number*                                                                                    | :heavy_check_mark:                                                                          | Unix timestamp representing the time of checkin                                             |
| `enrollmentId`                                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | UUID of the enrollment record, null if the checkin is not associated with a plan enrollment |
| `kind`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | Indicates that this checkin is for an open facility                                         |