import { TrelloClient } from '../../src';

const { TRELLO_API_KEY = '', TRELLO_API_TOKEN = '' } = process.env;

describe('Tests for the code presented in the Readme', () => {
  it('should create board', async () => {
    const trelloClient = new TrelloClient({
      apiKey: TRELLO_API_KEY,
      apiToken: TRELLO_API_TOKEN,
    });

    const boards = await trelloClient.members.getMemberBoards({ id: 'me', organizationFields: ['id', 'name'] });

    expect(boards).toBeTruthy();
  });
});
