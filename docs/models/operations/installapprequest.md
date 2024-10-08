# InstallAppRequest

## Example Usage

```typescript
import { InstallAppRequest } from "pushpress/models/operations";

let value: InstallAppRequest = {
  appId: "<id>",
  requestBody: {
    company: "Hilll, Kertzmann and Toy",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `appId`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `requestBody`                                                                        | [operations.InstallAppRequestBody](../../models/operations/installapprequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |