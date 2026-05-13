import { PluginSchema, type Plugin } from '#/models/plugin';
import { PluginListingSchema, type PluginListing } from '#/models/pluginListing';
import { type GetPlugin } from '#/parameters/getPlugin';
import { type UpdatePlugin } from '#/parameters/updatePlugin';
import { type CreatePluginListing } from '#/parameters/createPluginListing';
import { type GetPluginMemberPrivacyCompliance } from '#/parameters/getPluginMemberPrivacyCompliance';
import { type UpdatePluginListing } from '#/parameters/updatePluginListing';
import { type Client, type SendRequestOptions } from '#/core';

/** Get plugins */
export async function getPlugin(client: Client, parameters: GetPlugin): Promise<Plugin> {
  const config: SendRequestOptions<Plugin> = {
    url: `/plugins/${parameters.id}/`,
    method: 'GET',
    schema: PluginSchema,
  };

  return await client.sendRequest(config);
}

/** Update a Plugin */
export async function updatePlugin(client: Client, parameters: UpdatePlugin): Promise<Plugin> {
  const config: SendRequestOptions<Plugin> = {
    url: `/plugins/${parameters.id}/`,
    method: 'PUT',
    schema: PluginSchema,
  };

  return await client.sendRequest(config);
}

/** Create a new listing for a given locale for your Power-Up */
export async function createPluginListing(client: Client, parameters: CreatePluginListing): Promise<PluginListing> {
  const config: SendRequestOptions<PluginListing> = {
    url: `/plugins/${parameters.idPlugin}/listing`,
    method: 'POST',
    body: {
      description: parameters.description,
      locale: parameters.locale,
      overview: parameters.overview,
      name: parameters.name,
    },
    schema: PluginListingSchema,
  };

  return await client.sendRequest(config);
}

export async function getPluginMemberPrivacyCompliance(
  client: Client,
  parameters: GetPluginMemberPrivacyCompliance,
): Promise<void> {
  const config: SendRequestOptions<void> = {
    url: `/plugins/${parameters.id}/compliance/memberPrivacy`,
    method: 'GET',
  };

  return await client.sendRequest(config);
}

/** Update an existing listing for your Power-Up */
export async function updatePluginListing(client: Client, parameters: UpdatePluginListing): Promise<PluginListing> {
  const config: SendRequestOptions<PluginListing> = {
    url: `/plugins/${parameters.idPlugin}/listings/${parameters.idListing}`,
    method: 'PUT',
    body: {
      description: parameters.description,
      locale: parameters.locale,
      overview: parameters.overview,
      name: parameters.name,
    },
    schema: PluginListingSchema,
  };

  return await client.sendRequest(config);
}
