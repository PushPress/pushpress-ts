# CheckinDetails

## Example Usage

```typescript
import { CheckinDetails } from "@pushpress/pushpress/models/components";

let value: CheckinDetails = {
  checkins: 5316.02,
  limit: 3282.3,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `checkins`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Number of times the customer has checked in in the current checkin period |
| `limit`                                                                   | *number*                                                                  | :heavy_check_mark:                                                        | number of checkins allowable for the checkin period, -1 for unlimited     |