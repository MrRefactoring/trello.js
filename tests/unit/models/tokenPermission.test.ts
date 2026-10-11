import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

describe('TokenPermission in strict schema mode', () => {
  let schema: typeof import('../../../src/models/tokenPermission').TokenPermissionSchema;

  beforeAll(async () => {
    vi.stubEnv('TRELLO_STRICT_SCHEMAS', 'true');
    vi.resetModules();
    schema = (await import('../../../src/models/tokenPermission')).TokenPermissionSchema;
  });

  afterAll(() => vi.unstubAllEnvs());

  it.each(['*', '507f1f77bcf86cd799439011'])('accepts idModel %s', (idModel) => {
    expect(schema.parse({ idModel, modelType: 'Board' }).idModel).toBe(idModel);
  });

  it('rejects a non-string model ID', () => {
    expect(schema.safeParse({ idModel: 42 }).success).toBe(false);
  });

  it('still validates the model type in strict mode', () => {
    expect(schema.safeParse({ modelType: 'Unexpected' }).success).toBe(false);
  });
});
