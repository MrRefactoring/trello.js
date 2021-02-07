import {
  Client,
  BaseClient,
  Config,
  Callback,
  RequestConfig,
  Models,
  Parameters,
  TrelloClient,
} from '../../src';

describe('Facade', () => {
  it('should return TrelloClient', () => {
    expect(TrelloClient).toBeDefined();
  });

  it('should return BaseClient', () => {
    expect(BaseClient).toBeDefined();
  });

  it('should return Client', () => {
    const client: Client = new BaseClient({ apiToken: '', apiKey: '' });

    expect(client).toBeDefined();
  });

  it('should return Config', () => {
    const config: Config = { apiKey: '', apiToken: '' };

    expect(config).toBeDefined();
  });

  it('should return RequestConfig', () => {
    const requestConfig: RequestConfig = { url: '' };

    expect(requestConfig).toBeDefined();
  });

  it('should return Callback', () => {
    const callback: Callback<{ testVal: string; }> = (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual({ testVal: 'hello' });
    };

    expect(callback).toBeDefined();
    callback(null, { testVal: 'hello' });
  });

  it('should return Models', () => {
    expect(Models).toBeDefined();
  });

  it('should return Parameters', () => {
    expect(Parameters).toBeDefined();
  });
});
