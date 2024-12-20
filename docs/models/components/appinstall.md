# AppInstall

Information about the app

## Example Usage

```typescript
import { AppInstall } from "@pushpress/pushpress/models/components";

let value: AppInstall = {
  company: {
    id: "company-uuid",
  },
  app: {
    id: "app-uuid",
  },
  installation: {
    id: "installation-uuid",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `company`                                                                    | [components.AppInstallCompany](../../models/components/appinstallcompany.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `app`                                                                        | [components.App](../../models/components/app.md)                             | :heavy_check_mark:                                                           | N/A                                                                          |
| `installation`                                                               | [components.Installation](../../models/components/installation.md)           | :heavy_check_mark:                                                           | N/A                                                                          |