import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class CheckLists {
  private readonly prefix = 'checklists';

  constructor(private readonly client: TrelloClient) { }

  public async getCheckList(
    options: {
      id: string;
      cards?: string;
      checkItems?: string;
      checkItemFields?: string[];
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'GET',
      params: {
        cards: options.cards,
        checkItems: options.checkItems,
        checkItem_fields: options.checkItemFields && options.checkItemFields.join(',') || 'all',
        fields: options.fields && options.fields.join(',') || 'all'
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getField(
    options: {
      id: string;
      field: string;
    },
    callback?: (err: any, data: any) => void
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
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'board'),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',') || 'all'
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCards(
    options: {
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'cards'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCheckItems(
    options: {
      id: string;
      filter: string;
      fields: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItems'),
      method: 'GET',
      params: {
        filter: options.filter,
        fields: options.fields && options.fields || 'all'
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getCheckItem(
    options: {
      id: string;
      idCheckItem: string;
      fields?: string[];
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItems', options.idCheckItem),
      method: 'GET',
      params: {
        fields: options.fields && options.fields.join(',') || 'all'
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateCheckList(
    options: {
      id: string;
      name?: string;
      pos?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id),
      method: 'PUT',
      params: {
        name: options.name,
        pos: options.pos
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async updateName(
    options: {
      id: string;
      value: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'name'),
      method: 'PUT',
      params: {
        value: options.value
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addCheckList(
    options: {
      idCard: string;
      name?: string;
      pos?: string;
      idChecklistSource?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'POST',
      params: {
        idCard: options.idCard,
        name: options.name,
        pos: options.pos,
        idChecklistSource: options.idChecklistSource
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addCheckItems(
    options: {
      id: string;
      name: string;
      pos?: string;
      checked: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItems'),
      method: 'POST',
      params: {
        name: options.name,
        pos: options.pos,
        checked: options.checked
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteCheckList(
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

  public async deleteCheckItem(
    options: {
      id: string;
      idCheckItem: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.id, 'checkItems' + options.idCheckItem),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
