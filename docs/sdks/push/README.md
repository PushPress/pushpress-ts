# Push
(*messages.push*)

## Overview

### Available Operations

* [send](#send) - Send Push Notification

## send

Send a push notification message from the PushPress platform. Note that only first party apps can send push notifications

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  companyId: "<id>",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.messages.push.send({
    requestBody: {
      customers: [],
      message: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { messagesPushSend } from "@pushpress/pushpress/funcs/messagesPushSend.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore({
  companyId: "<id>",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const res = await messagesPushSend(pushPress, {
    requestBody: {
      customers: [],
      message: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesPushSend failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SendPushRequest](../../models/operations/sendpushrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SendPushResponseBody](../../models/operations/sendpushresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.NotFound              | 404                          | application/json             |
| errors.Unauthorized          | 401, 403, 407                | application/json             |
| errors.Timeout               | 408                          | application/json             |
| errors.RateLimited           | 429                          | application/json             |
| errors.BadRequest            | 413, 414, 415, 422, 431      | application/json             |
| errors.Timeout               | 504                          | application/json             |
| errors.NotFound              | 501, 505                     | application/json             |
| errors.InternalServerError   | 500, 502, 503, 506, 507, 508 | application/json             |
| errors.BadRequest            | 510                          | application/json             |
| errors.Unauthorized          | 511                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |