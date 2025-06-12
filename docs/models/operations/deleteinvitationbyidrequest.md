# DeleteInvitationByIdRequest

## Example Usage

```typescript
import { DeleteInvitationByIdRequest } from "@pushpress/pushpress/models/operations";

let value: DeleteInvitationByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | Invitation id                                        |
| `companyId`                                          | *string*                                             | :heavy_minus_sign:                                   | When using multitenant API keys, specify the company |