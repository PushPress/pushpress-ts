import { BeforeRequestHook, Hooks } from "./types.js";
// @ts-expect-error only support node for now
import crypto from "crypto";

const beforeRequestHook: BeforeRequestHook = {
  beforeRequest: (hookCtx, request) => {
    console.log("running hoook..........................");
    // sign the request with an hmac
    const hmac = crypto.createHmac("sha256", hookCtx.securitySource.apiKey);
    hmac.update(request.url);
    hmac.update(request.method);
    hmac.update(request.headers.get("content-type") || "");
    hmac.update(request.headers.get("accept") || "");
    hmac.update(request.body || "");
    const signature = hmac.digest("hex");

    request.headers.set("api-key-signature", signature);
    return request;
  },
};

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */

export function initHooks(hooks: Hooks) {
  hooks.registerBeforeRequestHook(beforeRequestHook);
  // Add hooks by calling hooks.register{ClientInit/BeforeCreateRequest/BeforeRequest/AfterSuccess/AfterError}Hook
  // with an instance of a hook that implements that specific Hook interface
  // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
}
