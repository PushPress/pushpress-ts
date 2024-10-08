# App

## Example Usage

```typescript
import { App } from "pushpress/models/components";

let value: App = {
  id: "8b986a7e-f6c8-49e1-910d-cdfc7c1a2f86",
  name: "<value>",
  created: new Date("2024-04-28T13:26:34.681Z"),
  updated: new Date("2023-05-15T22:34:42.019Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the app                                                                 |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Name of the app                                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the app                                                                        |
| `created`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the app was created                                                            |
| `updated`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the app was last updated                                                       |