/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagesRealtimeSend } from "../funcs/messagesRealtimeSend.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Realtime extends ClientSDK {
  /**
   * Send an event via Ably Realtime
   *
   * @remarks
   * Send an event to a channel via Ably Realtime. This is used to notify users notify clients of server side events.
   */
  async send(
    request: operations.SendEventRequest,
    options?: RequestOptions,
  ): Promise<operations.SendEventResponseBody> {
    return unwrapAsync(messagesRealtimeSend(
      this,
      request,
      options,
    ));
  }
}