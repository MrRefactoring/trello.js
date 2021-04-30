import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Search {
  constructor(private client: Client) {
  }

  /**
   * Find what you're looking for in Trello */
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(parameters: Parameters.GetSearch, callback: Callback<T>): Promise<void>;
  /**
   * Find what you're looking for in Trello */
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(parameters: Parameters.GetSearch, callback?: never): Promise<T>;
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(parameters: Parameters.GetSearch, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/search',
      method: 'GET',
      params: {
        query: parameters.query,
        idBoards: parameters.idBoards,
        idOrganizations: parameters.idOrganizations,
        idCards: parameters.idCards,
        modelTypes: parameters.modelTypes,
        board_fields: parameters.boardFields,
        boards_limit: parameters.boardsLimit,
        card_fields: parameters.cardFields,
        cards_limit: parameters.cardsLimit,
        cards_page: parameters.cardsPage,
        card_board: parameters.cardBoard,
        card_list: parameters.cardList,
        card_members: parameters.cardMembers,
        card_stickers: parameters.cardStickers,
        card_attachments: parameters.cardAttachments,
        organization_fields: parameters.organizationFields,
        organizations_limit: parameters.organizationsLimit,
        member_fields: parameters.memberFields,
        members_limit: parameters.membersLimit,
        partial: parameters.partial,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getSearch' });
  }

  /**
   * Search for Trello members. */
  async getSearchMembers<T = Array<Models.Member>>(parameters: Parameters.GetSearchMembers, callback: Callback<T>): Promise<void>;
  /**
   * Search for Trello members. */
  async getSearchMembers<T = Array<Models.Member>>(parameters: Parameters.GetSearchMembers, callback?: never): Promise<T>;
  async getSearchMembers<T = Array<Models.Member>>(parameters: Parameters.GetSearchMembers, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/search/members/',
      method: 'GET',
      params: {
        query: parameters.query,
        limit: parameters.limit,
        idBoard: parameters.idBoard,
        idOrganization: parameters.idOrganization,
        onlyOrgMembers: parameters.onlyOrgMembers,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getSearchMembers' });
  }
}
