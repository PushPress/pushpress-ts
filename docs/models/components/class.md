# Class

Schema for representing a scheduled class

## Example Usage

```typescript
import { Class } from "@pushpress/pushpress/models/components";

let value: Class = {
  id: "cal-12345",
  coachUuid: "usr_12345",
  assistantCoachUuid: "usr_12345",
  company: "cli_12345",
  title: "My Class",
  classTypeName: "HIIT",
  locationUuid: "loc_12345",
  start: 1704063600,
  end: 1704067200,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier for the class                                    |
| `coachUuid`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier for the coach                                    |
| `assistantCoachUuid`                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier for the assistant coach, if any                  |
| `company`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier for the client                                   |
| `title`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | Title of the calendar event                                        |
| `classTypeName`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | Name of the class type                                             |
| `locationUuid`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier for the location, if any                         |
| `location`                                                         | [components.Location](../../models/components/location.md)         | :heavy_minus_sign:                                                 | Location information about where the class took place              |
| `reservations`                                                     | [components.Reservation](../../models/components/reservation.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `start`                                                            | *number*                                                           | :heavy_check_mark:                                                 | Start time of the event as a Unix timestamp in seconds             |
| `end`                                                              | *number*                                                           | :heavy_check_mark:                                                 | End time of the event as a Unix timestamp in seconds               |