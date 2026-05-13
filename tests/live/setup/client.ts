import { config } from 'dotenv';
import { resolve } from 'node:path';
import { createTrelloClient } from '../../../src/createTrelloClient';
import type { TrelloClient } from '../../../src/createTrelloClient';
import { requireLiveEnv } from './env';

config({ path: resolve(process.cwd(), '.env'), override: false });

let _client: TrelloClient | null = null;
let _env: ReturnType<typeof requireLiveEnv> | null = null;

function getEnv() {
  if (!_env) _env = requireLiveEnv();
  return _env;
}

export function getLiveClient(): TrelloClient {
  if (!_client) {
    const { apiKey, apiToken } = getEnv();
    _client = createTrelloClient({ apiKey, apiToken });
  }

  return _client;
}

export function getMember2Id(): string {
  return getEnv().member2Id;
}

export function getMember2Email(): string {
  return getEnv().member2Email;
}
