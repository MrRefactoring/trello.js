import { ChecklistSchema, type Checklist } from '#/models/checklist';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { BoardSchema, type Board } from '#/models/board';
import { CardSchema, type Card } from '#/models/card';
import { CheckItemSchema, type CheckItem } from '#/models/checkItem';
import { type CreateChecklist } from '#/parameters/createChecklist';
import { type GetChecklist } from '#/parameters/getChecklist';
import { type UpdateChecklist } from '#/parameters/updateChecklist';
import { type DeleteChecklist } from '#/parameters/deleteChecklist';
import { type GetChecklistField } from '#/parameters/getChecklistField';
import { type UpdateChecklistField } from '#/parameters/updateChecklistField';
import { type GetChecklistBoard } from '#/parameters/getChecklistBoard';
import { type GetChecklistCards } from '#/parameters/getChecklistCards';
import { type GetChecklistItems } from '#/parameters/getChecklistItems';
import { type CreateChecklistItem } from '#/parameters/createChecklistItem';
import { type GetChecklistItem } from '#/parameters/getChecklistItem';
import { type DeleteChecklistItem } from '#/parameters/deleteChecklistItem';
import { type Client, type SendRequestOptions } from '#/core';
import { z } from 'zod';

export async function createChecklist(client: Client, parameters: CreateChecklist): Promise<Checklist> {
  const config: SendRequestOptions<Checklist> = {
    url: '/checklists',
    method: 'POST',
    searchParams: {
      idCard: parameters.idCard,
      name: parameters.name,
      pos: parameters.pos,
      idChecklistSource: parameters.idChecklistSource,
    },
    schema: ChecklistSchema,
  };

  return await client.sendRequest(config);
}

export async function getChecklist(client: Client, parameters: GetChecklist): Promise<Checklist> {
  const config: SendRequestOptions<Checklist> = {
    url: `/checklists/${parameters.id}`,
    method: 'GET',
    searchParams: {
      cards: parameters.cards,
      checkItems: parameters.checkItems,
      checkItem_fields: parameters.checkItemFields,
      fields: parameters.fields,
    },
    schema: ChecklistSchema,
  };

  return await client.sendRequest(config);
}

/** Update an existing checklist. */
export async function updateChecklist(client: Client, parameters: UpdateChecklist): Promise<Checklist> {
  const config: SendRequestOptions<Checklist> = {
    url: `/checklists/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      pos: parameters.pos,
    },
    schema: ChecklistSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a checklist */
export async function deleteChecklist(client: Client, parameters: DeleteChecklist): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/checklists/${parameters.id}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

export async function getChecklistField<T = unknown>(
  client: Client,
  parameters: GetChecklistField,
): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/checklists/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
  };

  return await client.sendRequest(config);
}

export async function updateChecklistField(client: Client, parameters: UpdateChecklistField): Promise<Checklist> {
  const config: SendRequestOptions<Checklist> = {
    url: `/checklists/${parameters.id}/${parameters.field}`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: ChecklistSchema,
  };

  return await client.sendRequest(config);
}

export async function getChecklistBoard(client: Client, parameters: GetChecklistBoard): Promise<Board> {
  const config: SendRequestOptions<Board> = {
    url: `/checklists/${parameters.id}/board`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: BoardSchema,
  };

  return await client.sendRequest(config);
}

export async function getChecklistCards(client: Client, parameters: GetChecklistCards): Promise<Card[]> {
  const config: SendRequestOptions<Card[]> = {
    url: `/checklists/${parameters.id}/cards`,
    method: 'GET',
    schema: z.array(CardSchema),
  };

  return await client.sendRequest(config);
}

export async function getChecklistItems(client: Client, parameters: GetChecklistItems): Promise<CheckItem[]> {
  const config: SendRequestOptions<CheckItem[]> = {
    url: `/checklists/${parameters.id}/checkItems`,
    method: 'GET',
    searchParams: {
      filter: parameters.filter,
      fields: parameters.fields,
    },
    schema: z.array(CheckItemSchema),
  };

  return await client.sendRequest(config);
}

export async function createChecklistItem(client: Client, parameters: CreateChecklistItem): Promise<CheckItem> {
  const config: SendRequestOptions<CheckItem> = {
    url: `/checklists/${parameters.id}/checkItems`,
    method: 'POST',
    searchParams: {
      name: parameters.name,
      pos: parameters.pos,
      checked: parameters.checked,
      due: parameters.due,
      dueReminder: parameters.dueReminder,
      idMember: parameters.idMember,
    },
    schema: CheckItemSchema,
  };

  return await client.sendRequest(config);
}

export async function getChecklistItem(client: Client, parameters: GetChecklistItem): Promise<CheckItem> {
  const config: SendRequestOptions<CheckItem> = {
    url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: CheckItemSchema,
  };

  return await client.sendRequest(config);
}

/** Remove an item from a checklist */
export async function deleteChecklistItem(client: Client, parameters: DeleteChecklistItem): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}
