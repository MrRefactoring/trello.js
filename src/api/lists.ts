import { TrelloListSchema, type TrelloList } from '#/models/trelloList';
import { ActionSchema, type Action } from '#/models/action';
import { BoardSchema, type Board } from '#/models/board';
import { CardSchema, type Card } from '#/models/card';
import type { GetList } from '#/parameters/getList';
import type { UpdateList } from '#/parameters/updateList';
import type { CreateList } from '#/parameters/createList';
import type { ArchiveAllListCards } from '#/parameters/archiveAllListCards';
import type { MoveAllListCards } from '#/parameters/moveAllListCards';
import type { ArchiveList } from '#/parameters/archiveList';
import type { MoveListToBoard } from '#/parameters/moveListToBoard';
import type { UpdateListField } from '#/parameters/updateListField';
import type { GetListActions } from '#/parameters/getListActions';
import type { GetListBoard } from '#/parameters/getListBoard';
import type { GetListCards } from '#/parameters/getListCards';
import type { Client, SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Get information about a List */
export async function getList(client: Client, parameters: GetList): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/lists/${parameters.id}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Update the properties of a List */
export async function updateList(client: Client, parameters: UpdateList): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/lists/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      closed: parameters.closed,
      idBoard: parameters.idBoard,
      pos: parameters.pos,
      subscribed: parameters.subscribed,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Create a new List on a Board */
export async function createList(client: Client, parameters: CreateList): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: '/lists',
    method: 'POST',
    searchParams: {
      name: parameters.name,
      idBoard: parameters.idBoard,
      idListSource: parameters.idListSource,
      pos: parameters.pos,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Archive all cards in a list */
export async function archiveAllListCards(client: Client, parameters: ArchiveAllListCards): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/lists/${parameters.id}/archiveAllCards`,
    method: 'POST',
  };

  return await client.sendRequest(config);
}

/** Move all Cards in a List */
export async function moveAllListCards(client: Client, parameters: MoveAllListCards): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/lists/${parameters.id}/moveAllCards`,
    method: 'POST',
    searchParams: {
      idBoard: parameters.idBoard,
      idList: parameters.idList,
    },
  };

  return await client.sendRequest(config);
}

/** Archive or unarchive a list */
export async function archiveList(client: Client, parameters: ArchiveList): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/lists/${parameters.id}/closed`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Move a List to a different Board */
export async function moveListToBoard(client: Client, parameters: MoveListToBoard): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/lists/${parameters.id}/idBoard`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Rename a list */
export async function updateListField(client: Client, parameters: UpdateListField): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/lists/${parameters.id}/${parameters.field}`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: TrelloListSchema,
  };

  return await client.sendRequest(config);
}

/** Get the Actions on a List */
export async function getListActions(client: Client, parameters: GetListActions): Promise<Action[]> {
  const config: SendRequestOptions<Action[]> = {
    url: `/lists/${parameters.id}/actions`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      fields: parameters.fields,
      format: parameters.format,
      idModels: parameters.idModels,
      limit: parameters.limit,
      member: parameters.member,
      member_fields: parameters.memberFields,
      memberCreator: parameters.memberCreator,
      memberCreator_fields: parameters.memberCreatorFields,
      page: parameters.page,
      reactions: parameters.reactions,
      before: parameters.before,
      since: parameters.since,
    },
    schema: z.array(ActionSchema),
  };

  return await client.sendRequest(config);
}

/** Get the board a list is on */
export async function getListBoard(client: Client, parameters: GetListBoard): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/lists/${parameters.id}/board`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

/** List the cards in a list */
export async function getListCards(client: Client, parameters: GetListCards): Promise<Card[]> {
  const config: SendRequestOptions<Card[]> = {
    url: `/lists/${parameters.id}/cards`,
    method: 'GET',
    schema: z.array(CardSchema),
  };

  return await client.sendRequest(config);
}
