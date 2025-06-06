<div align="center">
    <img src="https://github.com/user-attachments/assets/fab0b863-5d21-41c5-83ac-ee6857766f8d" width="600">
    <h1>Typescript SDK</h1>
    <p><strong>Complete Gym Management Platform.</strong></p>
    <p>Developer-friendly & type-safe Typescript SDK specifically catered to leverage the <strong>PushPress</strong> API.</p>
    <a href="https://api.pushpressdev.com/platform/docs"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=4c2cec&style=for-the-badge" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />

<!-- Start Summary [summary] -->
## Summary

PushPress Platform API: The PushPress Platform API provides a comprehensive suite of endpoints designed 
to facilitate seamless integration with the PushPress ecosystem. 
This API allows developers to interact programmatically with the PushPress platform, 
enabling the automation of various tasks and the extension of platform capabilities.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)

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



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "PushPress": {
      "command": "npx",
      "args": [
        "-y", "--package", "@pushpress/pushpress",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--company-id", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "PushPress": {
      "command": "npx",
      "args": [
        "-y", "--package", "@pushpress/pushpress",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--company-id", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @pushpress/pushpress -- mcp start --help
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

const pushPress = new PushPress();

async function run() {
  await pushPress.checkinCreatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "My Event",
      role: "staff",
      typeId: "cit_12345",
      eventId: "cal_item_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
    },
    created: 420989,
    event: "checkin.created",
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiKeys](docs/sdks/apikeys/README.md)

* [get](docs/sdks/apikeys/README.md#get) - Get API Key
* [revoke](docs/sdks/apikeys/README.md#revoke) - Revoke an API Key

### [checkins](docs/sdks/checkins/README.md)

* [count](docs/sdks/checkins/README.md#count) - Get Checkin Count

#### [checkins.appointment](docs/sdks/appointment/README.md)

* [get](docs/sdks/appointment/README.md#get) - Get Appointment Checkin Details
* [list](docs/sdks/appointment/README.md#list) - List Appointment Checkins

#### [checkins.class](docs/sdks/class/README.md)

* [get](docs/sdks/class/README.md#get) - Get Class Checkin Details
* [list](docs/sdks/class/README.md#list) - List Class Checkins

#### [checkins.event](docs/sdks/event/README.md)

* [get](docs/sdks/event/README.md#get) - Get Event Checkin Details
* [list](docs/sdks/event/README.md#list) - List Event Checkins

#### [checkins.open](docs/sdks/open/README.md)

* [get](docs/sdks/open/README.md#get) - Get Open Facility Details
* [list](docs/sdks/open/README.md#list) - List Open Checkins

### [classes](docs/sdks/classes/README.md)

* [get](docs/sdks/classes/README.md#get) - Get Details for a Class

#### [classes.type](docs/sdks/type/README.md)

* [get](docs/sdks/type/README.md#get) - Get a class type
* [list](docs/sdks/type/README.md#list) - List class types for the given gym

### [company](docs/sdks/company/README.md)

* [get](docs/sdks/company/README.md#get) - Get Company Details

### [customers](docs/sdks/customers/README.md)

* [create](docs/sdks/customers/README.md#create) - Create a new Customer
* [list](docs/sdks/customers/README.md#list) - List Customers
* [get](docs/sdks/customers/README.md#get) - Get Customer Details

#### [customers.attributions](docs/sdks/attributions/README.md)

* [create](docs/sdks/attributions/README.md#create) - Create a customer attribution
* [list](docs/sdks/attributions/README.md#list) - List customer attributions
* [get](docs/sdks/attributions/README.md#get) - Get a customer attribution

### [enrollment](docs/sdks/enrollment/README.md)

* [get](docs/sdks/enrollment/README.md#get) - Get Plan Enrollment Details
* [list](docs/sdks/enrollment/README.md#list) - List Plan Enrollments

### [events](docs/sdks/events/README.md)

* [get](docs/sdks/events/README.md#get) - Get details for an event

### [keys](docs/sdks/keys/README.md)

* [create](docs/sdks/keys/README.md#create) - Create a new API Key
* [list](docs/sdks/keys/README.md#list) - List API Keys

### [manageWebhooks](docs/sdks/managewebhooks/README.md)

* [create](docs/sdks/managewebhooks/README.md#create) - Create a Webhook
* [list](docs/sdks/managewebhooks/README.md#list) - List Webhooks
* [get](docs/sdks/managewebhooks/README.md#get) - Get Webhook Details
* [update](docs/sdks/managewebhooks/README.md#update) - Update a Webhook
* [delete](docs/sdks/managewebhooks/README.md#delete) - Delete a Webhook
* [deactivate](docs/sdks/managewebhooks/README.md#deactivate) - Deactivate a Webhook
* [activate](docs/sdks/managewebhooks/README.md#activate) - Activate a Webhook
* [rotateSecret](docs/sdks/managewebhooks/README.md#rotatesecret) - Rotate a Webhook Signing Secret

### [messages](docs/sdks/messages/README.md)


#### [messages.email](docs/sdks/email/README.md)

* [send](docs/sdks/email/README.md#send) - Send an Email

#### [messages.push](docs/sdks/push/README.md)

* [send](docs/sdks/push/README.md#send) - Send Push Notification

#### [messages.realtime](docs/sdks/realtime/README.md)

* [send](docs/sdks/realtime/README.md#send) - Send Ably Realtime Event

#### [messages.sms](docs/sdks/sms/README.md)

* [send](docs/sdks/sms/README.md#send) - Send an SMS

### [plans](docs/sdks/plans/README.md)

* [get](docs/sdks/plans/README.md#get) - Get Plan details

### [PushPress SDK](docs/sdks/pushpress/README.md)

* [checkinCreatedEvent](docs/sdks/pushpress/README.md#checkincreatedevent)
* [checkinUpdatedEvent](docs/sdks/pushpress/README.md#checkinupdatedevent)
* [checkinDeletedEvent](docs/sdks/pushpress/README.md#checkindeletedevent)
* [enrollmentStatusChanged](docs/sdks/pushpress/README.md#enrollmentstatuschanged)
* [appInstalledEvent](docs/sdks/pushpress/README.md#appinstalledevent)
* [appUninstalledEvent](docs/sdks/pushpress/README.md#appuninstalledevent)
* [appointmentScheduledEvent](docs/sdks/pushpress/README.md#appointmentscheduledevent)
* [appointmentRescheduledEvent](docs/sdks/pushpress/README.md#appointmentrescheduledevent)
* [appointmentNoShowedEvent](docs/sdks/pushpress/README.md#appointmentnoshowedevent)
* [appointmentCanceledEvent](docs/sdks/pushpress/README.md#appointmentcanceledevent)
* [customerCreatedEvent](docs/sdks/pushpress/README.md#customercreatedevent)
* [customerStatusChangedEvent](docs/sdks/pushpress/README.md#customerstatuschangedevent)
* [customerDetailsChangedEvent](docs/sdks/pushpress/README.md#customerdetailschangedevent)
* [customerDeletedEvent](docs/sdks/pushpress/README.md#customerdeletedevent)
* [classCanceledEvent](docs/sdks/pushpress/README.md#classcanceledevent)
* [enrollmentCreatedEvent](docs/sdks/pushpress/README.md#enrollmentcreatedevent)
* [enrollmentDeleted](docs/sdks/pushpress/README.md#enrollmentdeleted)
* [reservationCreatedEvent](docs/sdks/pushpress/README.md#reservationcreatedevent)
* [reservationWaitlistedEvent](docs/sdks/pushpress/README.md#reservationwaitlistedevent)
* [reservationCanceledEvent](docs/sdks/pushpress/README.md#reservationcanceledevent)

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

- [`apiKeysGet`](docs/sdks/apikeys/README.md#get) - Get API Key
- [`apiKeysRevoke`](docs/sdks/apikeys/README.md#revoke) - Revoke an API Key
- [`appInstalledEvent`](docs/sdks/pushpress/README.md#appinstalledevent)
- [`appointmentCanceledEvent`](docs/sdks/pushpress/README.md#appointmentcanceledevent)
- [`appointmentNoShowedEvent`](docs/sdks/pushpress/README.md#appointmentnoshowedevent)
- [`appointmentRescheduledEvent`](docs/sdks/pushpress/README.md#appointmentrescheduledevent)
- [`appointmentScheduledEvent`](docs/sdks/pushpress/README.md#appointmentscheduledevent)
- [`appUninstalledEvent`](docs/sdks/pushpress/README.md#appuninstalledevent)
- [`checkinCreatedEvent`](docs/sdks/pushpress/README.md#checkincreatedevent)
- [`checkinDeletedEvent`](docs/sdks/pushpress/README.md#checkindeletedevent)
- [`checkinsAppointmentGet`](docs/sdks/appointment/README.md#get) - Get Appointment Checkin Details
- [`checkinsAppointmentList`](docs/sdks/appointment/README.md#list) - List Appointment Checkins
- [`checkinsClassGet`](docs/sdks/class/README.md#get) - Get Class Checkin Details
- [`checkinsClassList`](docs/sdks/class/README.md#list) - List Class Checkins
- [`checkinsCount`](docs/sdks/checkins/README.md#count) - Get Checkin Count
- [`checkinsEventGet`](docs/sdks/event/README.md#get) - Get Event Checkin Details
- [`checkinsEventList`](docs/sdks/event/README.md#list) - List Event Checkins
- [`checkinsOpenGet`](docs/sdks/open/README.md#get) - Get Open Facility Details
- [`checkinsOpenList`](docs/sdks/open/README.md#list) - List Open Checkins
- [`checkinUpdatedEvent`](docs/sdks/pushpress/README.md#checkinupdatedevent)
- [`classCanceledEvent`](docs/sdks/pushpress/README.md#classcanceledevent)
- [`classesGet`](docs/sdks/classes/README.md#get) - Get Details for a Class
- [`classesTypeGet`](docs/sdks/type/README.md#get) - Get a class type
- [`classesTypeList`](docs/sdks/type/README.md#list) - List class types for the given gym
- [`companyGet`](docs/sdks/company/README.md#get) - Get Company Details
- [`customerCreatedEvent`](docs/sdks/pushpress/README.md#customercreatedevent)
- [`customerDeletedEvent`](docs/sdks/pushpress/README.md#customerdeletedevent)
- [`customerDetailsChangedEvent`](docs/sdks/pushpress/README.md#customerdetailschangedevent)
- [`customersAttributionsCreate`](docs/sdks/attributions/README.md#create) - Create a customer attribution
- [`customersAttributionsGet`](docs/sdks/attributions/README.md#get) - Get a customer attribution
- [`customersAttributionsList`](docs/sdks/attributions/README.md#list) - List customer attributions
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create a new Customer
- [`customersGet`](docs/sdks/customers/README.md#get) - Get Customer Details
- [`customersList`](docs/sdks/customers/README.md#list) - List Customers
- [`customerStatusChangedEvent`](docs/sdks/pushpress/README.md#customerstatuschangedevent)
- [`enrollmentCreatedEvent`](docs/sdks/pushpress/README.md#enrollmentcreatedevent)
- [`enrollmentDeleted`](docs/sdks/pushpress/README.md#enrollmentdeleted)
- [`enrollmentGet`](docs/sdks/enrollment/README.md#get) - Get Plan Enrollment Details
- [`enrollmentList`](docs/sdks/enrollment/README.md#list) - List Plan Enrollments
- [`enrollmentStatusChanged`](docs/sdks/pushpress/README.md#enrollmentstatuschanged)
- [`eventsGet`](docs/sdks/events/README.md#get) - Get details for an event
- [`keysCreate`](docs/sdks/keys/README.md#create) - Create a new API Key
- [`keysList`](docs/sdks/keys/README.md#list) - List API Keys
- [`manageWebhooksActivate`](docs/sdks/managewebhooks/README.md#activate) - Activate a Webhook
- [`manageWebhooksCreate`](docs/sdks/managewebhooks/README.md#create) - Create a Webhook
- [`manageWebhooksDeactivate`](docs/sdks/managewebhooks/README.md#deactivate) - Deactivate a Webhook
- [`manageWebhooksDelete`](docs/sdks/managewebhooks/README.md#delete) - Delete a Webhook
- [`manageWebhooksGet`](docs/sdks/managewebhooks/README.md#get) - Get Webhook Details
- [`manageWebhooksList`](docs/sdks/managewebhooks/README.md#list) - List Webhooks
- [`manageWebhooksRotateSecret`](docs/sdks/managewebhooks/README.md#rotatesecret) - Rotate a Webhook Signing Secret
- [`manageWebhooksUpdate`](docs/sdks/managewebhooks/README.md#update) - Update a Webhook
- [`messagesEmailSend`](docs/sdks/email/README.md#send) - Send an Email
- [`messagesPushSend`](docs/sdks/push/README.md#send) - Send Push Notification
- [`messagesRealtimeSend`](docs/sdks/realtime/README.md#send) - Send Ably Realtime Event
- [`messagesSmsSend`](docs/sdks/sms/README.md#send) - Send an SMS
- [`plansGet`](docs/sdks/plans/README.md#get) - Get Plan details
- [`reservationCanceledEvent`](docs/sdks/pushpress/README.md#reservationcanceledevent)
- [`reservationCreatedEvent`](docs/sdks/pushpress/README.md#reservationcreatedevent)
- [`reservationWaitlistedEvent`](docs/sdks/pushpress/README.md#reservationwaitlistedevent)

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
  const result = await pushPress.customers.list({});

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

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.checkinCreatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "My Event",
      role: "staff",
      typeId: "cit_12345",
      eventId: "cal_item_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
    },
    created: 420989,
    event: "checkin.created",
  }, {
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
  });
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
});

async function run() {
  await pushPress.checkinCreatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "My Event",
      role: "staff",
      typeId: "cit_12345",
      eventId: "cal_item_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
    },
    created: 420989,
    event: "checkin.created",
  });
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type                 | Status Code                  | Content Type     |
| -------------------------- | ---------------------------- | ---------------- |
| errors.NotFound            | 404                          | application/json |
| errors.Unauthorized        | 401, 403, 407                | application/json |
| errors.Timeout             | 408                          | application/json |
| errors.RateLimited         | 429                          | application/json |
| errors.BadRequest          | 400, 413, 414, 415, 422, 431 | application/json |
| errors.Timeout             | 504                          | application/json |
| errors.NotFound            | 501, 505                     | application/json |
| errors.InternalServerError | 500, 502, 503, 506, 507, 508 | application/json |
| errors.BadRequest          | 510                          | application/json |
| errors.Unauthorized        | 511                          | application/json |
| errors.APIError            | 4XX, 5XX                     | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

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
    result = await pushPress.customers.list({});

    for await (const page of result) {
      // Handle the page
      console.log(page);
    }
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof NotFound): {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case (err instanceof Unauthorized): {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      case (err instanceof Timeout): {
        // Handle err.data$: TimeoutData
        console.error(err);
        return;
      }
      case (err instanceof RateLimited): {
        // Handle err.data$: RateLimitedData
        console.error(err);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Timeout): {
        // Handle err.data$: TimeoutData
        console.error(err);
        return;
      }
      case (err instanceof NotFound): {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Unauthorized): {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name          | Server                              | Description |
| ------------- | ----------------------------------- | ----------- |
| `production`  | `https://api.pushpress.com/v3`      | production  |
| `staging`     | `https://api.pushpressstage.com/v3` | staging     |
| `development` | `https://api.pushpressdev.com/v3`   | development |

#### Example

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  server: "development",
});

async function run() {
  await pushPress.checkinCreatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "My Event",
      role: "staff",
      typeId: "cit_12345",
      eventId: "cal_item_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
    },
    created: 420989,
    event: "checkin.created",
  });
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress({
  serverURL: "https://api.pushpress.com/v3",
});

async function run() {
  await pushPress.checkinCreatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "My Event",
      role: "staff",
      typeId: "cit_12345",
      eventId: "cal_item_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
    },
    created: 420989,
    event: "checkin.created",
  });
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
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
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
  await pushPress.checkinCreatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "My Event",
      role: "staff",
      typeId: "cit_12345",
      eventId: "cal_item_12345",
      type: {
        id: "cit_12345",
        name: "Weightlifting Seminar",
      },
    },
    created: 420989,
    event: "checkin.created",
  });
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
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
