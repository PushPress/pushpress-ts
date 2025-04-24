# CreateAttributionRequestBody

## Example Usage

```typescript
import { CreateAttributionRequestBody } from "@pushpress/pushpress/models/operations";

let value: CreateAttributionRequestBody = {
  customerId: "<id>",
  event: "signup",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `customerId`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `event`                                              | [operations.Event](../../models/operations/event.md) | :heavy_check_mark:                                   | N/A                                                  |
| `referer`                                            | *string*                                             | :heavy_minus_sign:                                   | Referer URL                                          |
| `utmSource`                                          | *string*                                             | :heavy_minus_sign:                                   | UTM source                                           |
| `utmMedium`                                          | *string*                                             | :heavy_minus_sign:                                   | UTM medium                                           |
| `utmCampaign`                                        | *string*                                             | :heavy_minus_sign:                                   | UTM campaign                                         |
| `utmContent`                                         | *string*                                             | :heavy_minus_sign:                                   | UTM content                                          |
| `utmTerm`                                            | *string*                                             | :heavy_minus_sign:                                   | UTM term                                             |
| `rawUrl`                                             | *string*                                             | :heavy_minus_sign:                                   | Raw URL                                              |
| `url`                                                | *string*                                             | :heavy_minus_sign:                                   | Normalized URL                                       |
| `fbclid`                                             | *string*                                             | :heavy_minus_sign:                                   | Facebook click identifier                            |
| `gclid`                                              | *string*                                             | :heavy_minus_sign:                                   | Google Ads click identifier                          |
| `msclkid`                                            | *string*                                             | :heavy_minus_sign:                                   | Microsoft Ads click identifier                       |
| `dclid`                                              | *string*                                             | :heavy_minus_sign:                                   | DoubleClick click identifier                         |
| `userAgent`                                          | *string*                                             | :heavy_minus_sign:                                   | User agent                                           |
| `ipAddress`                                          | *string*                                             | :heavy_minus_sign:                                   | IP address                                           |