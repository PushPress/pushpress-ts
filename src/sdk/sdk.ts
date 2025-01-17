/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appInstalledEvent } from "../funcs/appInstalledEvent.js";
import { appointmentCanceledEvent } from "../funcs/appointmentCanceledEvent.js";
import { appointmentNoShowedEvent } from "../funcs/appointmentNoShowedEvent.js";
import { appointmentRescheduledEvent } from "../funcs/appointmentRescheduledEvent.js";
import { appointmentScheduledEvent } from "../funcs/appointmentScheduledEvent.js";
import { appUninstalledEvent } from "../funcs/appUninstalledEvent.js";
import { checkinCreatedEvent } from "../funcs/checkinCreatedEvent.js";
import { checkinDeletedEvent } from "../funcs/checkinDeletedEvent.js";
import { checkinUpdatedEvent } from "../funcs/checkinUpdatedEvent.js";
import { classCanceledEvent } from "../funcs/classCanceledEvent.js";
import { customerCreatedEvent } from "../funcs/customerCreatedEvent.js";
import { customerDeletedEvent } from "../funcs/customerDeletedEvent.js";
import { customerUpdatedEvent } from "../funcs/customerUpdatedEvent.js";
import { enrollmentCreatedEvent } from "../funcs/enrollmentCreatedEvent.js";
import { enrollmentDeleted } from "../funcs/enrollmentDeleted.js";
import { enrollmentStatusChanged } from "../funcs/enrollmentStatusChanged.js";
import { reservationCanceledEvent } from "../funcs/reservationCanceledEvent.js";
import { reservationCreatedEvent } from "../funcs/reservationCreatedEvent.js";
import { reservationWaitlistedEvent } from "../funcs/reservationWaitlistedEvent.js";
import { validateWebhook } from "../funcs/validateWebhook.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as webhooks from "../models/webhooks/index.js";
import { unwrapAsync } from "../types/fp.js";
import { WebhookRecipient } from "../types/webhooks.js";
import { APIKeys } from "./apikeys.js";
import { Checkins } from "./checkins.js";
import { Classes } from "./classes.js";
import { Company } from "./company.js";
import { Customers } from "./customers.js";
import { Keys } from "./keys.js";
import { ManageWebhooks } from "./managewebhooks.js";
import { Messages } from "./messages.js";
import { Plans } from "./plans.js";

export class PushPress extends ClientSDK {
  private _checkins?: Checkins;
  get checkins(): Checkins {
    return (this._checkins ??= new Checkins(this._options));
  }

  private _classes?: Classes;
  get classes(): Classes {
    return (this._classes ??= new Classes(this._options));
  }

  private _company?: Company;
  get company(): Company {
    return (this._company ??= new Company(this._options));
  }

  private _customers?: Customers;
  get customers(): Customers {
    return (this._customers ??= new Customers(this._options));
  }

  private _keys?: Keys;
  get keys(): Keys {
    return (this._keys ??= new Keys(this._options));
  }

  private _apiKeys?: APIKeys;
  get apiKeys(): APIKeys {
    return (this._apiKeys ??= new APIKeys(this._options));
  }

  private _messages?: Messages;
  get messages(): Messages {
    return (this._messages ??= new Messages(this._options));
  }

  private _plans?: Plans;
  get plans(): Plans {
    return (this._plans ??= new Plans(this._options));
  }

  private _manageWebhooks?: ManageWebhooks;
  get manageWebhooks(): ManageWebhooks {
    return (this._manageWebhooks ??= new ManageWebhooks(this._options));
  }

  async checkinCreatedEvent(
    recipient: WebhookRecipient,
    request: webhooks.CheckinCreatedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(checkinCreatedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async checkinUpdatedEvent(
    recipient: WebhookRecipient,
    request: webhooks.CheckinUpdatedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(checkinUpdatedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async checkinDeletedEvent(
    recipient: WebhookRecipient,
    request: webhooks.CheckinDeletedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(checkinDeletedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async appInstalledEvent(
    recipient: WebhookRecipient,
    request: webhooks.AppInstalledEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(appInstalledEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async appUninstalledEvent(
    recipient: WebhookRecipient,
    request: webhooks.AppUninstalledEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(appUninstalledEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async appointmentScheduledEvent(
    recipient: WebhookRecipient,
    request: webhooks.AppointmentScheduledEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(appointmentScheduledEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async appointmentRescheduledEvent(
    recipient: WebhookRecipient,
    request: webhooks.AppointmentRescheduledEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(appointmentRescheduledEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async appointmentNoShowedEvent(
    recipient: WebhookRecipient,
    request: webhooks.AppointmentNoShowedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(appointmentNoShowedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async appointmentCanceledEvent(
    recipient: WebhookRecipient,
    request: webhooks.AppointmentCanceledEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(appointmentCanceledEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async customerCreatedEvent(
    recipient: WebhookRecipient,
    request: webhooks.CustomerCreatedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customerCreatedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async customerUpdatedEvent(
    recipient: WebhookRecipient,
    request: webhooks.CustomerUpdatedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customerUpdatedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async customerDeletedEvent(
    recipient: WebhookRecipient,
    request: webhooks.CustomerDeletedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customerDeletedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async classCanceledEvent(
    recipient: WebhookRecipient,
    request: webhooks.ClassCanceledEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(classCanceledEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async enrollmentCreatedEvent(
    recipient: WebhookRecipient,
    request: webhooks.EnrollmentCreatedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(enrollmentCreatedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async enrollmentStatusChanged(
    recipient: WebhookRecipient,
    request: webhooks.EnrollmentStatusChangedRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(enrollmentStatusChanged(
      this,
      recipient,
      request,
      options,
    ));
  }

  async enrollmentDeleted(
    recipient: WebhookRecipient,
    request: webhooks.EnrollmentDeletedRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(enrollmentDeleted(
      this,
      recipient,
      request,
      options,
    ));
  }

  async reservationCreatedEvent(
    recipient: WebhookRecipient,
    request: webhooks.ReservationCreatedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(reservationCreatedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async reservationWaitlistedEvent(
    recipient: WebhookRecipient,
    request: webhooks.ReservationWaitlistedEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(reservationWaitlistedEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async reservationCanceledEvent(
    recipient: WebhookRecipient,
    request: webhooks.ReservationCanceledEventRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(reservationCanceledEvent(
      this,
      recipient,
      request,
      options,
    ));
  }

  async validateWebhook({
    request,
    secret,
  }: {
    request: {
      body: string;
      headers: Record<string, string> | Headers;
      url: string;
      method: string;
    } | Request;
    secret: string;
  }): Promise<
    | webhooks.CheckinCreatedEventRequestBody
    | webhooks.CheckinUpdatedEventRequestBody
    | webhooks.CheckinDeletedEventRequestBody
    | webhooks.AppInstalledEventRequestBody
    | webhooks.AppUninstalledEventRequestBody
    | webhooks.AppointmentScheduledEventRequestBody
    | webhooks.AppointmentRescheduledEventRequestBody
    | webhooks.AppointmentNoShowedEventRequestBody
    | webhooks.AppointmentCanceledEventRequestBody
    | webhooks.CustomerCreatedEventRequestBody
    | webhooks.CustomerUpdatedEventRequestBody
    | webhooks.CustomerDeletedEventRequestBody
    | webhooks.ClassCanceledEventRequestBody
    | webhooks.EnrollmentCreatedEventRequestBody
    | webhooks.EnrollmentStatusChangedRequestBody
    | webhooks.EnrollmentDeletedRequestBody
    | webhooks.ReservationCreatedEventRequestBody
    | webhooks.ReservationWaitlistedEventRequestBody
    | webhooks.ReservationCanceledEventRequestBody
  > {
    return unwrapAsync(validateWebhook(
      this,
      { request, secret },
    ));
  }
}
