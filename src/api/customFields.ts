import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class CustomFields {
  constructor(private client: Client) {
  }

  /**
   * Create a new Custom Field on a board. */
  async createCustomField<T = Models.CustomField>(parameters?: Parameters.CreateCustomField, callback?: Callback<T>): Promise<void>;
  /**
   * Create a new Custom Field on a board. */
  async createCustomField<T = Models.CustomField>(parameters?: Parameters.CreateCustomField, callback?: never): Promise<T>;
  async createCustomField<T = Models.CustomField>(parameters?: Parameters.CreateCustomField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/customFields',
      method: 'POST',
      data: {
        idModel: parameters?.idModel,
        modelType: parameters?.modelType,
        name: parameters?.name,
        type: parameters?.type,
        options: parameters?.options,
        pos: parameters?.pos,
        display_cardFront: parameters?.displayCardFront || parameters?.display?.cardFront,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'createCustomField' });
  }

  async getCustomField<T = Models.CustomField>(parameters: Parameters.GetCustomField, callback: Callback<T>): Promise<void>;
  async getCustomField<T = Models.CustomField>(parameters: Parameters.GetCustomField, callback?: never): Promise<T>;
  async getCustomField<T = Models.CustomField>(parameters: Parameters.GetCustomField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/customFields/${parameters.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCustomField' });
  }

  /**
   * Update a Custom Field definition. */
  async updateCustomField<T = Models.CustomField>(parameters: Parameters.UpdateCustomField, callback: Callback<T>): Promise<void>;
  /**
   * Update a Custom Field definition. */
  async updateCustomField<T = Models.CustomField>(parameters: Parameters.UpdateCustomField, callback?: never): Promise<T>;
  async updateCustomField<T = Models.CustomField>(parameters: Parameters.UpdateCustomField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/customFields/${parameters.id}`,
      method: 'PUT',
      data: {
        name: parameters.name,
        pos: parameters.pos,
        'display/cardFront': parameters.dispalyCardFront || parameters.display?.cardFront,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateCustomField' });
  }

  /**
   * Delete a Custom Field from a board. */
  async deleteCustomField<T = unknown>(parameters: Parameters.DeleteCustomField, callback: Callback<T>): Promise<void>;
  /**
   * Delete a Custom Field from a board. */
  async deleteCustomField<T = unknown>(parameters: Parameters.DeleteCustomField, callback?: never): Promise<T>;
  async deleteCustomField<T = unknown>(parameters: Parameters.DeleteCustomField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/customFields/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCustomField' });
  }

  /**
   * Get the options of a drop down Custom Field */
  async getCustomFieldOptions<T = unknown>(parameters: Parameters.GetCustomFieldOptions, callback: Callback<T>): Promise<void>;
  /**
   * Get the options of a drop down Custom Field */
  async getCustomFieldOptions<T = unknown>(parameters: Parameters.GetCustomFieldOptions, callback?: never): Promise<T>;
  async getCustomFieldOptions<T = unknown>(parameters: Parameters.GetCustomFieldOptions, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/customFields/${parameters.id}/options`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCustomFieldOptions' });
  }

  /**
   * Add an option to a dropdown Custom Field */
  async addCustomFieldOption<T = unknown>(parameters: Parameters.AddCustomFieldOption, callback: Callback<T>): Promise<void>;
  /**
   * Add an option to a dropdown Custom Field */
  async addCustomFieldOption<T = unknown>(parameters: Parameters.AddCustomFieldOption, callback?: never): Promise<T>;
  async addCustomFieldOption<T = unknown>(parameters: Parameters.AddCustomFieldOption, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/customFields/${parameters.id}/options`,
      method: 'POST',
    };

    return this.client.sendRequest(config, callback, { methodName: 'addCustomFieldOption' });
  }

  /**
   * Retrieve a specific, existing Option on a given dropdown-type Custom Field */
  async getCustomFieldsOption<T = unknown>(parameters: Parameters.GetCustomFieldsOption, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve a specific, existing Option on a given dropdown-type Custom Field */
  async getCustomFieldsOption<T = unknown>(parameters: Parameters.GetCustomFieldsOption, callback?: never): Promise<T>;
  async getCustomFieldsOption<T = unknown>(parameters: Parameters.GetCustomFieldsOption, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getCustomFieldsOption' });
  }

  /**
   * Delete an option from a Custom Field dropdown. */
  async deleteCustomFieldsOption<T = unknown>(parameters: Parameters.DeleteCustomFieldsOption, callback: Callback<T>): Promise<void>;
  /**
   * Delete an option from a Custom Field dropdown. */
  async deleteCustomFieldsOption<T = unknown>(parameters: Parameters.DeleteCustomFieldsOption, callback?: never): Promise<T>;
  async deleteCustomFieldsOption<T = unknown>(parameters: Parameters.DeleteCustomFieldsOption, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteCustomFieldsOption' });
  }
}
