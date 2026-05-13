import { WebhookSchema, type Webhook } from '#/models/webhook';
import { FieldValueSchema, type FieldValue } from '#/models/fieldValue';
import { type CreateWebhook } from '#/parameters/createWebhook';
import { type GetWebhook } from '#/parameters/getWebhook';
import { type UpdateWebhook } from '#/parameters/updateWebhook';
import { type DeleteWebhook } from '#/parameters/deleteWebhook';
import { type GetWebhookField } from '#/parameters/getWebhookField';
import { type Client, type SendRequestOptions } from '#/core';
import type { z } from 'zod';

/** Create a new webhook. */
export async function createWebhook(client: Client, parameters: CreateWebhook): Promise<Webhook> {
  const config: SendRequestOptions<Webhook> = {
    url: '/webhooks/',
    method: 'POST',
    searchParams: {
      description: parameters.description,
      callbackURL: parameters.callbackURL,
      idModel: parameters.idModel,
      active: parameters.active,
    },
    schema: WebhookSchema,
  };

  return await client.sendRequest(config);
}

/**
 * Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or
 * else you will encounter a 'webhook does not belong to token' error.
 */
export async function getWebhook(client: Client, parameters: GetWebhook): Promise<Webhook> {
  const config: SendRequestOptions<Webhook> = {
    url: `/webhooks/${parameters.id}`,
    method: 'GET',
    schema: WebhookSchema,
  };

  return await client.sendRequest(config);
}

/** Update a webhook by ID. */
export async function updateWebhook(client: Client, parameters: UpdateWebhook): Promise<Webhook> {
  const config: SendRequestOptions<Webhook> = {
    url: `/webhooks/${parameters.id}`,
    method: 'PUT',
    searchParams: {
      description: parameters.description,
      callbackURL: parameters.callbackURL,
      idModel: parameters.idModel,
      active: parameters.active,
    },
    schema: WebhookSchema,
  };

  return await client.sendRequest(config);
}

/** Delete a webhook by ID. */
export async function deleteWebhook(client: Client, parameters: DeleteWebhook): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/webhooks/${parameters.id}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Get a field on a Webhook */
export async function getWebhookField<T = unknown>(
  client: Client,
  parameters: GetWebhookField,
): Promise<FieldValue<T>> {
  const config: SendRequestOptions<FieldValue<T>> = {
    url: `/webhooks/${parameters.id}/${parameters.field}`,
    method: 'GET',
    schema: FieldValueSchema as z.ZodType<FieldValue<T>>,
  };

  return await client.sendRequest(config);
}
