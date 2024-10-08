# ListCompaniesResponseBody

A paginated response containing a list of companies

## Example Usage

```typescript
import { ListCompaniesResponseBody } from "pushpress/models/operations";

let value: ListCompaniesResponseBody = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Company](../../models/components/company.md)[] | :heavy_check_mark:                                         | N/A                                                        |