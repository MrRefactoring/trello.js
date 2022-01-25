import test from 'ava';
import { TrelloClient } from '../../src';

const { TRELLO_API_KEY = '', TRELLO_API_TOKEN = '' } = process.env;

test('should create a board', async t => {
  const trelloClient = new TrelloClient({
    key: TRELLO_API_KEY,
    token: TRELLO_API_TOKEN,
  });

  const boards = await trelloClient.members.getMemberBoards({ id: 'me', organizationFields: ['id', 'name'] });

  t.truthy(!!boards);
});
