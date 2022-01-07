import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Search {
  constructor(private client: Client) {}

  /** Find what you're looking for in Trello */
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(
    parameters: Parameters.GetSearch,
    callback: Callback<T>
  ): Promise<void>;
  /** Find what you're looking for in Trello */
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(
    parameters: Parameters.GetSearch,
    callback?: never
  ): Promise<T>;
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(
    parameters: Parameters.GetSearch,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: '/search',
      method: 'GET',
      params: {
        query: parameters.query,
        idBoards: parameters.idBoards,
        idOrganizations: parameters.idOrganizations,
        idCards: parameters.idCards,
        modelTypes: parameters.modelTypes,
        board_fields: parameters.board.fields,
        boards_limit: parameters.boards.limit,
        board_organization: parameters.board.organization,
        card_fields: parameters.card.fields,
        cards_limit: parameters.cards.limit,
        cards_page: parameters.cards.page,
        card_board: parameters.card.board,
        card_list: parameters.card.list,
        card_members: parameters.card.members,
        card_stickers: parameters.card.stickers,
        card_attachments: parameters.card.attachments,
        organization_fields: parameters.organization.fields,
        organizations_limit: parameters.organizations.limit,
        member_fields: parameters.member.fields,
        members_limit: parameters.members.limit,
        partial: parameters.partial,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Search for Trello members. */
  async getSearchMembers<T = Models.Member[]>(
    parameters: Parameters.GetSearchMembers,
    callback: Callback<T>
  ): Promise<void>;
  /** Search for Trello members. */
  async getSearchMembers<T = Models.Member[]>(parameters: Parameters.GetSearchMembers, callback?: never): Promise<T>;
  async getSearchMembers<T = Models.Member[]>(
    parameters: Parameters.GetSearchMembers,
    callback?: Callback<T>,
  ): Promise<void | T> {
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

    return this.client.sendRequest(config, callback);
  }
}
