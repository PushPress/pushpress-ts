/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { manageWebhooksActivate } from "../funcs/manageWebhooksActivate.js";
import { manageWebhooksCreate } from "../funcs/manageWebhooksCreate.js";
import { manageWebhooksDelete } from "../funcs/manageWebhooksDelete.js";
import { manageWebhooksGet } from "../funcs/manageWebhooksGet.js";
import { manageWebhooksList } from "../funcs/manageWebhooksList.js";
import { manageWebhooksRotateSecret } from "../funcs/manageWebhooksRotateSecret.js";
import { manageWebhooksUpdate } from "../funcs/manageWebhooksUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ManageWebhooks extends ClientSDK {
  /**
   * Create a Webhook
   *
   * @remarks
   * Create a platform webhook that can be used to listen for events on the pushpress platform at a given URL
   */
  async create(
    request: operations.CreateWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateWebhookResponseBody> {
    return unwrapAsync(manageWebhooksCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * List Webhooks
   *
   * @remarks
   * List platform webhooks for the current customer, including the signing secret and event subscriptions
   */
  async list(
    request: operations.ListWebhooksRequest,
    options?: RequestOptions,
  ): Promise<operations.ListWebhooksResponseBody> {
    return unwrapAsync(manageWebhooksList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Webhook Details
   *
   * @remarks
   * Get the details for a platform webhook including the signing secret and event subscriptions
   */
  async get(
    request: operations.GetWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.GetWebhookResponseBody> {
    return unwrapAsync(manageWebhooksGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a Webhook
   *
   * @remarks
   * Update the details for a platform webhook including the signing secret an event subscriptions
   */
  async update(
    request: operations.UpdateWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateWebhookResponseBody> {
    return unwrapAsync(manageWebhooksUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a Webhook
   *
   * @remarks
   * Deregister a platform webhook
   */
  async delete(
    request: operations.DeleteWebhookRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(manageWebhooksDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Activate a Webhook
   *
   * @remarks
   * Activate a deleted platform webhook
   */
  async activate(
    request: operations.ActivateWebhookRequest,
    options?: RequestOptions,
  ): Promise<operations.ActivateWebhookResponseBody> {
    return unwrapAsync(manageWebhooksActivate(
      this,
      request,
      options,
    ));
  }

  /**
   * Rotate a Webhook Signing Secret
   *
   * @remarks
   * Rotate a platform webhook's signing secret
   */
  async rotateSecret(
    request: operations.RotateWebhookSigningSecretRequest,
    options?: RequestOptions,
  ): Promise<operations.RotateWebhookSigningSecretResponseBody> {
    return unwrapAsync(manageWebhooksRotateSecret(
      this,
      request,
      options,
    ));
  }
}