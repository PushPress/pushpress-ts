# ListInvitationsRequest

## Example Usage

```typescript
import { ListInvitationsRequest } from "@pushpress/pushpress/models/operations";

let value: ListInvitationsRequest = {
  eventId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | page number                                          |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | limit                                                |
| `eventId`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |