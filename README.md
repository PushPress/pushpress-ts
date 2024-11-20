<div align="center">
    <img src="https://github.com/user-attachments/assets/fab0b863-5d21-41c5-83ac-ee6857766f8d" width="600">
    <h1>Typescript SDK</h1>
    <p><strong>The Solution for Bringing In More Members.</strong></p>
    <p>Developer-friendly & type-safe Typescript SDK specifically catered to leverage the <strong>PushPress</strong> API.</p>
    <a href="https://ppe.apidocumentation.com/reference"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=4c2cec&style=for-the-badge" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />

> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/katrina/katrina). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->

## Summary

PushPress Platform API: The PushPress Platform API provides a comprehensive suite of endpoints designed
to facilitate seamless integration with the PushPress ecosystem.
This API allows developers to interact programmatically with the PushPress platform,
enabling the automation of various tasks and the extension of platform capabilities.

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->

## Table of Contents

- [SDK Installation](#sdk-installation)
- [Requirements](#requirements)
- [SDK Example Usage](#sdk-example-usage)
- [Available Resources and Operations](#available-resources-and-operations)
- [Standalone functions](#standalone-functions)
- [Pagination](#pagination)
- [Retries](#retries)
- [Error Handling](#error-handling)
- [Server Selection](#server-selection)
- [Custom HTTP Client](#custom-http-client)
- [Authentication](#authentication)
- [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @pushpress/pushpress
```

### PNPM

```bash
pnpm add @pushpress/pushpress
```

### Bun

```bash
bun add @pushpress/pushpress
```

### Yarn

```bash
yarn add @pushpress/pushpress zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->

## SDK Example Usage

### Example

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.event.get({
    uuid: "b888f774-3e7c-4135-a18c-6b985523c4bc",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->

## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiKeys](docs/sdks/apikeys/README.md)

- [get](docs/sdks/apikeys/README.md#get) - Get a key by its ID
- [revoke](docs/sdks/apikeys/README.md#revoke) - Revoke an API Key

### [checkins](docs/sdks/checkins/README.md)

#### [checkins.appointment](docs/sdks/appointment/README.md)

- [get](docs/sdks/appointment/README.md#get) - Get an appointment checkin
- [list](docs/sdks/appointment/README.md#list) - Get a list of appointment checkins

#### [checkins.class](docs/sdks/class/README.md)

- [get](docs/sdks/class/README.md#get) - Get an event checkin
- [list](docs/sdks/class/README.md#list) - Get a list of class checkins

#### [checkins.event](docs/sdks/event/README.md)

- [get](docs/sdks/event/README.md#get) - Get a class checkin
- [list](docs/sdks/event/README.md#list) - Get a list of event checkins

### [company](docs/sdks/company/README.md)

- [get](docs/sdks/company/README.md#get) - Get company information

### [customers](docs/sdks/customers/README.md)

- [get](docs/sdks/customers/README.md#get) - Get individual customer information
- [list](docs/sdks/customers/README.md#list) - Get a list of customers

### [keys](docs/sdks/keys/README.md)

- [create](docs/sdks/keys/README.md#create) - Create a new API Key
- [list](docs/sdks/keys/README.md#list) - Get a list of active keys in a given company

### [messages](docs/sdks/messages/README.md)

#### [messages.email](docs/sdks/email/README.md)

- [send](docs/sdks/email/README.md#send) - Send an email

#### [messages.push](docs/sdks/push/README.md)

- [send](docs/sdks/push/README.md#send) - Send an PushNotification

#### [messages.realtime](docs/sdks/realtime/README.md)

- [send](docs/sdks/realtime/README.md#send) - Send an event via Ably Realtime

#### [messages.sms](docs/sdks/sms/README.md)

- [send](docs/sdks/sms/README.md#send) - Send an SMS

### [webhooks](docs/sdks/webhooks/README.md)

- [create](docs/sdks/webhooks/README.md#create) - Create a Platform Webhook
- [list](docs/sdks/webhooks/README.md#list) - List Platform Webhooks
- [get](docs/sdks/webhooks/README.md#get) - Get a Platform Webhook
- [update](docs/sdks/webhooks/README.md#update) - Update a Platform Webhook
- [delete](docs/sdks/webhooks/README.md#delete) - Delete a Platform Webhook
- [activate](docs/sdks/webhooks/README.md#activate) - Activate a Platform Webhook
- [rotateSecret](docs/sdks/webhooks/README.md#rotatesecret) - Rotate a Platform Webhook Signing Secret

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->

## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiKeysGet`](docs/sdks/apikeys/README.md#get) - Get a key by its ID
- [`apiKeysRevoke`](docs/sdks/apikeys/README.md#revoke) - Revoke an API Key
- [`checkinsAppointmentGet`](docs/sdks/appointment/README.md#get) - Get an appointment checkin
- [`checkinsAppointmentList`](docs/sdks/appointment/README.md#list) - Get a list of appointment checkins
- [`checkinsClassGet`](docs/sdks/class/README.md#get) - Get an event checkin
- [`checkinsClassList`](docs/sdks/class/README.md#list) - Get a list of class checkins
- [`checkinsEventGet`](docs/sdks/event/README.md#get) - Get a class checkin
- [`checkinsEventList`](docs/sdks/event/README.md#list) - Get a list of event checkins
- [`companyGet`](docs/sdks/company/README.md#get) - Get company information
- [`customersGet`](docs/sdks/customers/README.md#get) - Get individual customer information
- [`customersList`](docs/sdks/customers/README.md#list) - Get a list of customers
- [`keysCreate`](docs/sdks/keys/README.md#create) - Create a new API Key
- [`keysList`](docs/sdks/keys/README.md#list) - Get a list of active keys in a given company
- [`messagesEmailSend`](docs/sdks/email/README.md#send) - Send an email
- [`messagesPushSend`](docs/sdks/push/README.md#send) - Send an PushNotification
- [`messagesRealtimeSend`](docs/sdks/realtime/README.md#send) - Send an event via Ably Realtime
- [`messagesSmsSend`](docs/sdks/sms/README.md#send) - Send an SMS
- [`webhooksActivate`](docs/sdks/webhooks/README.md#activate) - Activate a Platform Webhook
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a Platform Webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a Platform Webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get a Platform Webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List Platform Webhooks
- [`webhooksRotateSecret`](docs/sdks/webhooks/README.md#rotatesecret) - Rotate a Platform Webhook Signing Secret
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update a Platform Webhook

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->

## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.event.list({});

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();
```

<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->

## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.event.get(
    {
      uuid: "b888f774-3e7c-4135-a18c-6b985523c4bc",
    },
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  // Handle the result
  console.log(result);
}

run();
```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.event.get({
    uuid: "b888f774-3e7c-4135-a18c-6b985523c4bc",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->

## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.APIError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error     | Description                                          |
| --------------------- | ---------------------------------------------------- |
| RequestAbortedError   | HTTP request was aborted by the client               |
| RequestTimeoutError   | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError       | HTTP client was unable to make a request to a server |
| InvalidRequestError   | Any input used to create a request is invalid        |
| UnexpectedClientError | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective _Errors_ tables in SDK docs for more details on possible error types for each operation. For example, the `get` method may throw the following errors:

| Error Type                 | Status Code                       | Content Type     |
| -------------------------- | --------------------------------- | ---------------- |
| errors.BadRequest          | 400, 413, 414, 415, 422, 431, 510 | application/json |
| errors.Unauthorized        | 401, 403, 407, 511                | application/json |
| errors.NotFound            | 404, 501, 505                     | application/json |
| errors.Timeout             | 408, 504                          | application/json |
| errors.RateLimited         | 429                               | application/json |
| errors.InternalServerError | 500, 502, 503, 506, 507, 508      | application/json |
| errors.APIError            | 4XX, 5XX                          | \*/\*            |

```typescript
import { PushPress } from "@pushpress/pushpress";
import {
  BadRequest,
  InternalServerError,
  NotFound,
  RateLimited,
  SDKValidationError,
  Timeout,
  Unauthorized,
} from "@pushpress/pushpress/models/errors";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await pushPress.company.get({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case err instanceof SDKValidationError: {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case err instanceof BadRequest: {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case err instanceof Unauthorized: {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      case err instanceof NotFound: {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case err instanceof Timeout: {
        // Handle err.data$: TimeoutData
        console.error(err);
        return;
      }
      case err instanceof RateLimited: {
        // Handle err.data$: RateLimitedData
        console.error(err);
        return;
      }
      case err instanceof InternalServerError: {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();
```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.

<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->

## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name          | Server                              |
| ------------- | ----------------------------------- |
| `production`  | `https://api.pushpress.com/v3`      |
| `staging`     | `https://api.pushpressstage.com/v3` |
| `development` | `https://api.pushpressdev.com/v3`   |

#### Example

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  server: "development",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.event.get({
    uuid: "b888f774-3e7c-4135-a18c-6b985523c4bc",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  serverURL: "https://api.pushpress.com/v3",
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.event.get({
    uuid: "b888f774-3e7c-4135-a18c-6b985523c4bc",
  });

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PushPress } from "@pushpress/pushpress";
import { HTTPClient } from "@pushpress/pushpress/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  },
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000),
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PushPress({ httpClient });
```

<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable |
| -------- | ------ | ------- | -------------------- |
| `apiKey` | apiKey | API key | `PUSHPRESS_API_KEY`  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushPress.checkins.event.get({
    uuid: "b888f774-3e7c-4135-a18c-6b985523c4bc",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  const result = await pushPress.keys.create(
    {
      bearer: process.env["PUSHPRESS_BEARER"] ?? "",
    },
    {
      requestBody: {
        name: "my-key",
        description: "my key",
        expiresAt: 1672531200000,
      },
    },
  );

  // Handle the result
  console.log(result);
}

run();
```

<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->

## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { PushPress } from "@pushpress/pushpress";

const sdk = new PushPress({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `PUSHPRESS_DEBUG` to true.

<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@pushpress/pushpress&utm_campaign=typescript)
