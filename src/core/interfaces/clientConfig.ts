import type { SchemaMismatchBehavior } from '../schemaMismatch';

export interface ClientConfig {
  host?: string;
  apiKey: string;
  apiToken: string;
  headers?: Record<string, string>;
  /**
   * When `true`, response schemas are not run at all — neither Zod validation nor schema transforms (e.g.
   * `z.coerce.date()`). Date fields remain plain strings. A blunt instrument compared to `onSchemaMismatch`, which only
   * gives up on the responses that actually failed; reach for this one to skip parsing overhead on large responses.
   * Defaults to `false`.
   */
  skipParsing?: boolean;
  /**
   * What to do when a response does not match its schema. Defaults to `'warn'`: report the problem once on stderr and
   * hand back the body unvalidated, rather than ending the request. Pass `'throw'` to raise `SchemaMismatchError`,
   * `'silent'` to say nothing, or a function to handle the report yourself.
   *
   * Ignored when `TRELLO_STRICT_SCHEMAS=true`, which forces `'throw'`.
   */
  onSchemaMismatch?: SchemaMismatchBehavior;
}
