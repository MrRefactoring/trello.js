import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Plugins {
  constructor(private client: Client) {
  }

  /**
   * Get plugins */
  async getPlugin<T = Models.Plugin>(parameters: Parameters.GetPlugin, callback: Callback<T>): Promise<void>;
  /**
   * Get plugins */
  async getPlugin<T = Models.Plugin>(parameters: Parameters.GetPlugin, callback?: never): Promise<T>;
  async getPlugin<T = Models.Plugin>(parameters: Parameters.GetPlugin, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/plugins/${parameters.id}/`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getPlugin' });
  }

  /**
   * Update a Plugin */
  async updatePlugin<T = Models.Plugin>(parameters: Parameters.UpdatePlugin, callback: Callback<T>): Promise<void>;
  /**
   * Update a Plugin */
  async updatePlugin<T = Models.Plugin>(parameters: Parameters.UpdatePlugin, callback?: never): Promise<T>;
  async updatePlugin<T = Models.Plugin>(parameters: Parameters.UpdatePlugin, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/plugins/${parameters.id}/`,
      method: 'PUT',
    };

    return this.client.sendRequest(config, callback, { methodName: 'updatePlugin' });
  }

  /**
   * Create a new listing for a given locale for your Power-Up */
  async createPluginListing<T = Models.PluginListing>(parameters: Parameters.CreatePluginListing, callback: Callback<T>): Promise<void>;
  /**
   * Create a new listing for a given locale for your Power-Up */
  async createPluginListing<T = Models.PluginListing>(parameters: Parameters.CreatePluginListing, callback?: never): Promise<T>;
  async createPluginListing<T = Models.PluginListing>(parameters: Parameters.CreatePluginListing, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/plugins/${parameters.idPlugin}/listing`,
      method: 'POST',
      data: {
        description: parameters.description,
        locale: parameters.locale,
        overview: parameters.overview,
        name: parameters.name,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createPluginListing' });
  }

  async getPluginComplianceMemberPrivacy<T = unknown>(parameters: Parameters.GetPluginComplianceMemberPrivacy, callback: Callback<T>): Promise<void>;
  async getPluginComplianceMemberPrivacy<T = unknown>(parameters: Parameters.GetPluginComplianceMemberPrivacy, callback?: never): Promise<T>;
  async getPluginComplianceMemberPrivacy<T = unknown>(parameters: Parameters.GetPluginComplianceMemberPrivacy, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/plugins/${parameters.id}/compliance/memberPrivacy`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getPluginComplianceMemberPrivacy' });
  }

  /**
   * Update an existing listing for your Power-Up */
  async updatePluginListing<T = Models.PluginListing>(parameters: Parameters.UpdatePluginListing, callback: Callback<T>): Promise<void>;
  /**
   * Update an existing listing for your Power-Up */
  async updatePluginListing<T = Models.PluginListing>(parameters: Parameters.UpdatePluginListing, callback?: never): Promise<T>;
  async updatePluginListing<T = Models.PluginListing>(parameters: Parameters.UpdatePluginListing, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/plugins/${parameters.idPlugin}/listings/${parameters.idListing}`,
      method: 'PUT',
      data: {
        description: parameters.description,
        locale: parameters.locale,
        overview: parameters.overview,
        name: parameters.name,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updatePluginListing' });
  }
}
