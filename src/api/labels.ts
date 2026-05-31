import { LabelSchema, type Label } from '#/models/label';
import type { GetLabel } from '#/parameters/getLabel';
import type { UpdateLabel } from '#/parameters/updateLabel';
import type { DeleteLabel } from '#/parameters/deleteLabel';
import type { UpdateLabelField } from '#/parameters/updateLabelField';
import type { CreateLabel } from '#/parameters/createLabel';
import type { Client, SendRequestOptions } from '#/core';

/** Get information about a single Label. */
export async function getLabel(client: Client, parameters: GetLabel): Promise<Label> {
  const config: SendRequestOptions<Label> = {
    url: `/labels/${parameters.id}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: LabelSchema,
  };

  return await client.sendRequest(config);
}

/** Update a label by ID. */
export async function updateLabel(client: Client, parameters: UpdateLabel): Promise<Label> {
  const config: SendRequestOptions<Label> = {
    url: `/labels/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      name: parameters.name,
      color: parameters.color,
    },
    schema: LabelSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a label by ID. */
export async function deleteLabel(client: Client, parameters: DeleteLabel): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/labels/${parameters.id}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Update a field on a label. */
export async function updateLabelField(client: Client, parameters: UpdateLabelField): Promise<Label> {
  const config: SendRequestOptions<Label> = {
    url: `/labels/${parameters.id}/${parameters.field}`,
    method: 'PUT',
    searchParams: {
      value: parameters.value,
    },
    schema: LabelSchema,
  };

  return await client.sendRequest(config);
}

/** Create a new Label on a Board. */
export async function createLabel(client: Client, parameters: CreateLabel): Promise<Label> {
  const config: SendRequestOptions<Label> = {
    url: '/labels',
    method: 'POST',
    searchParams: {
      name: parameters.name,
      color: parameters.color,
      idBoard: parameters.idBoard,
    },
    schema: LabelSchema,
  };

  return await client.sendRequest(config);
}
