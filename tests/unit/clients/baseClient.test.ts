import { BaseClient } from '../../../src';

describe('BaseClient tests', () => {
  it('should return correct serialized parameters', () => {
    const baseClient = new BaseClient({
      key: '',
      token: '',
    });

    // @ts-ignore
    const serializedParameters = baseClient.paramSerializer({
      fields: ['test1', 'test2'],
    });

    expect(serializedParameters).toBe('fields=test1,test2');
  });
});
