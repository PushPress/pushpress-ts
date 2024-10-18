# ListAppInstallsResponseBody

A paginated list of app installs

## Example Usage

```typescript
import { ListAppInstallsResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListAppInstallsResponseBody = {
  data: [
    {
      id: "cb1ebf2d-291d-4c96-b1b7-bdfd05b28030",
      app: "35eb0299-3e98-49b4-8632-fb734064b620",
      company: "a78ef3a4-0c56-49da-9d4c-2fa3fb438036",
      status: "<value>",
      installed: new Date("2023-05-24T01:53:16.665Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.AppInstall](../../models/components/appinstall.md)[] | :heavy_check_mark:                                               | N/A                                                              |