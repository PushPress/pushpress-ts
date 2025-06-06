/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkinsAppointmentGet } from "../funcs/checkinsAppointmentGet.js";
import { checkinsAppointmentList } from "../funcs/checkinsAppointmentList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Appointment extends ClientSDK {
  /**
   * Get Appointment Checkin Details
   *
   * @remarks
   * Get the checkin details for appointment including appointment details and checkin time
   */
  async get(
    request: operations.GetAppointmentCheckinRequest,
    options?: RequestOptions,
  ): Promise<components.AppointmentCheckin> {
    return unwrapAsync(checkinsAppointmentGet(
      this,
      request,
      options,
    ));
  }

  /**
   * List Appointment Checkins
   *
   * @remarks
   * list appointment checkins. Includes details about the appointment, customer and staff
   */
  async list(
    request: operations.ListAppointmentCheckinsRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ListAppointmentCheckinsResponse, { cursor: string }>
  > {
    return unwrapResultIterator(checkinsAppointmentList(
      this,
      request,
      options,
    ));
  }
}
