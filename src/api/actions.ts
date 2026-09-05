import { ActionSchema, type Action } from '#/models/action';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { BoardSchema, type Board } from '#/models/board';
import { CardSchema, type Card } from '#/models/card';
import { TrelloListSchema, type TrelloList } from '#/models/trelloList';
import { MemberSchema, type Member } from '#/models/member';
import { OrganizationSchema, type Organization } from '#/models/organization';
import { ReactionSchema, type Reaction } from '#/models/reaction';
import { ReactionSummarySchema, type ReactionSummary } from '#/models/reactionSummary';
import type { GetAction } from '#/parameters/getAction';
import type { UpdateAction } from '#/parameters/updateAction';
import type { DeleteAction } from '#/parameters/deleteAction';
import type { GetActionField } from '#/parameters/getActionField';
import type { GetActionBoard } from '#/parameters/getActionBoard';
import type { GetActionCard } from '#/parameters/getActionCard';
import type { GetActionList } from '#/parameters/getActionList';
import type { GetActionMember } from '#/parameters/getActionMember';
import type { GetActionCreator } from '#/parameters/getActionCreator';
import type { GetActionOrganization } from '#/parameters/getActionOrganization';
import type { UpdateActionText } from '#/parameters/updateActionText';
import type { GetActionReactions } from '#/parameters/getActionReactions';
import type { CreateActionReaction } from '#/parameters/createActionReaction';
import type { GetActionReaction } from '#/parameters/getActionReaction';
import type { DeleteActionReaction } from '#/parameters/deleteActionReaction';
import type { GetActionReactionSummary } from '#/parameters/getActionReactionSummary';
import type { Client, RequestOptions, SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Get an Action */
export async function getAction(client: Client, parameters: GetAction, options?: RequestOptions): Promise<Action> {
  const config: SendRequestOptions<Action> = {
    url: `/actions/${parameters.id}`,
    method: 'GET',
    searchParams: {
      display: parameters.display,
      entities: parameters.entities,
      fields: parameters.fields,
      member: parameters.member,
      member_fields: parameters.memberFields,
      memberCreator: parameters.memberCreator,
      memberCreator_fields: parameters.memberCreatorFields,
    },
    schema: ActionSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment. */
export async function updateAction(
  client: Client,
  parameters: UpdateAction,
  options?: RequestOptions,
): Promise<Action> {
  const config: SendRequestOptions<Action> = {
    url: `/actions/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      text: parameters.text,
    },
    schema: ActionSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Delete a specific action. Only comment actions can be deleted. */
export async function deleteAction(client: Client, parameters: DeleteAction, options?: RequestOptions): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/actions/${parameters.id}`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get a specific property of an action */
export async function getActionField<T = unknown>(
  client: Client,
  parameters: GetActionField,
  options?: RequestOptions,
): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/actions/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get the Board for an Action */
export async function getActionBoard(
  client: Client,
  parameters: GetActionBoard,
  options?: RequestOptions,
): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/actions/${parameters.id}/board`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: BoardSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get the card for an action */
export async function getActionCard(
  client: Client,
  parameters: GetActionCard,
  options?: RequestOptions,
): Promise<Card> {
  const config: SendRequestOptions<Card> = {
    url: `/actions/${parameters.id}/card`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: CardSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get the List for an Action */
export async function getActionList(
  client: Client,
  parameters: GetActionList,
  options?: RequestOptions,
): Promise<TrelloList> {
  const config: SendRequestOptions<TrelloList> = {
    url: `/actions/${parameters.id}/list`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: TrelloListSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Gets the member of an action (not the creator) */
export async function getActionMember(
  client: Client,
  parameters: GetActionMember,
  options?: RequestOptions,
): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/actions/${parameters.id}/member`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: MemberSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get the Member who created the Action */
export async function getActionCreator(
  client: Client,
  parameters: GetActionCreator,
  options?: RequestOptions,
): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/actions/${parameters.id}/memberCreator`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: MemberSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get the Organization of an Action */
export async function getActionOrganization(
  client: Client,
  parameters: GetActionOrganization,
  options?: RequestOptions,
): Promise<Organization> {
  const config: SendRequestOptions<Organization> = {
    url: `/actions/${parameters.id}/organization`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: OrganizationSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Update a comment action */
export async function updateActionText(
  client: Client,
  parameters: UpdateActionText,
  options?: RequestOptions,
): Promise<Action> {
  const config: SendRequestOptions<Action> = {
    url: `/actions/${parameters.id}/text`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: ActionSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** List reactions for an action */
export async function getActionReactions(
  client: Client,
  parameters: GetActionReactions,
  options?: RequestOptions,
): Promise<Reaction[]> {
  const config: SendRequestOptions<Reaction[]> = {
    url: `/actions/${parameters.idAction}/reactions`,
    method: 'GET',
    searchParams: {
      member: parameters.member,
      emoji: parameters.emoji,
    },
    schema: z.array(ReactionSchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Adds a new reaction to an action */
export async function createActionReaction(
  client: Client,
  parameters: CreateActionReaction,
  options?: RequestOptions,
): Promise<Reaction> {
  const config: SendRequestOptions<Reaction> = {
    url: `/actions/${parameters.idAction}/reactions`,
    method: 'POST',
    body: {
      shortName: parameters.shortName,
      skinVariation: parameters.skinVariation,
      native: parameters.native,
      unified: parameters.unified,
    },
    schema: ReactionSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Get information for a reaction */
export async function getActionReaction(
  client: Client,
  parameters: GetActionReaction,
  options?: RequestOptions,
): Promise<Reaction> {
  const config: SendRequestOptions<Reaction> = {
    url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
    method: 'GET',
    searchParams: {
      member: parameters.member,
      emoji: parameters.emoji,
    },
    schema: ReactionSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** Deletes a reaction */
export async function deleteActionReaction(
  client: Client,
  parameters: DeleteActionReaction,
  options?: RequestOptions,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
    method: 'DELETE',
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}

/** List a summary of all reactions for an action */
export async function getActionReactionSummary(
  client: Client,
  parameters: GetActionReactionSummary,
  options?: RequestOptions,
): Promise<ReactionSummary[]> {
  const config: SendRequestOptions<ReactionSummary[]> = {
    url: `/actions/${parameters.idAction}/reactionsSummary`,
    method: 'GET',
    schema: z.array(ReactionSummarySchema),
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}
