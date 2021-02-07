import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Plugins {
  constructor(private client: Client) { }
  /**
     * Get plugins */
  async getPluginsId<T = Models.Plugin>(parameters: Parameters.GetPluginsId, callback: Callback<T>): Promise<void>;
  /**
     * Get plugins */
  async getPluginsId<T = Models.Plugin>(parameters: Parameters.GetPluginsId, callback?: undefined): Promise<T>;
  async getPluginsId<T = Models.Plugin>(parameters: Parameters.GetPluginsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/plugins/${parameters.id}/`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getPluginsId' });
  }
  /**
     * Update a Plugin */
  async putPluginsId<T = Models.Plugin>(parameters: Parameters.PutPluginsId, callback: Callback<T>): Promise<void>;
  /**
     * Update a Plugin */
  async putPluginsId<T = Models.Plugin>(parameters: Parameters.PutPluginsId, callback?: undefined): Promise<T>;
  async putPluginsId<T = Models.Plugin>(parameters: Parameters.PutPluginsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/plugins/${parameters.id}/`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putPluginsId' });
  }
  /**
     * Create a new listing for a given locale for your Power-Up */
  async postPluginsIdpluginListing<T = Models.PluginListing>(parameters: Parameters.PostPluginsIdpluginListing, callback: Callback<T>): Promise<void>;
  /**
     * Create a new listing for a given locale for your Power-Up */
  async postPluginsIdpluginListing<T = Models.PluginListing>(parameters: Parameters.PostPluginsIdpluginListing, callback?: undefined): Promise<T>;
  async postPluginsIdpluginListing<T = Models.PluginListing>(parameters: Parameters.PostPluginsIdpluginListing, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/plugins/${parameters.idPlugin}/listing`,
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
      data: {
        description: parameters.description,
        locale: parameters.locale,
        overview: parameters.overview,
        name: parameters.name,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postPluginsIdpluginListing' });
  }
  async getPluginsIdComplianceMemberprivacy<T = any>(parameters: Parameters.GetPluginsIdComplianceMemberprivacy, callback: Callback<T>): Promise<void>;
  async getPluginsIdComplianceMemberprivacy<T = any>(parameters: Parameters.GetPluginsIdComplianceMemberprivacy, callback?: undefined): Promise<T>;
  async getPluginsIdComplianceMemberprivacy<T = any>(parameters: Parameters.GetPluginsIdComplianceMemberprivacy, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/plugins/${parameters.id}/compliance/memberPrivacy`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getPluginsIdComplianceMemberprivacy' });
  }
  /**
     * Update an existing listing for your Power-Up */
  async putPluginsIdpluginListingsIdlisting<T = Models.PluginListing>(parameters: Parameters.PutPluginsIdpluginListingsIdlisting, callback: Callback<T>): Promise<void>;
  /**
     * Update an existing listing for your Power-Up */
  async putPluginsIdpluginListingsIdlisting<T = Models.PluginListing>(parameters: Parameters.PutPluginsIdpluginListingsIdlisting, callback?: undefined): Promise<T>;
  async putPluginsIdpluginListingsIdlisting<T = Models.PluginListing>(parameters: Parameters.PutPluginsIdpluginListingsIdlisting, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/plugins/${parameters.idPlugin}/listings/${parameters.idListing}`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
      data: {
        description: parameters.description,
        locale: parameters.locale,
        overview: parameters.overview,
        name: parameters.name,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putPluginsIdpluginListingsIdlisting' });
  }
}
