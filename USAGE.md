<!-- Start SDK Example Usage [usage] -->
```typescript
import { PushPress } from "pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.apps.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->