# Company
(*company*)

## Overview

Access and manage company details.

### Available Operations

* [get](#get) - Get Company Details

## get

Fetch the company details associated with the currently authenticated user.

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.company.get({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { companyGet } from "@pushpress/pushpress/funcs/companyGet.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const res = await companyGet(pushPress, {});

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
| `request`                                                                                                                                                                      | [operations.GetCompanyRequest](../../models/operations/getcompanyrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Company](../../models/components/company.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.NotFound              | 404                          | application/json             |
| errors.Unauthorized          | 401, 403, 407                | application/json             |
| errors.Timeout               | 408                          | application/json             |
| errors.RateLimited           | 429                          | application/json             |
| errors.BadRequest            | 400, 413, 414, 415, 422, 431 | application/json             |
| errors.Timeout               | 504                          | application/json             |
| errors.NotFound              | 501, 505                     | application/json             |
| errors.InternalServerError   | 500, 502, 503, 506, 507, 508 | application/json             |
| errors.BadRequest            | 510                          | application/json             |
| errors.Unauthorized          | 511                          | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |