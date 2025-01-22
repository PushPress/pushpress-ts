# ClassCanceledEventRequestBody

Class canceled Event (Not implemented)

## Example Usage

```typescript
import { ClassCanceledEventRequestBody } from "@pushpress/pushpress/models/webhooks";

let value: ClassCanceledEventRequestBody = {
  data: {
    id: "cal-12345",
    coachUuid: "usr_12345",
    assistantCoachUuid: "usr_12345",
    company: "cli_12345",
    title: "My Class",
    classTypeName: "HIIT",
    locationUuid: "loc_12345",
    start: 1704063600,
    end: 1704067200,
  },
  created: 20218,
  event: "class.canceled",
};
```

## Fields

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                        | [components.Class](../../models/components/class.md)                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                            | Schema for representing a scheduled class                                                                                                                                                                                     | {<br/>"id": "cal-12345",<br/>"coachUuid": "usr_12345",<br/>"assistantCoachUuid": "usr_12345",<br/>"company": "cli_12345",<br/>"title": "My Class",<br/>"classTypeName": "HIIT",<br/>"locationUuid": "loc_12345",<br/>"start": 1704063600,<br/>"end": 1704067200<br/>} |
| `created`                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | Unix timestamp representing when the event was created                                                                                                                                                                        |                                                                                                                                                                                                                               |
| `event`                                                                                                                                                                                                                       | [webhooks.ClassCanceledEventEvent](../../models/webhooks/classcanceledeventevent.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                           |                                                                                                                                                                                                                               |