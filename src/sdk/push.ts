/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagesPushSend } from "../funcs/messagesPushSend.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Push extends ClientSDK {
  /**
   * Send Push Notification
   *
   * @remarks
   * Send a push notification message from the PushPress platform. Note that only first party apps can send push notifications
   */
  async send(
    request: operations.SendPushRequest,
    options?: RequestOptions,
  ): Promise<operations.SendPushResponseBody> {
    return unwrapAsync(messagesPushSend(
      this,
      request,
      options,
    ));
  }
}
