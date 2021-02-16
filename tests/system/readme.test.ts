import { TrelloClient } from '../../src';

const { TRELLO_API_KEY = '', TRELLO_API_TOKEN = '' } = process.env;

describe('Tests for the code presented in the Readme', () => {
  it('should create board', async () => {
    const trelloTestBoardName = 'Trello.js test board';
    const trelloTestBoardDescription = 'Automatically generated board for system tests for Trello.JS lib';

    const trelloClient = new TrelloClient({
      apiKey: TRELLO_API_KEY,
      apiToken: TRELLO_API_TOKEN,
    });

    const boards = await trelloClient.members.getMemberBoards({ id: 'me' });
    const trelloJsTestBoardExists = boards.find((board) => board.name === trelloTestBoardName) !== undefined;

    expect(trelloJsTestBoardExists).toBeFalsy();

    const createdBoard = await trelloClient.boards.createBoard({
      name: trelloTestBoardName,
      desc: trelloTestBoardDescription,
    });

    expect(createdBoard.name).toBe(trelloTestBoardName);
    expect(createdBoard.desc).toBe(trelloTestBoardDescription);

    let correctDeleted = false;

    await trelloClient.boards.deleteBoard({ id: createdBoard.id })
      .then(() => {
        correctDeleted = true;
      })
      .catch(() => {
        correctDeleted = false;
      });

    expect(correctDeleted).toBeTruthy();
  });
});
