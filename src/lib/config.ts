/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * production
 */
export const ServerProd = "prod";
/**
 * staging
 */
export const ServerStage = "stage";
/**
 * development
 */
export const ServerDev = "dev";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerProd]: "https://api.pushpress.com",
  [ServerStage]: "https://api.pushpressstage.com",
  [ServerDev]: "https://api.pushpressdev.com",
} as const;

export type SDKOptions = {
  apiKey?: string | (() => Promise<string>);

  /**
   * Allows setting the companyId parameter for all supported operations
   */
  companyId?: string | undefined;

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  server?: keyof typeof ServerList;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const server = options.server ?? ServerProd;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "3.0.0",
  sdkVersion: "0.3.3",
  genVersion: "2.438.15",
  userAgent:
    "speakeasy-sdk/typescript 0.3.3 2.438.15 3.0.0 @pushpress/pushpress",
} as const;
