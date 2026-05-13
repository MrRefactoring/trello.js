import { TokenSchema, type Token } from '#/models/token';
import { MemberSchema, type Member } from '#/models/member';
import { WebhookSchema, type Webhook } from '#/models/webhook';
import { type GetToken } from '#/parameters/getToken';
import { type GetTokenMember } from '#/parameters/getTokenMember';
import { type GetTokenWebhooks } from '#/parameters/getTokenWebhooks';
import { type CreateTokenWebhook } from '#/parameters/createTokenWebhook';
import { type GetTokenWebhook } from '#/parameters/getTokenWebhook';
import { type UpdateTokenWebhook } from '#/parameters/updateTokenWebhook';
import { type DeleteTokenWebhook } from '#/parameters/deleteTokenWebhook';
import { type DeleteToken } from '#/parameters/deleteToken';
import { type Client, type SendRequestOptions } from '#/core';
import { z } from 'zod';

/** Retrieve information about a token. */
export async function getToken(client: Client, parameters: GetToken): Promise<Token> {
  const config: SendRequestOptions<Token> = {
    url: `/tokens/${parameters.token}`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
      webhooks: parameters.webhooks,
    },
    schema: TokenSchema,
  };

  return await client.sendRequest(config);
}

/** Retrieve information about a token's owner by token. */
export async function getTokenMember(client: Client, parameters: GetTokenMember): Promise<Member> {
  const config: SendRequestOptions<Member> = {
    url: `/tokens/${parameters.token}/member`,
    method: 'GET',
    searchParams: {
      fields: parameters.fields,
    },
    schema: MemberSchema,
  };

  return await client.sendRequest(config);
}

/** Retrieve all webhooks created with a Token. */
export async function getTokenWebhooks(client: Client, parameters: GetTokenWebhooks): Promise<Webhook[]> {
  const config: SendRequestOptions<Webhook[]> = {
    url: `/tokens/${parameters.token}/webhooks`,
    method: 'GET',
    schema: z.array(WebhookSchema),
  };

  return await client.sendRequest(config);
}

/** Create a new webhook for a Token. */
export async function createTokenWebhook(client: Client, parameters: CreateTokenWebhook): Promise<Webhook> {
  const config: SendRequestOptions<Webhook> = {
    url: `/tokens/${parameters.token}/webhooks`,
    method: 'POST',
    searchParams: {
      description: parameters.description,
      callbackURL: parameters.callbackURL,
      idModel: parameters.idModel,
    },
    schema: WebhookSchema,
  };

  return await client.sendRequest(config);
}

/** Retrieve a webhook created with a Token. */
export async function getTokenWebhook(client: Client, parameters: GetTokenWebhook): Promise<Webhook> {
  const config: SendRequestOptions<Webhook> = {
    url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
    method: 'GET',
    schema: WebhookSchema,
  };

  return await client.sendRequest(config);
}

/** Update a Webhook created by Token */
export async function updateTokenWebhook(client: Client, parameters: UpdateTokenWebhook): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
    method: 'PUT',
    searchParams: {
      description: parameters.description,
      callbackURL: parameters.callbackURL,
      idModel: parameters.idModel,
    },
  };

  return await client.sendRequest(config);
}

/** Delete a webhook created with given token. */
export async function deleteTokenWebhook(client: Client, parameters: DeleteTokenWebhook): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}

/** Delete a token. */
export async function deleteToken(client: Client, parameters: DeleteToken): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/tokens/${parameters.token}/`,
    method: 'DELETE',
  };

  return await client.sendRequest(config);
}
