# ListApiKeysResponseBody

Default Response

## Example Usage

```typescript
import { ListApiKeysResponseBody } from "@pushpress/pushpress/models/operations";

let value: ListApiKeysResponseBody = {
  data: {
    resultArray: [
      {
        keyUuid: "key_asdfghjklqwertyuiop",
        apiKey: "sk_zyxvutsrqponmlkjihgfedcba",
        clientUuid: "client_asdfghjklqwertyuiop",
        name: "My API Key",
        description: "Additional description to add context to the key",
        createdAt: 1577836800000,
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [operations.ListApiKeysData](../../models/operations/listapikeysdata.md) | :heavy_check_mark:                                                       | N/A                                                                      |