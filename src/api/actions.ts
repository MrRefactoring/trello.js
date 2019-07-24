import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';
import { ActionOptions as Options } from '../models';

export class Actions {
  private prefix = 'actions';

  constructor(private readonly client: TrelloClient) { }

  public async getAction(
    options: Options.IGetAction,
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      params: {
        display: options.display,
        entities: options.entities,
        fields: options.fields && options.fields.join(','),
        member: options.member,
        member_fields: options.memberFields && options.memberFields.join(','),
        memberCreator: options.memberCreator,
        memberCreator_fields: options.memberCreatorFields && options.memberCreatorFields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getField(
    options: Options.IGetActionField,
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, options.field),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoard(
    options: Options.IGetActionBoard,
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'board'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCard(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'card'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getDisplay(
    options: { id: string },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'display'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getList(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'list'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMember(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'card'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getMemberCreator(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'card'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getOrganization(
    options: {
      id: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'card'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateComment(
    options: {
      id: string;
      text: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        text: options.text
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateActionText(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'text'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteAction(
    options: { id: string },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
