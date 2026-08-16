import { EmojiSchema, type Emoji } from '#/models/emoji';
import type { GetEmoji } from '#/parameters/getEmoji';
import type { Client, SendRequestOptions } from '#/core';

/** List available Emoji */
export async function getEmoji(client: Client, parameters?: GetEmoji): Promise<Emoji> {
  const config: SendRequestOptions<Emoji> = {
    url: '/emoji',
    method: 'GET',
    searchParams: {
      locale: parameters?.locale,
      spritesheets: parameters?.spritesheets,
    },
    schema: EmojiSchema,
  };

  return await client.sendRequest(config);
}
