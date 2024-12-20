# Plan

Schema representing a plan that a customer can purchase for access to a set of products/services

## Example Usage

```typescript
import { Plan } from "@pushpress/pushpress/models/components";

let value: Plan = {
  id: "sub_12345",
  name: "Unlimited Membership",
  companyId: "client_12345",
  recurrenceDetails: {},
  policies: {
    allowClassCheckins: true,
    allowOpenGymCheckins: true,
    allow24HourAccess: false,
  },
  category: {
    name: "Crossfit",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the plan                             |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Display name for the plan                                  |
| `companyId`                                                | *string*                                                   | :heavy_check_mark:                                         | unique identifier for the company                          |
| `recurrenceDetails`                                        | *components.RecurrenceDetails*                             | :heavy_check_mark:                                         | N/A                                                        |
| `policies`                                                 | [components.Policies](../../models/components/policies.md) | :heavy_check_mark:                                         | N/A                                                        |
| `category`                                                 | [components.Category](../../models/components/category.md) | :heavy_check_mark:                                         | N/A                                                        |