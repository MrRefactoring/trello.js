import type { Config } from '~/schemas';

export const config: Config = {
  key: process.env.TRELLO_API_KEY!,
  token: process.env.TRELLO_API_TOKEN!,
};
