import { z } from 'zod';

/**
 * Builds an object schema for a Trello API response.
 *
 * By default it strips unknown keys (`z.object`), so a new field added by the
 * Trello API never breaks validation for consumers. When the environment
 * variable `TRELLO_STRICT_SCHEMAS` is set to `'true'` it switches to
 * `z.strictObject`, turning any undocumented key into a `ZodError` — used by
 * this package's own test runs to surface gaps between the schemas and the
 * live API.
 */
export function apiObject<T extends z.ZodRawShape>(shape: T): z.ZodObject<T> {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  const strict = env?.TRELLO_STRICT_SCHEMAS === 'true';

  return (strict ? z.strictObject(shape) : z.object(shape)) as z.ZodObject<T>;
}
