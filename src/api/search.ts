import { SearchResultSchema, type SearchResult } from '#/models/searchResult';
import { MemberSchema, type Member } from '#/models/member';
import { type Search } from '#/parameters/search';
import { type SearchMembers } from '#/parameters/searchMembers';
import { type Client, type SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Find what you're looking for in Trello */
export async function search(client: Client, parameters: Search): Promise<SearchResult> {
  const config: SendRequestOptions<SearchResult> = {
    url: '/search',
    method: 'GET',
    searchParams: {
      query: parameters.query,
      idBoards: parameters.idBoards,
      idOrganizations: parameters.idOrganizations,
      idCards: parameters.idCards,
      modelTypes: parameters.modelTypes,
      board_fields: parameters.boardFields,
      boards_limit: parameters.boardsLimit,
      board_organization: parameters.boardOrganization,
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
    schema: SearchResultSchema,
  };

  return await client.sendRequest(config);
}

/** Search for Trello members. */
export async function searchMembers(client: Client, parameters: SearchMembers): Promise<Member[]> {
  const config: SendRequestOptions<Member[]> = {
    url: '/search/members/',
    method: 'GET',
    searchParams: {
      query: parameters.query,
      limit: parameters.limit,
      idBoard: parameters.idBoard,
      idOrganization: parameters.idOrganization,
      onlyOrgMembers: parameters.onlyOrgMembers,
    },
    schema: z.array(MemberSchema),
  };

  return await client.sendRequest(config);
}
