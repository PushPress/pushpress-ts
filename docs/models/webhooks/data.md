# Data

## Example Usage

```typescript
import { Data } from "@pushpress/pushpress/models/webhooks";

let value: Data = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `url`                                                | *string*                                             | :heavy_minus_sign:                                   | url of the app                                       |
| `os`                                                 | [webhooks.Os](../../models/webhooks/os.md)           | :heavy_minus_sign:                                   | Each platform has an appstore specific configuration |