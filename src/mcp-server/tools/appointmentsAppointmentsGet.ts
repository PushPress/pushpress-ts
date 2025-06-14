/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appointmentsAppointmentsGet } from "../../funcs/appointmentsAppointmentsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAppointmentRequest$inboundSchema,
};

export const tool$appointmentsAppointmentsGet: ToolDefinition<typeof args> = {
  name: "appointments-appointments-get",
  description: `Get details for an appointment

Get details for an appointment`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await appointmentsAppointmentsGet(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
