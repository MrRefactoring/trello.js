import test from 'ava';
import { BaseClient } from '../../../src';

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
