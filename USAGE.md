<!-- Start SDK Example Usage [usage] -->
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  await pushPress.messages.notifications.sendPing({
    requestBody: {
      channel: "<value>",
      message: "<value>",
    },
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->