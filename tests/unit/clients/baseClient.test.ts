import { BaseClient } from '../../../src';
import test from 'ava';

test('should return correct serialized parameters', t => {
  const baseClient = new BaseClient({
    key: '',
    token: '',
  });

  // @ts-ignore
  const serializedParameters = baseClient.paramSerializer({
    fields: ['test1', 'test2'],
  });

  t.is(serializedParameters, 'fields=test1,test2');
});
