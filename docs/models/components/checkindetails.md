# CheckinDetails

## Example Usage

```typescript
import { CheckinDetails } from "@pushpress/pushpress/models/components";

let value: CheckinDetails = {
  checkins: 4146.62,
  limit: 2645.55,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `checkins`                                                                | *number*                                                                  | :heavy_check_mark:                                                        | Number of times the customer has checked in in the current checkin period |
| `limit`                                                                   | *number*                                                                  | :heavy_check_mark:                                                        | number of checkins allowable for the checkin period, -1 for unlimited     |