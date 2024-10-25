/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagesPushSend } from "../funcs/messagesPushSend.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Push extends ClientSDK {
  /**
   * Send an PushNotification
   *
   * @remarks
   * Send a push notification message from the PushPress platform
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
