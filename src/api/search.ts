import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Search {
  constructor(private client: Client) { }
  /**
     * Find what you're looking for in Trello */
  async getSearch<T = any>(parameters: Parameters.GetSearch, callback: Callback<T>): Promise<void>;
  /**
     * Find what you're looking for in Trello */
  async getSearch<T = any>(parameters: Parameters.GetSearch, callback?: undefined): Promise<T>;
  async getSearch<T = any>(parameters: Parameters.GetSearch, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/search',
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        query: parameters.query,
        idBoards: parameters.idBoards,
        idOrganizations: parameters.idOrganizations,
        idCards: parameters.idCards,
        modelTypes: parameters.modelTypes,
        board_fields: parameters.board_fields,
        boards_limit: parameters.boards_limit,
        card_fields: parameters.card_fields,
        cards_limit: parameters.cards_limit,
        cards_page: parameters.cards_page,
        card_board: parameters.card_board,
        card_list: parameters.card_list,
        card_members: parameters.card_members,
        card_stickers: parameters.card_stickers,
        card_attachments: parameters.card_attachments,
        organization_fields: parameters.organization_fields,
        organizations_limit: parameters.organizations_limit,
        member_fields: parameters.member_fields,
        members_limit: parameters.members_limit,
        partial: parameters.partial,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getSearch' });
  }
  /**
     * Search for Trello members. */
  async getSearchMembers<T = any>(parameters: Parameters.GetSearchMembers, callback: Callback<T>): Promise<void>;
  /**
     * Search for Trello members. */
  async getSearchMembers<T = any>(parameters: Parameters.GetSearchMembers, callback?: undefined): Promise<T>;
  async getSearchMembers<T = any>(parameters: Parameters.GetSearchMembers, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/search/members/',
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        query: parameters.query,
        limit: parameters.limit,
        idBoard: parameters.idBoard,
        idOrganization: parameters.idOrganization,
        onlyOrgMembers: parameters.onlyOrgMembers,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getSearchMembers' });
  }
}
