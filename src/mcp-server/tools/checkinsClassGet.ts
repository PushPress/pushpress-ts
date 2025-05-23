/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkinsClassGet } from "../../funcs/checkinsClassGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetClassCheckinRequest$inboundSchema,
};

export const tool$checkinsClassGet: ToolDefinition<typeof args> = {
  name: "checkins-class-get",
  description: `Get Class Checkin Details

Get the checkin details for class including class details and checkin time`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await checkinsClassGet(
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
