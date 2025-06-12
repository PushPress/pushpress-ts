# Class
(*checkins.class*)

## Overview

### Available Operations

* [get](#get) - Get Class Checkin Details
* [list](#list) - List Class Checkins

## get

Get the checkin details for class including class details and checkin time

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  companyId: "<id>",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.class.get({
    uuid: "4d184dfb-7902-4c7b-8233-5325727b8f75",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { checkinsClassGet } from "@pushpress/pushpress/funcs/checkinsClassGet.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore({
  companyId: "<id>",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const res = await checkinsClassGet(pushPress, {
    uuid: "4d184dfb-7902-4c7b-8233-5325727b8f75",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("checkinsClassGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetClassCheckinRequest](../../models/operations/getclasscheckinrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ClassCheckin](../../models/components/classcheckin.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## list

list event checkins

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  companyId: "<id>",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.class.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { checkinsClassList } from "@pushpress/pushpress/funcs/checkinsClassList.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore({
  companyId: "<id>",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const res = await checkinsClassList(pushPress, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("checkinsClassList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListClassCheckinsRequest](../../models/operations/listclasscheckinsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListClassCheckinsResponse](../../models/operations/listclasscheckinsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |