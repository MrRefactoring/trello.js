import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';
import {
  TypesOptions as Options,
  TypesResponses as Responses
} from '../models';

export class Types {
  constructor(private readonly client: TrelloClient) { }

  public async getType(
    options: Options.IType,
    callback: (err: any, data: any) => void
  ): Promise<Responses.IType> {
    const opts: AxiosRequestConfig = {
      url: joinUrl('types', options.name),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }
}
