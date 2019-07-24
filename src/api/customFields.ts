import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class CustomFields {
  private readonly prefix = 'customFields';

  constructor(private readonly client: TrelloClient) { }

  public async getCustomField(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateCustomField(
    options: {
      id: string;
      name?: string;
      pos?: number | string;
      displayCardFront?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      data: {
        name: options.name,
        pos: options.pos,
        'display/cardFront': options.displayCardFront
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addCustomField(
    options: {
      idModel: string;
      modelType: string;
      name: string;
      type: string;
      options?: string;
      pos: string | number;
      displayCardFront?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'POST',
      data: {
        idModel: options.idModel,
        modelType: options.modelType,
        name: options.name,
        type: options.type,
        options: options.options,
        pos: options.pos,
        display_cardFront: options.displayCardFront
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteCustomField(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getOptions(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'options'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getOption(
    options: {
      id: string;
      idCustomFieldOption: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'options', options.idCustomFieldOption),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addOption(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'options'),
      method: 'POST'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteOptions(
    options: {
      id: string;
      idCustomFieldOption: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'options', options.idCustomFieldOption),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateCardCustomField(
    options: {
      idCard: string;
      idCustomField: string;
      value: {
        [key: string]: any;
        number?: string | number;
      }
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl('card', options.idCard, 'customField', options.idCustomField, 'item'),
      method: 'PUT',
      data: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoardCustomFields(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl('boards', options.id, 'customFields'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }
}
