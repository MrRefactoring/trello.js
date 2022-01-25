import test from 'ava';
import { TrelloClient } from '../../src';

const { TRELLO_API_KEY = '', TRELLO_API_TOKEN = '' } = process.env;

test('should create and delete a board', async t => {
  const trelloTestBoardName = 'Trello.js test board';
  const trelloTestBoardDescription = 'Automatically generated board for integration tests for Trello.JS lib';

  const trelloClient = new TrelloClient({
    key: TRELLO_API_KEY,
    token: TRELLO_API_TOKEN,
  });

  const boards = await trelloClient.members.getMemberBoards({ id: 'me' });
  const trelloJsTestBoardExists = boards.find((board) => board.name === trelloTestBoardName) !== undefined;

  t.falsy(trelloJsTestBoardExists);

  const createdBoard = await trelloClient.boards.createBoard({
    name: trelloTestBoardName,
    desc: trelloTestBoardDescription,
  });

  t.is(createdBoard.name, trelloTestBoardName);
  t.is(createdBoard.desc, trelloTestBoardDescription);

  let correctDeleted = false;

  await trelloClient.boards.deleteBoard({ id: createdBoard.id })
    .then(() => {
      correctDeleted = true;
    })
    .catch(() => {
      correctDeleted = false;
    });

  t.truthy(correctDeleted);
});
