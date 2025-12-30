# EventCheckin

Details of a customer's check-in for an event

## Example Usage

```typescript
import { EventCheckin } from "@pushpress/pushpress/models/components";

let value: EventCheckin = {
  id: "chk_12345",
  customer: "usr_12345",
  company: "cli_12345",
  timestamp: 1672531200000,
  name: "My Event",
  kind: "event",
  role: "staff",
  typeId: "cit_12345",
  eventId: "cal_item_12345",
  type: {
    id: "cit_12345",
    name: "Weightlifting Seminar",
  },
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
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | Name of the event being checked into                                                        |
| `kind`                                                                                      | *"event"*                                                                                   | :heavy_check_mark:                                                                          | Type of check-in, which is always 'event'                                                   |
| `role`                                                                                      | [components.Role](../../models/components/role.md)                                          | :heavy_check_mark:                                                                          | Role of the customer at the event                                                           |
| `typeId`                                                                                    | *string*                                                                                    | :heavy_check_mark:                                                                          | UUID of the event type                                                                      |
| `eventId`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | UUID of the event                                                                           |
| `type`                                                                                      | [components.EventCheckinType](../../models/components/eventcheckintype.md)                  | :heavy_check_mark:                                                                          | Information about the type of the event                                                     |