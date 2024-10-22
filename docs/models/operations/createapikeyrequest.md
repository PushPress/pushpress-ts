# CreateApiKeyRequest

## Example Usage

```typescript
import { CreateApiKeyRequest } from "@pushpress/pushpress/models/operations";

let value: CreateApiKeyRequest = {
  requestBody: {
    name: "my-key",
    description: "my key",
    expiresAt: 1672531200000,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `companyId`                                                                              | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `requestBody`                                                                            | [operations.CreateApiKeyRequestBody](../../models/operations/createapikeyrequestbody.md) | :heavy_check_mark:                                                                       | Create a new key                                                                         | {<br/>"name": "my-key",<br/>"description": "my key",<br/>"expiresAt": 1672531200000<br/>} |