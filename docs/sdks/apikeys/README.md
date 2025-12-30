# APIKeys

## Overview

Manage programmatic access to the API through secure authentication keys. API keys serve as credentials for your application to authenticate requests to API endpoints. Each key can be individually tracked, managed, and revoked to maintain security and access control.

### Available Operations

* [get](#get) - Get API Key
* [delete](#delete) - Delete an API Key
* [~~revoke~~](#revoke) - Revoke an API Key :warning: **Deprecated**

## get

Fetches detailed information about a specific API key and associated metadata

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApiKey" method="get" path="/keys/{id}" -->
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  companyId: "<id>",
});

async function run() {
  const result = await pushPress.apiKeys.get({
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { apiKeysGet } from "@pushpress/pushpress/funcs/apiKeysGet.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore({
  companyId: "<id>",
});

async function run() {
  const res = await apiKeysGet(pushPress, {
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiKeyRequest](../../models/operations/getapikeyrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetApiKeySecurity](../../models/operations/getapikeysecurity.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiKey](../../models/components/apikey.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

Immediately invalidates an active API key, preventing any further authentication attempts using this key. This is useful when a key may have been compromised or is no longer needed. This action cannot be undone - a new key must be generated if access is needed again.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteApiKey" method="delete" path="/keys/{id}" -->
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  companyId: "<id>",
});

async function run() {
  const result = await pushPress.apiKeys.delete({
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { apiKeysDelete } from "@pushpress/pushpress/funcs/apiKeysDelete.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore({
  companyId: "<id>",
});

async function run() {
  const res = await apiKeysDelete(pushPress, {
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteApiKeyRequest](../../models/operations/deleteapikeyrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteApiKeySecurity](../../models/operations/deleteapikeysecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiKey](../../models/components/apikey.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~revoke~~

Immediately invalidates an active API key, preventing any further authentication attempts using this key. This is useful when a key may have been compromised or is no longer needed. This action cannot be undone - a new key must be generated if access is needed again.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="revokeApiKey" method="patch" path="/keys/{id}/revoke" -->
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  companyId: "<id>",
});

async function run() {
  const result = await pushPress.apiKeys.revoke({
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { apiKeysRevoke } from "@pushpress/pushpress/funcs/apiKeysRevoke.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore({
  companyId: "<id>",
});

async function run() {
  const res = await apiKeysRevoke(pushPress, {
    bearer: process.env["PUSHPRESS_BEARER"] ?? "",
  }, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("apiKeysRevoke failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeApiKeyRequest](../../models/operations/revokeapikeyrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RevokeApiKeySecurity](../../models/operations/revokeapikeysecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiKey](../../models/components/apikey.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |