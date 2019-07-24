import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Notifications {
  private readonly prefix = 'notifications';

  constructor(private readonly client: TrelloClient) { }

  public async getNotification(
    options: {
      id: string;
      board?: boolean;
      boardFields?: string[];
      card?: boolean;
      cardFields?: string[];
      display?: boolean;
      entities?: boolean;
      fields?: string[];
      list?: boolean;
      member?: boolean;
      memberFields?: string[];
      memberCreator?: boolean;
      memberCreatorFields?: string[];
      organization?: boolean;
      organizationFields?: string[];
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET',
      params: {
        board: options.board,
        board_fields: options.boardFields && options.boardFields.join(','),
        card: options.card,
        card_fields: options.cardFields && options.cardFields.join(','),
        display: options.display,
        entities: options.entities,
        fields: options.fields && options.fields.join(','),
        list: options.list,
        member: options.member,
        member_fields: options.memberFields && options.memberFields.join(','),
        memberCreator: options.memberCreator,
        memberCreator_fields: options.memberCreatorFields && options.memberCreatorFields.join(','),
        organization: options.organization,
        organization_fields: options.organizationFields && options.organizationFields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getField(
    options: {
      id: string;
      field: string;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, options.field),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getBoard(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
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
    callback: (err: any, data: any) => void
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

  public async getList(
    options: {
      id: string;
      fields?: string[];
    },
    callback: (err: any, data: any) => void
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
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'member'),
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
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'memberCreator'),
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
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'organization'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',')
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateReadStatus(
    options: {
      id: string;
      unread?: boolean;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        unread: options.unread
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateUnreadStatus(
    options: {
      id: string;
      value?: boolean;
    },
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'unread'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async markAllAsRead(
    callback: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, 'all', 'read'),
      method: 'POST'
    };

    return this.client.sendRequest(opts, callback);
  }
}
