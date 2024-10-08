/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { keysCreate } from "../funcs/keysCreate.js";
import { keysDelete } from "../funcs/keysDelete.js";
import { keysExtend } from "../funcs/keysExtend.js";
import { keysList } from "../funcs/keysList.js";
import { keysRevoke } from "../funcs/keysRevoke.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Keys extends ClientSDK {
  /**
   * Create a new API key for a  company
   *
   * @remarks
   * Create a new API key for a company.
   */
  async create(
    request: operations.CreateApiKeyRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(keysCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * List all active API keys for a client
   *
   * @remarks
   * List all active API keys for a client.
   */
  async list(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(keysList(
      this,
      options,
    ));
  }

  /**
   * Revoke an API key
   *
   * @remarks
   * Revoke (deactivate) an API key.
   */
  async revoke(
    request: operations.RevokeApiKeyRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(keysRevoke(
      this,
      request,
      options,
    ));
  }

  /**
   * Permanently delete an API key
   *
   * @remarks
   * Permanently delete an API key from the system.
   */
  async delete(
    request: operations.DeleteApiKeyRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(keysDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Extend the expiration of an API key
   *
   * @remarks
   * Extend the expiration of an API key.
   */
  async extend(
    request: operations.ExtendApiKeyRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(keysExtend(
      this,
      request,
      options,
    ));
  }
}
