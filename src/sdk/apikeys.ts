/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { apiKeysCreate } from "../funcs/apiKeysCreate.js";
import { apiKeysDelete } from "../funcs/apiKeysDelete.js";
import { apiKeysList } from "../funcs/apiKeysList.js";
import { apiKeysRevoke } from "../funcs/apiKeysRevoke.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ApiKeys extends ClientSDK {
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
    return unwrapAsync(apiKeysCreate(
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
  ): Promise<components.ApiKey> {
    return unwrapAsync(apiKeysList(
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
    return unwrapAsync(apiKeysRevoke(
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
    return unwrapAsync(apiKeysDelete(
      this,
      request,
      options,
    ));
  }
}
