# Company

Schema representing a company with a pushpress account, whether its a gym, martial arts studio or mermaid swim school

## Example Usage

```typescript
import { Company } from "@pushpress/pushpress/models/components";

let value: Company = {
  id: "client_1234",
  name: "Acme Corp",
  subdomain: "acme",
  defaultTimezone: "America/Los_Angeles",
  phone: "+1-800-555-1234",
  email: "info@acme.com",
  url: "https://www.acme.com",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | Unique identifier for the company | client_1234                       |
| `name`                            | *string*                          | :heavy_check_mark:                | Name of the company               | Acme Corp                         |
| `subdomain`                       | *string*                          | :heavy_check_mark:                | Subdomain of the company          | acme                              |
| `defaultTimezone`                 | *string*                          | :heavy_check_mark:                | Default timezone of the company   | America/Los_Angeles               |
| `phone`                           | *string*                          | :heavy_check_mark:                | Phone number of the company       | +1-800-555-1234                   |
| `email`                           | *string*                          | :heavy_check_mark:                | Email address of the company      | info@acme.com                     |
| `url`                             | *string*                          | :heavy_minus_sign:                | URL of the company                | https://www.acme.com              |