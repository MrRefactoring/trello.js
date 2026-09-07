import { EmojiSchema, type Emoji } from '#/models/emoji';
import type { GetEmoji } from '#/parameters/getEmoji';
import type { Client, RequestOptions, SendRequestOptions } from '#/core';

/** List available Emoji */
export async function getEmoji(client: Client, parameters?: GetEmoji, options?: RequestOptions): Promise<Emoji> {
  const config: SendRequestOptions<Emoji> = {
    url: '/emoji',
    method: 'GET',
    searchParams: {
      locale: parameters?.locale,
      spritesheets: parameters?.spritesheets,
    },
    schema: EmojiSchema,
    signal: options?.signal,
  };

  return await client.sendRequest(config);
}
