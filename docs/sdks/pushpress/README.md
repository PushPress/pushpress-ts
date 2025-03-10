# PushPress SDK

## Overview

PushPress Platform API: The PushPress Platform API provides a comprehensive suite of endpoints designed 
to facilitate seamless integration with the PushPress ecosystem. 
This API allows developers to interact programmatically with the PushPress platform, 
enabling the automation of various tasks and the extension of platform capabilities.


### Available Operations

* [checkinCreatedEvent](#checkincreatedevent)
* [checkinUpdatedEvent](#checkinupdatedevent)
* [checkinDeletedEvent](#checkindeletedevent)
* [appInstalledEvent](#appinstalledevent)
* [appUninstalledEvent](#appuninstalledevent)
* [appointmentScheduledEvent](#appointmentscheduledevent)
* [appointmentRescheduledEvent](#appointmentrescheduledevent)
* [appointmentNoShowedEvent](#appointmentnoshowedevent)
* [appointmentCanceledEvent](#appointmentcanceledevent)
* [customerCreatedEvent](#customercreatedevent)
* [customerStatusChangedEvent](#customerstatuschangedevent)
* [customerDetailsChangedEvent](#customerdetailschangedevent)
* [customerDeletedEvent](#customerdeletedevent)
* [classCanceledEvent](#classcanceledevent)
* [enrollmentCreatedEvent](#enrollmentcreatedevent)
* [enrollmentStatusChanged](#enrollmentstatuschanged)
* [enrollmentDeleted](#enrollmentdeleted)
* [reservationCreatedEvent](#reservationcreatedevent)
* [reservationWaitlistedEvent](#reservationwaitlistedevent)
* [reservationCanceledEvent](#reservationcanceledevent)

## checkinCreatedEvent

### Example Usage

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

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { checkinCreatedEvent } from "@pushpress/pushpress/funcs/checkinCreatedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await checkinCreatedEvent(pushPress, {
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.CheckinCreatedEventRequestBody](../../models/webhooks/checkincreatedeventrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## checkinUpdatedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.checkinUpdatedEvent({
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
    },
    previousValues: {
      id: "apptschdl_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "Personal Training",
      appointmentId: "apptschdl_12345",
      typeId: "appttype_12345",
      staffId: "usr_78910",
    },
    created: 738207,
    event: "checkin.updated",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { checkinUpdatedEvent } from "@pushpress/pushpress/funcs/checkinUpdatedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await checkinUpdatedEvent(pushPress, {
    data: {
      id: "chk_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
    },
    previousValues: {
      id: "apptschdl_12345",
      customer: "usr_12345",
      company: "cli_12345",
      timestamp: 1672531200000,
      name: "Personal Training",
      appointmentId: "apptschdl_12345",
      typeId: "appttype_12345",
      staffId: "usr_78910",
    },
    created: 738207,
    event: "checkin.updated",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.CheckinUpdatedEventRequestBody](../../models/webhooks/checkinupdatedeventrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## checkinDeletedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.checkinDeletedEvent({
    data: {
      id: "<id>",
      customerId: "<id>",
      companyId: "<id>",
    },
    created: 718383,
    event: "checkin.deleted",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { checkinDeletedEvent } from "@pushpress/pushpress/funcs/checkinDeletedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await checkinDeletedEvent(pushPress, {
    data: {
      id: "<id>",
      customerId: "<id>",
      companyId: "<id>",
    },
    created: 718383,
    event: "checkin.deleted",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.CheckinDeletedEventRequestBody](../../models/webhooks/checkindeletedeventrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## appInstalledEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.appInstalledEvent({
    data: {
      clientUuid: "company-uuid",
      appId: "app-uuid",
      installationId: "installation-uuid",
    },
    created: 865806,
    event: "app.installed",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { appInstalledEvent } from "@pushpress/pushpress/funcs/appInstalledEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await appInstalledEvent(pushPress, {
    data: {
      clientUuid: "company-uuid",
      appId: "app-uuid",
      installationId: "installation-uuid",
    },
    created: 865806,
    event: "app.installed",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.AppInstalledEventRequestBody](../../models/webhooks/appinstalledeventrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## appUninstalledEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.appUninstalledEvent({
    data: {
      clientUuid: "company-uuid",
      appId: "app-uuid",
      installationId: "installation-uuid",
    },
    created: 897950,
    event: "app.uninstalled",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { appUninstalledEvent } from "@pushpress/pushpress/funcs/appUninstalledEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await appUninstalledEvent(pushPress, {
    data: {
      clientUuid: "company-uuid",
      appId: "app-uuid",
      installationId: "installation-uuid",
    },
    created: 897950,
    event: "app.uninstalled",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.AppUninstalledEventRequestBody](../../models/webhooks/appuninstalledeventrequestbody.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## appointmentScheduledEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.appointmentScheduledEvent({
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 835440,
    event: "appointment.scheduled",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { appointmentScheduledEvent } from "@pushpress/pushpress/funcs/appointmentScheduledEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await appointmentScheduledEvent(pushPress, {
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 835440,
    event: "appointment.scheduled",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.AppointmentScheduledEventRequestBody](../../models/webhooks/appointmentscheduledeventrequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## appointmentRescheduledEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.appointmentRescheduledEvent({
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 846105,
    event: "appointment.rescheduled",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { appointmentRescheduledEvent } from "@pushpress/pushpress/funcs/appointmentRescheduledEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await appointmentRescheduledEvent(pushPress, {
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 846105,
    event: "appointment.rescheduled",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.AppointmentRescheduledEventRequestBody](../../models/webhooks/appointmentrescheduledeventrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## appointmentNoShowedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.appointmentNoShowedEvent({
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 391237,
    event: "appointment.noshowed",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { appointmentNoShowedEvent } from "@pushpress/pushpress/funcs/appointmentNoShowedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await appointmentNoShowedEvent(pushPress, {
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 391237,
    event: "appointment.noshowed",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.AppointmentNoShowedEventRequestBody](../../models/webhooks/appointmentnoshowedeventrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## appointmentCanceledEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.appointmentCanceledEvent({
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 710519,
    event: "appointment.canceled",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { appointmentCanceledEvent } from "@pushpress/pushpress/funcs/appointmentCanceledEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await appointmentCanceledEvent(pushPress, {
    data: {
      id: "apptschdl_12345",
      type: {
        name: "Personal Training",
      },
      companyId: "client_12345",
      customerId: "usr_12345",
      startTimestamp: 1677721600,
      staffId: "usr_78910",
    },
    created: 710519,
    event: "appointment.canceled",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.AppointmentCanceledEventRequestBody](../../models/webhooks/appointmentcanceledeventrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## customerCreatedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.customerCreatedEvent({
    data: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    created: 453969,
    event: "customer.created",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { customerCreatedEvent } from "@pushpress/pushpress/funcs/customerCreatedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await customerCreatedEvent(pushPress, {
    data: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    created: 453969,
    event: "customer.created",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.CustomerCreatedEventRequestBody](../../models/webhooks/customercreatedeventrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## customerStatusChangedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.customerStatusChangedEvent({
    data: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    previousValues: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    created: 153704,
    event: "customer.status.changed",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { customerStatusChangedEvent } from "@pushpress/pushpress/funcs/customerStatusChangedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await customerStatusChangedEvent(pushPress, {
    data: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    previousValues: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    created: 153704,
    event: "customer.status.changed",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.CustomerStatusChangedEventRequestBody](../../models/webhooks/customerstatuschangedeventrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## customerDetailsChangedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.customerDetailsChangedEvent({
    data: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    created: 775111,
    event: "customer.details.changed",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { customerDetailsChangedEvent } from "@pushpress/pushpress/funcs/customerDetailsChangedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await customerDetailsChangedEvent(pushPress, {
    data: {
      id: "usr_1234",
      companyId: "cli_1234",
      name: {
        first: "John",
        last: "Doe",
        nickname: "jimmy",
      },
      gender: "male",
      dob: "1990-01-01",
      address: {
        line1: "123 Main St",
        line2: "Apt 1",
        city: "Anytown",
        country: "US",
        state: "NY",
        zip: "12345",
      },
      assignedToStaffId: null,
      account: {},
      profileImage: "https://example.com/profile.jpg",
      membershipDetails: {
        initialMembershipStartDate: "2022-01-01",
      },
      email: "john@doe.com",
      phone: "+1-800-555-1234",
      role: "member",
    },
    created: 775111,
    event: "customer.details.changed",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.CustomerDetailsChangedEventRequestBody](../../models/webhooks/customerdetailschangedeventrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## customerDeletedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.customerDeletedEvent({
    data: {},
    created: 522524,
    event: "customer.deleted",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { customerDeletedEvent } from "@pushpress/pushpress/funcs/customerDeletedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await customerDeletedEvent(pushPress, {
    data: {},
    created: 522524,
    event: "customer.deleted",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.CustomerDeletedEventRequestBody](../../models/webhooks/customerdeletedeventrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## classCanceledEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.classCanceledEvent({
    data: {
      id: "cal-12345",
      coachUuid: "usr_12345",
      assistantCoachUuid: "usr_12345",
      company: "cli_12345",
      classTypeName: "HIIT",
      locationUuid: "loc_12345",
      reservations: [
        {
          id: "reg_12345",
          reservedId: "cal-12345",
          customerId: "usr_12345",
          companyId: "cli_12345",
          registrationTimestamp: 1672531200000,
          status: "reserved",
        },
      ],
      start: 1704063600,
      end: 1704067200,
    },
    created: 97537,
    event: "class.canceled",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { classCanceledEvent } from "@pushpress/pushpress/funcs/classCanceledEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await classCanceledEvent(pushPress, {
    data: {
      id: "cal-12345",
      coachUuid: "usr_12345",
      assistantCoachUuid: "usr_12345",
      company: "cli_12345",
      classTypeName: "HIIT",
      locationUuid: "loc_12345",
      reservations: [
        {
          id: "reg_12345",
          reservedId: "cal-12345",
          customerId: "usr_12345",
          companyId: "cli_12345",
          registrationTimestamp: 1672531200000,
          status: "reserved",
        },
      ],
      start: 1704063600,
      end: 1704067200,
    },
    created: 97537,
    event: "class.canceled",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.ClassCanceledEventRequestBody](../../models/webhooks/classcanceledeventrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## enrollmentCreatedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.enrollmentCreatedEvent({
    data: {
      id: "sub_12345",
      customerId: "usr_12345",
      companyId: "client_12345",
      planId: "plan_12345",
      billingSchedule: {
        period: "month",
        interval: 1,
      },
      status: "active",
      checkinDetails: {
        checkins: 0,
        limit: -1,
      },
      entitlements: [
        {
          type: "24_HOUR_ACCESS",
          id: "plnentl_12345",
          interval: "",
          quantity: 1,
          metadata: {},
        },
      ],
    },
    created: 804740,
    event: "enrollment.created",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { enrollmentCreatedEvent } from "@pushpress/pushpress/funcs/enrollmentCreatedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await enrollmentCreatedEvent(pushPress, {
    data: {
      id: "sub_12345",
      customerId: "usr_12345",
      companyId: "client_12345",
      planId: "plan_12345",
      billingSchedule: {
        period: "month",
        interval: 1,
      },
      status: "active",
      checkinDetails: {
        checkins: 0,
        limit: -1,
      },
      entitlements: [
        {
          type: "24_HOUR_ACCESS",
          id: "plnentl_12345",
          interval: "",
          quantity: 1,
          metadata: {},
        },
      ],
    },
    created: 804740,
    event: "enrollment.created",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.EnrollmentCreatedEventRequestBody](../../models/webhooks/enrollmentcreatedeventrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## enrollmentStatusChanged

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.enrollmentStatusChanged({
    data: {
      id: "sub_12345",
      customerId: "usr_12345",
      companyId: "client_12345",
      planId: "plan_12345",
      billingSchedule: {
        period: "month",
        interval: 1,
      },
      status: "active",
      checkinDetails: {
        checkins: 0,
        limit: -1,
      },
      entitlements: [
        {
          type: "24_HOUR_ACCESS",
          id: "plnentl_12345",
          interval: "",
          quantity: 1,
          metadata: {},
        },
      ],
    },
    previousValues: {
      id: "sub_12345",
      customerId: "usr_12345",
      companyId: "client_12345",
      planId: "plan_12345",
      billingSchedule: {
        period: "month",
        interval: 1,
      },
      status: "active",
      checkinDetails: {
        checkins: 0,
        limit: -1,
      },
      entitlements: [
        {
          type: "24_HOUR_ACCESS",
          id: "plnentl_12345",
          interval: "",
          quantity: 1,
          metadata: {},
        },
      ],
    },
    created: 961657,
    event: "enrollment.status.changed",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { enrollmentStatusChanged } from "@pushpress/pushpress/funcs/enrollmentStatusChanged.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await enrollmentStatusChanged(pushPress, {
    data: {
      id: "sub_12345",
      customerId: "usr_12345",
      companyId: "client_12345",
      planId: "plan_12345",
      billingSchedule: {
        period: "month",
        interval: 1,
      },
      status: "active",
      checkinDetails: {
        checkins: 0,
        limit: -1,
      },
      entitlements: [
        {
          type: "24_HOUR_ACCESS",
          id: "plnentl_12345",
          interval: "",
          quantity: 1,
          metadata: {},
        },
      ],
    },
    previousValues: {
      id: "sub_12345",
      customerId: "usr_12345",
      companyId: "client_12345",
      planId: "plan_12345",
      billingSchedule: {
        period: "month",
        interval: 1,
      },
      status: "active",
      checkinDetails: {
        checkins: 0,
        limit: -1,
      },
      entitlements: [
        {
          type: "24_HOUR_ACCESS",
          id: "plnentl_12345",
          interval: "",
          quantity: 1,
          metadata: {},
        },
      ],
    },
    created: 961657,
    event: "enrollment.status.changed",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.EnrollmentStatusChangedRequestBody](../../models/webhooks/enrollmentstatuschangedrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## enrollmentDeleted

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.enrollmentDeleted({
    data: {},
    created: 230421,
    event: "enrollment.deleted",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { enrollmentDeleted } from "@pushpress/pushpress/funcs/enrollmentDeleted.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await enrollmentDeleted(pushPress, {
    data: {},
    created: 230421,
    event: "enrollment.deleted",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.EnrollmentDeletedRequestBody](../../models/webhooks/enrollmentdeletedrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## reservationCreatedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.reservationCreatedEvent({
    data: {
      id: "reg_12345",
      reservedId: "cal-12345",
      customerId: "usr_12345",
      companyId: "cli_12345",
      registrationTimestamp: 1672531200000,
      status: "reserved",
      checkin: {
        id: "apptschdl_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
        name: "Personal Training",
        appointmentId: "apptschdl_12345",
        typeId: "appttype_12345",
        staffId: "usr_78910",
      },
    },
    created: 377467,
    event: "reservation.created",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { reservationCreatedEvent } from "@pushpress/pushpress/funcs/reservationCreatedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await reservationCreatedEvent(pushPress, {
    data: {
      id: "reg_12345",
      reservedId: "cal-12345",
      customerId: "usr_12345",
      companyId: "cli_12345",
      registrationTimestamp: 1672531200000,
      status: "reserved",
      checkin: {
        id: "apptschdl_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
        name: "Personal Training",
        appointmentId: "apptschdl_12345",
        typeId: "appttype_12345",
        staffId: "usr_78910",
      },
    },
    created: 377467,
    event: "reservation.created",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.ReservationCreatedEventRequestBody](../../models/webhooks/reservationcreatedeventrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## reservationWaitlistedEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.reservationWaitlistedEvent({
    data: {
      id: "reg_12345",
      reservedId: "cal-12345",
      customerId: "usr_12345",
      companyId: "cli_12345",
      registrationTimestamp: 1672531200000,
      status: "reserved",
      checkin: {
        id: "chk_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
      },
    },
    created: 902968,
    event: "reservation.waitlisted",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { reservationWaitlistedEvent } from "@pushpress/pushpress/funcs/reservationWaitlistedEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await reservationWaitlistedEvent(pushPress, {
    data: {
      id: "reg_12345",
      reservedId: "cal-12345",
      customerId: "usr_12345",
      companyId: "cli_12345",
      registrationTimestamp: 1672531200000,
      status: "reserved",
      checkin: {
        id: "chk_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
      },
    },
    created: 902968,
    event: "reservation.waitlisted",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.ReservationWaitlistedEventRequestBody](../../models/webhooks/reservationwaitlistedeventrequestbody.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## reservationCanceledEvent

### Example Usage

```typescript
import { PushPress } from "@pushpress/pushpress";

const pushPress = new PushPress();

async function run() {
  await pushPress.reservationCanceledEvent({
    data: {
      id: "reg_12345",
      reservedId: "cal-12345",
      customerId: "usr_12345",
      companyId: "cli_12345",
      registrationTimestamp: 1672531200000,
      status: "reserved",
      checkin: {
        id: "chk_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
      },
    },
    created: 816068,
    event: "reservation.canceled",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushPressCore } from "@pushpress/pushpress/core.js";
import { reservationCanceledEvent } from "@pushpress/pushpress/funcs/reservationCanceledEvent.js";

// Use `PushPressCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushPress = new PushPressCore();

async function run() {
  const res = await reservationCanceledEvent(pushPress, {
    data: {
      id: "reg_12345",
      reservedId: "cal-12345",
      customerId: "usr_12345",
      companyId: "cli_12345",
      registrationTimestamp: 1672531200000,
      status: "reserved",
      checkin: {
        id: "chk_12345",
        customer: "usr_12345",
        company: "cli_12345",
        timestamp: 1672531200000,
      },
    },
    created: 816068,
    event: "reservation.canceled",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [webhooks.ReservationCanceledEventRequestBody](../../models/webhooks/reservationcanceledeventrequestbody.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |