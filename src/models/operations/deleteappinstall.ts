/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteAppInstallRequest = {
  appId: string;
  installId: string;
};

/** @internal */
export const DeleteAppInstallRequest$inboundSchema: z.ZodType<
  DeleteAppInstallRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  app_id: z.string(),
  install_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "app_id": "appId",
    "install_id": "installId",
  });
});

/** @internal */
export type DeleteAppInstallRequest$Outbound = {
  app_id: string;
  install_id: string;
};

/** @internal */
export const DeleteAppInstallRequest$outboundSchema: z.ZodType<
  DeleteAppInstallRequest$Outbound,
  z.ZodTypeDef,
  DeleteAppInstallRequest
> = z.object({
  appId: z.string(),
  installId: z.string(),
}).transform((v) => {
  return remap$(v, {
    appId: "app_id",
    installId: "install_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAppInstallRequest$ {
  /** @deprecated use `DeleteAppInstallRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteAppInstallRequest$inboundSchema;
  /** @deprecated use `DeleteAppInstallRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteAppInstallRequest$outboundSchema;
  /** @deprecated use `DeleteAppInstallRequest$Outbound` instead. */
  export type Outbound = DeleteAppInstallRequest$Outbound;
}
