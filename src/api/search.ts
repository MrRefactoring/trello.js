import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Search {
  constructor(private client: Client) {}

  /** Find what you're looking for in Trello */
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(
    parameters: Parameters.GetSearch,
    callback: Callback<T>,
  ): Promise<void>;
  /** Find what you're looking for in Trello */
  async getSearch<T = Array<Models.Member | Models.Card | Models.Board | Models.Organization>>(
    parameters: Parameters.GetSearch,
    callback?: never,
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
        board_fields: parameters.boardFields ?? parameters.board?.fields,
        boards_limit: parameters.boardsLimit ?? parameters.boards?.limit,
        board_organization: parameters.board?.organization,
        card_fields: parameters.cardFields ?? parameters.card?.fields,
        cards_limit: parameters.cardsLimit ?? parameters.cards?.limit,
        cards_page: parameters.cardsPage ?? parameters.cards?.page,
        card_board: parameters.cardBoard ?? parameters.card?.board,
        card_list: parameters.cardList ?? parameters.card?.list,
        card_members: parameters.cardMembers ?? parameters.card?.members,
        card_stickers: parameters.cardStickers ?? parameters.card?.stickers,
        card_attachments: parameters.cardAttachments ?? parameters.card?.attachments,
        organization_fields: parameters.organizationFields ?? parameters.organization?.fields,
        organizations_limit: parameters.organizationsLimit ?? parameters.organizations?.limit,
        member_fields: parameters.memberFields ?? parameters.member?.fields,
        members_limit: parameters.membersLimit ?? parameters.members?.limit,
        partial: parameters.partial,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /** Search for Trello members. */
  async getSearchMembers<T = Models.Member[]>(
    parameters: Parameters.GetSearchMembers,
    callback: Callback<T>,
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
