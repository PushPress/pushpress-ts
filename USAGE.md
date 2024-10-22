<!-- Start SDK Example Usage [usage] -->
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.messages.get({
    requestBody: {
      to: "Isobel_Brakus@yahoo.com",
      subject: "<value>",
      text: "<value>",
      html: "<value>",
      from: "Fern47@yahoo.com",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->