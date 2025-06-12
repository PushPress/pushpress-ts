# GetInvitationByIdRequest

## Example Usage

```typescript
import { GetInvitationByIdRequest } from "@pushpress/pushpress/models/operations";

let value: GetInvitationByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | Invitation id                                        |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |