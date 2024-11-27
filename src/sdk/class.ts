/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkinsClassGet } from "../funcs/checkinsClassGet.js";
import { checkinsClassList } from "../funcs/checkinsClassList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Class extends ClientSDK {
  /**
   * Get Class Checkin Details
   *
   * @remarks
   * Get the checkin details for class including class details and checkin time
   */
  async get(
    request: operations.GetClassCheckinRequest,
    options?: RequestOptions,
  ): Promise<components.ClassCheckin> {
    return unwrapAsync(checkinsClassGet(
      this,
      request,
      options,
    ));
  }

  /**
   * List Class Checkins
   *
   * @remarks
   * list event checkins
   */
  async list(
    request: operations.ListClassCheckinsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListClassCheckinsResponse, { page: number }>
  > {
    return unwrapResultIterator(checkinsClassList(
      this,
      request,
      options,
    ));
  }
}
