# CustomerDeletedEventData

## Example Usage

```typescript
import { CustomerDeletedEventData } from "@pushpress/pushpress/models/webhooks";

let value: CustomerDeletedEventData = {
  id: "<id>",
  companyId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | Unique identifier for the customer                   |
| `companyId`                                          | *string*                                             | :heavy_check_mark:                                   | Unique identifier for the company the customer is in |