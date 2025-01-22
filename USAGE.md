<!-- Start SDK Example Usage [usage] -->
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.checkinCreatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      name: "My Event",
      typeId: "cit_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
      timestamp: 1672531200000,
      role: "staff",
    },
    created: 420989,
    event: "checkin.created",
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->