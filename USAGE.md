<!-- Start SDK Example Usage [usage] -->
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  companyId: "<id>",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.appointments.appointmentsGet({
    id: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->