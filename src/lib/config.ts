/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * local
 */
export const ServerLocal = "local";
/**
 * development
 */
export const ServerDevelopment = "development";
/**
 * staging
 */
export const ServerStaging = "staging";
/**
 * production
 */
export const ServerProduction = "production";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerLocal]: "http://localhost:3033",
  [ServerDevelopment]: "https://api.pushpressdev.com/v3",
  [ServerStaging]: "https://api.pushpressstage.com/v3",
  [ServerProduction]: "https://api.pushpress.com/v3",
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
    const server = options.server ?? ServerLocal;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "3.0.0",
  sdkVersion: "0.5.7",
  genVersion: "2.438.15",
  userAgent:
    "speakeasy-sdk/typescript 0.5.7 2.438.15 3.0.0 @pushpress/pushpress",
} as const;
