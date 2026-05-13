export interface LiveTestEnv {
  apiKey: string;
  apiToken: string;
  member2Id: string;
  member2Email: string;
}

export function requireLiveEnv(): LiveTestEnv {
  const apiKey = process.env['TRELLO_API_KEY'];
  const apiToken = process.env['TRELLO_API_TOKEN'];
  const member2Id = process.env['TRELLO_MEMBER2_ID'];
  const member2Email = process.env['TRELLO_MEMBER2_EMAIL'];

  if (!apiKey || !apiToken || !member2Id || !member2Email) {
    throw new Error(
      'Live tests require TRELLO_API_KEY, TRELLO_API_TOKEN, TRELLO_MEMBER2_ID, and TRELLO_MEMBER2_EMAIL.\n' +
      'Copy .env.example → .env and fill in your credentials.',
    );
  }

  return { apiKey, apiToken, member2Id, member2Email };
}
