import test from 'ava';
import {
  BaseClient,
  Callback,
  Config,
  Models,
  Parameters,
  RequestConfig,
  TrelloClient,
} from '../../src';

test('Trello Client should be defined', t => {
  t.truthy(!!TrelloClient);
});

test('BaseClient should be defined', t => {
  t.truthy(!!BaseClient);
});

test('Config should be defined', t => {
  const config: Config = {
    key: '',
    token: '',
  };

  t.is(config.key, '');
  t.is(config.token, '');
});

test('RequestConfig should be defined', t => {
  const requestConfig: RequestConfig = { url: '' };

  t.is(requestConfig.url, '');
});

test('Callback should be defined', t => {
  const callback: Callback<{ testVal: string; }> = (err, data) => {
    t.is(err, null);
    t.deepEqual(data, { testVal: 'hello' });
  };

  t.truthy(!!callback);

  callback(null, { testVal: 'hello' });
});

test('Models should be defined', t => {
  t.truthy(!!Models);
});

test('Parameters should be defined', t => {
  t.truthy(!!Parameters);
});
