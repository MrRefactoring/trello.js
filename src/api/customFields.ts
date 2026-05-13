import { CustomFieldSchema, type CustomField } from '#/models/customField';
import { CustomFieldOptionSchema, type CustomFieldOption } from '#/models/customFieldOption';
import { type CreateCustomField } from '#/parameters/createCustomField';
import { type GetCustomField } from '#/parameters/getCustomField';
import { type UpdateCustomField } from '#/parameters/updateCustomField';
import { type DeleteCustomField } from '#/parameters/deleteCustomField';
import { type GetCustomFieldOptions } from '#/parameters/getCustomFieldOptions';
import { type CreateCustomFieldOption } from '#/parameters/createCustomFieldOption';
import { type GetCustomFieldOption } from '#/parameters/getCustomFieldOption';
import { type DeleteCustomFieldOption } from '#/parameters/deleteCustomFieldOption';
import { type Client, type SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Create a new Custom Field on a board. */
export async function createCustomField(client: Client, parameters: CreateCustomField): Promise<CustomField> {
  const config: SendRequestOptions<CustomField> = {
    url: '/customFields',
    method: 'POST',
    body: {
      idModel: parameters.idModel,
      modelType: parameters.modelType,
      name: parameters.name,
      type: parameters.type,
      options: parameters.options,
      pos: parameters.pos,
      display_cardFront: parameters.display_cardFront,
    },
    schema: CustomFieldSchema,
  };

  return await client.sendRequest(config);
}

export async function getCustomField(client: Client, parameters: GetCustomField): Promise<CustomField> {
  const config: SendRequestOptions<CustomField> = {
    url: `/customFields/${parameters.id}`,
    method: 'GET',
    schema: CustomFieldSchema,
  };

  return await client.sendRequest(config);
}

/** Update a Custom Field definition. */
export async function updateCustomField(client: Client, parameters: UpdateCustomField): Promise<CustomField> {
  const config: SendRequestOptions<CustomField> = {
    url: `/customFields/${parameters.id}`,
    method: 'PUT',
    body: {
      name: parameters.name,
      pos: parameters.pos,
      'display/cardFront': parameters['display/cardFront'],
    },
    schema: CustomFieldSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a Custom Field from a board. */
export async function deleteCustomField(client: Client, parameters: DeleteCustomField): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/customFields/${parameters.id}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get the options of a drop down Custom Field */
export async function getCustomFieldOptions(
  client: Client,
  parameters: GetCustomFieldOptions,
): Promise<CustomFieldOption[]> {
  const config: SendRequestOptions<CustomFieldOption[]> = {
    url: `/customFields/${parameters.id}/options`,
    method: 'GET',
    schema: z.array(CustomFieldOptionSchema),
  };

  return await client.sendRequest(config);
}

/** Add an option to a dropdown Custom Field */
export async function createCustomFieldOption(
  client: Client,
  parameters: CreateCustomFieldOption,
): Promise<CustomFieldOption> {
  const config: SendRequestOptions<CustomFieldOption> = {
    url: `/customFields/${parameters.id}/options`,
    method: 'POST',
    body: {
      value: parameters.value,
      color: parameters.color,
      pos: parameters.pos,
    },
    schema: CustomFieldOptionSchema,
  };

  return await client.sendRequest(config);
}

/** Retrieve a specific, existing Option on a given dropdown-type Custom Field */
export async function getCustomFieldOption(
  client: Client,
  parameters: GetCustomFieldOption,
): Promise<CustomFieldOption> {
  const config: SendRequestOptions<CustomFieldOption> = {
    url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
    method: 'GET',
    schema: CustomFieldOptionSchema,
  };

  return await client.sendRequest(config);
}

/** Delete an option from a Custom Field dropdown. */
export async function deleteCustomFieldOption(client: Client, parameters: DeleteCustomFieldOption): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}
