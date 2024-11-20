# SendEventRequestBody

## Example Usage

```typescript
import { SendEventRequestBody } from "@pushpress/pushpress/models/operations";

let value: SendEventRequestBody = {
  channel: "<value>",
  event: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `channel`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | Ably channel to send the event to. This is the name of the channel that the client will subscribe to. |
| `event`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | event to send                                                                                         |
| `data`                                                                                                | *any*                                                                                                 | :heavy_minus_sign:                                                                                    | Optional metadata to attach to the event                                                              |