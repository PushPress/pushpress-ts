# ResultArray

## Example Usage

```typescript
import { ResultArray } from "@pushpress/pushpress/models/operations";

let value: ResultArray = {
  customerId: "<id>",
  companyId: "<id>",
  event: "client_signup",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `customerId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `companyId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [operations.ListAttributionsEvent](../../models/operations/listattributionsevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `referer`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The referer URL of the customer, industry accepted typo of referrer                  |
| `utmSource`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `utmMedium`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `utmCampaign`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `utmContent`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `utmTerm`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |