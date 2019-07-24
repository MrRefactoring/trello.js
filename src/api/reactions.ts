import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';

export class Reactions {
  private prefix = 'actions';

  constructor(private readonly client: TrelloClient) { }

  public async getEmoji(
    options?: {
      locale?: string;
      spriteSheets?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    options = options || {};

    const opts: AxiosRequestConfig = {
      url: joinUrl('emoji'),
      method: 'GET',
      params: {
        locale: options.locale,
        spritesheets: options.spriteSheets
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getReactions(
    options: {
      idAction: string;
      member?: boolean;
      emoji?: boolean;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.idAction, 'reactions'),
      method: 'GET',
      params: {
        member: options.member,
        emoji: options.emoji
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getReaction(
    options: {
      idAction: string;
      member?: boolean;
      emoji?: boolean;
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.idAction, 'reactions', options.id),
      method: 'GET',
      params: {
        member: options.member,
        emoji: options.emoji
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async getReactionsSummary(
    options: {
      idAction: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.idAction, 'reactionsSummary'),
      method: 'GET'
    };

    return this.client.sendRequest(opts, callback);
  }

  public async addReaction(
    options: {
      idAction: string;
      shortName?: string;
      skinVariation?: string;
      native?: string;
      unified?: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.idAction, 'reactions'),
      method: 'POST',
      data: {
        shortName: options.shortName,
        skinVariation: options.skinVariation,
        native: options.native,
        unified: options.unified
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async deleteReaction(
    options: {
      idAction: string;
      id: string;
    },
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, options.idAction, 'reactions', options.id),
      method: 'DELETE'
    };

    return this.client.sendRequest(opts, callback);
  }
}
