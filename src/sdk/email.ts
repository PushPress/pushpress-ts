/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { messagesEmailSend } from "../funcs/messagesEmailSend.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Email extends ClientSDK {
  /**
   * Send an Email
   *
   * @remarks
   * Send an email from the PushPress platform. Note that only first party apps can send emails
   */
  async send(
    request: operations.SendEmailRequest,
    options?: RequestOptions,
  ): Promise<operations.SendEmailResponseBody> {
    return unwrapAsync(messagesEmailSend(
      this,
      request,
      options,
    ));
  }
}
