# CheckinDetails

## Example Usage

```typescript
import { CheckinDetails } from "@pushpress/pushpress/models/components";

let value: CheckinDetails = {
  checkins: 2532.91,
  limit: 4663.11,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `checkins`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Number of times the customer has checked in in the current checkin period |
| `limit`                                                                   | *number*                                                                  | :heavy_check_mark:                                                        | number of checkins allowable for the checkin period, -1 for unlimited     |