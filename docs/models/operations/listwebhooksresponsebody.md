# ListWebhooksResponseBody

Default Response

## Example Usage

```typescript
import { ListWebhooksResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListWebhooksResponseBody = {
  data: [
    {
      id: "<id>",
      url: "https://decent-lender.com",
      eventTypes: [
        "checkin.updated",
      ],
      signingSecret: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [operations.ListWebhooksData](../../models/operations/listwebhooksdata.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |