# BillingSchedule

## Example Usage

```typescript
import { BillingSchedule } from "@pushpress/pushpress/models/components";

let value: BillingSchedule = {
  period: "year",
  interval: 1433.53,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `period`                                               | [components.Period](../../models/components/period.md) | :heavy_check_mark:                                     | N/A                                                    |
| `interval`                                             | *number*                                               | :heavy_check_mark:                                     | The number of periods between bills                    |