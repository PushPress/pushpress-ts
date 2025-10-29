# ListApiKeysData

## Example Usage

```typescript
import { ListApiKeysData } from "@pushpress/pushpress/models/operations";

let value: ListApiKeysData = {
  resultArray: [
    {
      keyUuid: "key_asdfghjklqwertyuiop",
      companyId: "client_asdfghjklqwertyuiop",
      name: "My API Key",
      description: "Additional description to add context to the key",
      createdAt: 1577836800000,
      lastUsedAt: null,
      expiresAt: null,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `resultArray`                                            | [components.ApiKey](../../models/components/apikey.md)[] | :heavy_check_mark:                                       | N/A                                                      |