# AppInstall

Information about the app

## Example Usage

```typescript
import { AppInstall } from "@pushpress/pushpress/models/components";

let value: AppInstall = {
  clientUuid: "company-uuid",
  appId: "app-uuid",
  installationId: "installation-uuid",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `clientUuid`                                   | *string*                                       | :heavy_check_mark:                             | The company uuid in which the app is installed |
| `appId`                                        | *string*                                       | :heavy_check_mark:                             | The app id                                     |
| `installationId`                               | *string*                                       | :heavy_check_mark:                             | The installation id of the app                 |