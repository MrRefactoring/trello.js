import { config } from 'dotenv';
import { resolve } from 'node:path';

const TLJS_PREFIX = '[tljs:';
const DELETE_ATTEMPTS = 4;

interface TrelloBoard {
  id: string;
  name: string;
}

function trelloUrl(path: string, apiKey: string, apiToken: string): string {
  const separator = path.includes('?') ? '&' : '?';

  return `https://api.trello.com/1${path}${separator}key=${apiKey}&token=${apiToken}`;
}

async function purgeLeftoverBoards(apiKey: string, apiToken: string): Promise<void> {
  const response = await fetch(
    trelloUrl('/members/me/boards?fields=name', apiKey, apiToken),
  );

  if (!response.ok) return;

  const boards = (await response.json()) as TrelloBoard[];
  const leftovers = boards.filter((board) => board.name.startsWith(TLJS_PREFIX));

  for (const board of leftovers) {
    for (let attempt = 0; attempt < DELETE_ATTEMPTS; attempt++) {
      const deletion = await fetch(
        trelloUrl(`/boards/${board.id}`, apiKey, apiToken),
        { method: 'DELETE' },
      );

      if (deletion.ok) break;

      if (attempt < DELETE_ATTEMPTS - 1) {
        await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
      }
    }
  }
}

export default async function globalSetup(): Promise<() => Promise<void>> {
  config({ path: resolve(process.cwd(), '.env'), override: false });

  const apiKey = process.env.TRELLO_API_KEY;
  const apiToken = process.env.TRELLO_API_TOKEN;

  if (!apiKey || !apiToken) return async () => {};

  await purgeLeftoverBoards(apiKey, apiToken);

  return async () => {
    await purgeLeftoverBoards(apiKey, apiToken);
  };
}
