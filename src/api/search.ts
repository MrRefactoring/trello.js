import { AxiosRequestConfig } from 'axios';
import { TrelloClient } from '..';
import { joinUrl } from '../helpers';
import {
  SearchOptions as Options,
  SearchResponses as Responses
} from '../models';

export class Search {
  private prefix = 'search';

  constructor(private readonly client: TrelloClient) { }

  public async search(
    options: Options.ISearch,
    callback?: (err: any, data: any) => void
  ): Promise<Responses.ISearch> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix),
      method: 'GET',
      params: {
        query: options.query,
        idBoards: options.idBoards,
        idOrganizations: options.idOrganizations,
        idCards: options.idCards,
        modelTypes: options.modelTypes,
        board_fields: options.boardFields && options.boardFields.join(','),
        boards_limit: options.boardsLimit,
        card_fields: options.cardFields && options.cardFields.join(','),
        cards_limit: options.cardsLimit,
        cards_page: options.cardsPage,
        card_board: options.cardBoard,
        card_list: options.cardList,
        card_members: options.cardMembers,
        card_stickers: options.cardStickers,
        card_attachments: options.cardAttachments,
        organization_fields: options.organizationFields,
        organizations_limit: options.organizationsLimit,
        member_fields: options.memberFields,
        members_limit: options.membersLimit,
        partial: options.partial
      }
    };

    return this.client.sendRequest(opts, callback);
  }

  public async searchMembers(
    options: Options.ISearchMembers,
    callback?: (err: any, data: any) => void
  ): Promise<any> {
    const opts: AxiosRequestConfig = {
      url: joinUrl(this.prefix, 'members'),
      method: 'GET',
      params: {
        query: options.query,
        limit: options.limit,
        idBoard: options.idBoard,
        idOrganization: options.idOrganization,
        onlyOrgMembers: options.onlyOrgMembers
      }
    };

    return this.client.sendRequest(opts, callback);
  }
}
