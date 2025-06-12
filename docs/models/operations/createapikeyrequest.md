# CreateApiKeyRequest

## Example Usage

```typescript
import { CreateApiKeyRequest } from "@pushpress/pushpress/models/operations";

let value: CreateApiKeyRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `companyId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | When using multitenant API keys, specify the company                                     |                                                                                          |
| `requestBody`                                                                            | [operations.CreateApiKeyRequestBody](../../models/operations/createapikeyrequestbody.md) | :heavy_check_mark:                                                                       | Create a new API key                                                                     | {<br/>"name": "my-key",<br/>"description": "my key",<br/>"expiresAt": 1672531200000<br/>} |