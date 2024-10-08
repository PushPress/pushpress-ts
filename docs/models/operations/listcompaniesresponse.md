# ListCompaniesResponse

## Example Usage

```typescript
import { ListCompaniesResponse } from "pushpress/models/operations";

let value: ListCompaniesResponse = {
  result: {
    data: [
      {
        id: "client_1234",
        name: "Acme Corp",
        subdomain: "acme",
        defaultTimezone: "America/Los_Angeles",
        phone: "+1-800-555-1234",
        email: "info@acme.com",
        url: "https://www.acme.com",
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [operations.ListCompaniesResponseBody](../../models/operations/listcompaniesresponsebody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |