/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { classesTypeGet } from "../../funcs/classesTypeGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetClassTypeRequest$inboundSchema,
};

export const tool$classesTypeGet: ToolDefinition<typeof args> = {
  name: "classes-type-get",
  description: `Get a class type

Get Class type details`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await classesTypeGet(
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
