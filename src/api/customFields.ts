import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class CustomFields {
  constructor(private client: Client) { }

  /**
   * Create a new Custom Field on a board. */
  async postCustomfields<T = Models.CustomField>(parameters?: Parameters.PostCustomfields, callback?: Callback<T>): Promise<void>;
  /**
   * Create a new Custom Field on a board. */
  async postCustomfields<T = Models.CustomField>(parameters?: Parameters.PostCustomfields, callback?: undefined): Promise<T>;
  async postCustomfields<T = Models.CustomField>(parameters?: Parameters.PostCustomfields, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/customFields',
      method: 'POST',
      data: {
        idModel: parameters?.idModel,
        modelType: parameters?.modelType,
        name: parameters?.name,
        type: parameters?.type,
        options: parameters?.options,
        pos: parameters?.pos,
        display_cardFront: parameters?.display_cardFront,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postCustomfields' });
  }

  async getCustomfieldsId<T = Models.CustomField>(parameters: Parameters.GetCustomfieldsId, callback: Callback<T>): Promise<void>;
  async getCustomfieldsId<T = Models.CustomField>(parameters: Parameters.GetCustomfieldsId, callback?: undefined): Promise<T>;
  async getCustomfieldsId<T = Models.CustomField>(parameters: Parameters.GetCustomfieldsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/customFields/${parameters.id}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getCustomfieldsId' });
  }

  /**
   * Update a Custom Field definition. */
  async putCustomfieldsId<T = Models.CustomField>(parameters: Parameters.PutCustomfieldsId, callback: Callback<T>): Promise<void>;
  /**
   * Update a Custom Field definition. */
  async putCustomfieldsId<T = Models.CustomField>(parameters: Parameters.PutCustomfieldsId, callback?: undefined): Promise<T>;
  async putCustomfieldsId<T = Models.CustomField>(parameters: Parameters.PutCustomfieldsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/customFields/${parameters.id}`,
      method: 'PUT',
      data: {
        name: parameters.name,
        pos: parameters.pos,
        'display/cardFront': parameters.cardFront,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putCustomfieldsId' });
  }

  /**
   * Delete a Custom Field from a board. */
  async deleteCustomfieldsId<T = any>(parameters: Parameters.DeleteCustomfieldsId, callback: Callback<T>): Promise<void>;
  /**
   * Delete a Custom Field from a board. */
  async deleteCustomfieldsId<T = any>(parameters: Parameters.DeleteCustomfieldsId, callback?: undefined): Promise<T>;
  async deleteCustomfieldsId<T = any>(parameters: Parameters.DeleteCustomfieldsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/customFields/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteCustomfieldsId' });
  }

  /**
   * Get the options of a drop down Custom Field */
  async postCustomfieldsIdOptions<T = any>(parameters: Parameters.PostCustomfieldsIdOptions, callback: Callback<T>): Promise<void>;
  /**
   * Get the options of a drop down Custom Field */
  async postCustomfieldsIdOptions<T = any>(parameters: Parameters.PostCustomfieldsIdOptions, callback?: undefined): Promise<T>;
  async postCustomfieldsIdOptions<T = any>(parameters: Parameters.PostCustomfieldsIdOptions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/customFields/${parameters.id}/options`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postCustomfieldsIdOptions' });
  }

  /**
   * Add an option to a dropdown Custom Field */
  async getCustomfieldsIdOptions<T = any>(parameters: Parameters.GetCustomfieldsIdOptions, callback: Callback<T>): Promise<void>;
  /**
   * Add an option to a dropdown Custom Field */
  async getCustomfieldsIdOptions<T = any>(parameters: Parameters.GetCustomfieldsIdOptions, callback?: undefined): Promise<T>;
  async getCustomfieldsIdOptions<T = any>(parameters: Parameters.GetCustomfieldsIdOptions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/customFields/${parameters.id}/options`,
      method: 'POST',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getCustomfieldsIdOptions' });
  }

  /**
   * Retrieve a specific, existing Option on a given dropdown-type Custom Field */
  async getCustomfieldsOptionsIdcustomfieldoption<T = any>(parameters: Parameters.GetCustomfieldsOptionsIdcustomfieldoption, callback: Callback<T>): Promise<void>;
  /**
   * Retrieve a specific, existing Option on a given dropdown-type Custom Field */
  async getCustomfieldsOptionsIdcustomfieldoption<T = any>(parameters: Parameters.GetCustomfieldsOptionsIdcustomfieldoption, callback?: undefined): Promise<T>;
  async getCustomfieldsOptionsIdcustomfieldoption<T = any>(parameters: Parameters.GetCustomfieldsOptionsIdcustomfieldoption, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getCustomfieldsOptionsIdcustomfieldoption' });
  }

  /**
   * Delete an option from a Custom Field dropdown. */
  async deleteCustomfieldsOptionsIdcustomfieldoption<T = any>(parameters: Parameters.DeleteCustomfieldsOptionsIdcustomfieldoption, callback: Callback<T>): Promise<void>;
  /**
   * Delete an option from a Custom Field dropdown. */
  async deleteCustomfieldsOptionsIdcustomfieldoption<T = any>(parameters: Parameters.DeleteCustomfieldsOptionsIdcustomfieldoption, callback?: undefined): Promise<T>;
  async deleteCustomfieldsOptionsIdcustomfieldoption<T = any>(parameters: Parameters.DeleteCustomfieldsOptionsIdcustomfieldoption, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteCustomfieldsOptionsIdcustomfieldoption' });
  }
}
