import test from 'ava';
import { Models, TrelloClient } from '../../src';
import * as fs from 'fs';

const { TRELLO_API_KEY = '', TRELLO_API_TOKEN = '' } = process.env;

const client = new TrelloClient({
  key: TRELLO_API_KEY,
  token: TRELLO_API_TOKEN,
});

let board: Models.Board;

test.serial('Creating board', async t => {
  board = await client.boards.createBoard({
    name: 'TEST',
    defaultLists: false,
    defaultLabels: false,
  });

  t.truthy(board.id);
  t.is(board.name, 'TEST');

  t.pass();
});

test.serial('Creating lists', async t => {
  const toDoList = await client.lists.createList({ idBoard: board.id, name: 'To Do' });

  t.truthy(!!toDoList.id);
  t.is(toDoList.name, 'To Do');
  t.falsy(toDoList.closed);
  t.truthy(!!toDoList.pos);
  t.truthy(!!toDoList.idBoard);
  t.truthy(!!toDoList.limits);

  const inProgressList = await client.boards.createBoardList({ id: board.id, name: 'In Progress' });

  t.truthy(!!inProgressList.id);
  t.is(inProgressList.name, 'In Progress');
  t.falsy(inProgressList.closed);
  t.truthy(!!inProgressList.pos);
  t.truthy(!!inProgressList.idBoard);
  t.truthy(!!inProgressList.limits);

  t.pass();
});

test.serial('Creating card', async t => {
  const lists = await client.boards.getBoardLists({ id: board.id });

  const toDoList = lists.find((list) => list.name === 'To Do');

  t.truthy(toDoList);

  const card = await client.cards.createCard({
    idList: toDoList!.id,
  });

  t.is(card.name, '');
  t.is(card.idBoard, board.id);
  t.is(card.idList, toDoList!.id);

  t.pass();
});

test.serial('Updating card', async t => {
  const lists = await client.boards.getBoardLists({ id: board.id });

  const toDoList = lists.find((list) => list.name === 'To Do');

  const cards = await client.lists.getListCards({ id: toDoList!.id });

  const card = cards.find((oneCard) => oneCard.name === '');

  t.truthy(!!card);

  const updatedCard = await client.cards.updateCard({
    id: card!.id,
    desc: 'This is description',
  });

  t.is(updatedCard.desc, 'This is description');

  t.pass();
});

test.serial('Adding attachments to card', async t => {
  const lists = await client.boards.getBoardLists({ id: board.id });

  const toDoList = lists.find((list) => list.name === 'To Do');

  const cards = await client.lists.getListCards({ id: toDoList!.id });

  const card = cards.find((oneCard) => oneCard.name === '');

  t.truthy(!!card);

  await client.cards.createCardAttachment({
    id: card!.id,
    file: fs.readFileSync('./.editorconfig'),
    name: 'Editor config.txt',
    mimeType: 'text/plain',
  });

  await client.cards.createCardAttachment({
    id: card!.id,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    name: 'Rick A',
  });

  t.pass();
});

test.serial('Deleting cards attachments', async t => {
  const lists = await client.boards.getBoardLists({ id: board.id });

  const toDoList = lists.find((list) => list.name === 'To Do');

  const cards = await client.lists.getListCards({ id: toDoList!.id });

  const card = cards.find((oneCard) => oneCard.name === '');

  const attachments = await client.cards.getCardAttachments({ id: card!.id });

  await Promise.all(attachments.map(attachment => client.cards.deleteCardAttachment({ id: card!.id, idAttachment: attachment.id })));

  t.pass();
});

test.serial('Deleting cards', async t => {
  const lists = await client.boards.getBoardLists({ id: board.id });

  await Promise.all(lists.map(async list => {
    const cards = await client.lists.getListCards({ id: list.id });

    return Promise.all(cards.map(async card => {
      return client.cards.deleteCard({ id: card.id });
    }));
  }));

  t.pass();
});

test.serial('Deleting lists', async t => {
  const lists = await client.boards.getBoardLists({ id: board.id });

  await Promise.all(lists.map(async list => {
    const closedList = await client.lists.setListCloseState({ id: list.id, value: true });

    t.truthy(closedList.closed);
  }));

  t.pass();
});

test.serial('Deleting board', async t => {
  await client.boards.deleteBoard({ id: board.id });

  t.pass();
});
