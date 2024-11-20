# Company

Represents an entity with one ore more PushPress accounts, whether its a gym, martial arts studio or mermaid swim school

## Example Usage

```typescript
import { Company } from "@pushpress/pushpress/models/components";

let value: Company = {
  id: "client_asdfghjklqwertyuiop",
  name: "PushPress",
  subdomain: "pushpress",
  defaultTimezone: "America/Los_Angeles",
  phone: "(555) 555-5555",
  email: "support@pushpress.com",
  url: "https://pushpress.com",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `id`                              | *string*                          | :heavy_check_mark:                | Unique identifier for the company |
| `name`                            | *string*                          | :heavy_check_mark:                | Name of the company               |
| `subdomain`                       | *string*                          | :heavy_check_mark:                | Subdomain of the company          |
| `defaultTimezone`                 | *string*                          | :heavy_check_mark:                | Default timezone of the company   |
| `phone`                           | *string*                          | :heavy_minus_sign:                | Phone number of the company       |
| `email`                           | *string*                          | :heavy_check_mark:                | Email address of the company      |
| `url`                             | *string*                          | :heavy_minus_sign:                | URL of the company                |