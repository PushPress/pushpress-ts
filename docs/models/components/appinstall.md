# AppInstall

## Example Usage

```typescript
import { AppInstall } from "pushpress/models/components";

let value: AppInstall = {
  id: "90999fa5-6b0a-4a32-8559-7f132a47321a",
  app: "35d1d1f7-f9b0-4414-9156-1b94819e5a2b",
  company: "290d0a4b-f399-493f-a7db-4d6e9ebb8fa6",
  status: "<value>",
  installed: new Date("2022-01-22T00:51:28.398Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the app install                                                         |
| `app`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the app                                                                 |
| `company`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the client                                                              |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Status of the app install                                                                     |
| `installed`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the app was installed                                                          |
| `uninstalled`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when the app was uninstalled (nullable)                                             |