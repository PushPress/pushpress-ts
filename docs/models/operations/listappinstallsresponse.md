# ListAppInstallsResponse

## Example Usage

```typescript
import { ListAppInstallsResponse } from "pushpress/models/operations";

let value: ListAppInstallsResponse = {
  result: {
    data: [
      {
        id: "49d182b6-9227-45fc-8be1-89f4310eac49",
        app: "7fe5f3ff-cad4-4d90-b52f-77a52d3831df",
        company: "ec516320-b0c2-411a-8368-db420447ab46",
        status: "<value>",
        installed: new Date("2024-05-14T05:54:04.161Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [operations.ListAppInstallsResponseBody](../../models/operations/listappinstallsresponsebody.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |