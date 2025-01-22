# Keys
(*keys*)

## Overview

### Available Operations

* [create](#create) - Create a new API Key
* [list](#list) - List API Keys

## create

Creates a new API key for authenticating requests. Admins in your account can create and view API keys.Consider implementing key rotation policies for enhanced security.

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  const result = await pushPress.keys.create({
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    requestBody: {
      name: "my-key",
      description: "my key",
      expiresAt: 1672531200000,
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { keysCreate } from "@pushpress/pushpress/funcs/keysCreate.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await keysCreate(pushPress, {
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    requestBody: {
      name: "my-key",
      description: "my key",
      expiresAt: 1672531200000,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiKeyRequest](../../models/operations/createapikeyrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateApiKeySecurity](../../models/operations/createapikeysecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateApiKeyResponseBody](../../models/operations/createapikeyresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Unauthorized          | 401, 403, 407                | application/json             |
| errors.NotFound              | 404                          | application/json             |
| errors.Timeout               | 408                          | application/json             |
| errors.BadRequest            | 413, 414, 415, 422, 431      | application/json             |
| errors.RateLimited           | 429                          | application/json             |
| errors.InternalServerError   | 500, 502, 503, 506, 507, 508 | application/json             |
| errors.NotFound              | 501, 505                     | application/json             |
| errors.Timeout               | 504                          | application/json             |
| errors.BadRequest            | 510                          | application/json             |
| errors.Unauthorized          | 511                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## list

Retrieves a list of all active API keys associated with your account. The response includes metadata such as creation date, last used timestamp, and current status, helping you monitor key usage and manage access.

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  const result = await pushPress.keys.list({
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    limit: 100,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { keysList } from "@pushpress/pushpress/funcs/keysList.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await keysList(pushPress, {
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    limit: 100,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListApiKeysRequest](../../models/operations/listapikeysrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListApiKeysSecurity](../../models/operations/listapikeyssecurity.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListApiKeysResponseBody](../../models/operations/listapikeysresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Unauthorized          | 401, 403, 407                | application/json             |
| errors.NotFound              | 404                          | application/json             |
| errors.Timeout               | 408                          | application/json             |
| errors.BadRequest            | 413, 414, 415, 422, 431      | application/json             |
| errors.RateLimited           | 429                          | application/json             |
| errors.InternalServerError   | 500, 502, 503, 506, 507, 508 | application/json             |
| errors.NotFound              | 501, 505                     | application/json             |
| errors.Timeout               | 504                          | application/json             |
| errors.BadRequest            | 510                          | application/json             |
| errors.Unauthorized          | 511                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |