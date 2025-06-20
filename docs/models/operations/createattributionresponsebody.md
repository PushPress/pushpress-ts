# CreateAttributionResponseBody

Default Response

## Example Usage

```typescript
import { CreateAttributionResponseBody } from "@pushpress/pushpress/models/operations";

let value: CreateAttributionResponseBody = {
  customerId: "<id>",
  companyId: "<id>",
  event: "client_signup",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `customerId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `companyId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `event`                                                                                | [operations.CreateAttributionEvent](../../models/operations/createattributionevent.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `referer`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | The referer URL of the customer, industry accepted typo of referrer                    |
| `utmSource`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `utmMedium`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `utmCampaign`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `utmContent`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `utmTerm`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |