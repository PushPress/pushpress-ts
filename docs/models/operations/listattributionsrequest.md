# ListAttributionsRequest

## Example Usage

```typescript
import { ListAttributionsRequest } from "@pushpress/pushpress/models/operations";

let value: ListAttributionsRequest = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `customer`                                           | *string*                                             | :heavy_minus_sign:                                   | Filter by Customer ID                                |
| `attributionEvent`                                   | *string*                                             | :heavy_minus_sign:                                   | Filter by Attribution Event                          |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |