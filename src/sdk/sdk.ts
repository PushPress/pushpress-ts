/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { APIKeys } from "./apikeys.js";
import { Checkins } from "./checkins.js";
import { Classes } from "./classes.js";
import { Company } from "./company.js";
import { Customers } from "./customers.js";
import { Keys } from "./keys.js";
import { ManageWebhooks } from "./managewebhooks.js";
import { Messages } from "./messages.js";
import { Plans } from "./plans.js";

export class PushPress extends ClientSDK {
  private _checkins?: Checkins;
  get checkins(): Checkins {
    return (this._checkins ??= new Checkins(this._options));
  }

  private _classes?: Classes;
  get classes(): Classes {
    return (this._classes ??= new Classes(this._options));
  }

  private _company?: Company;
  get company(): Company {
    return (this._company ??= new Company(this._options));
  }

  private _customers?: Customers;
  get customers(): Customers {
    return (this._customers ??= new Customers(this._options));
  }

  private _keys?: Keys;
  get keys(): Keys {
    return (this._keys ??= new Keys(this._options));
  }

  private _apiKeys?: APIKeys;
  get apiKeys(): APIKeys {
    return (this._apiKeys ??= new APIKeys(this._options));
  }

  private _messages?: Messages;
  get messages(): Messages {
    return (this._messages ??= new Messages(this._options));
  }

  private _plans?: Plans;
  get plans(): Plans {
    return (this._plans ??= new Plans(this._options));
  }

  private _manageWebhooks?: ManageWebhooks;
  get manageWebhooks(): ManageWebhooks {
    return (this._manageWebhooks ??= new ManageWebhooks(this._options));
  }
}
