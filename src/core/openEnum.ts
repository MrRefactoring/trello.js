import { z } from 'zod';

/**
 * Builds a schema for a string field whose documented values are Trello's list rather than a real constraint.
 *
 * Open by default: any string is accepted, because the spec these schemas are generated from routinely falls behind the
 * API it describes. The `_light` / `_dark` label shades of the 2023 palette redesign reached the cloud long before the
 * spec named them, and every consumer calling `getBoardCards` got a `ZodError` for a colour Trello itself had shipped.
 * A value Trello added and did not write down is not the caller's bug and must not end their program.
 *
 * The documented values survive where they are useful — in the type. `z.infer` gives `'green' | 'yellow' | … | (string
 * & {})`, so an editor still suggests every documented value while the compiler accepts whatever the API turns out to
 * send. They survive in the failure message too, which names them.
 *
 * When `TRELLO_STRICT_SCHEMAS` is `'true'` it builds a real `z.enum` instead, which is how this package's own audit run
 * learns that a list has gone stale. That run exists to compare the schemas against the live API; a consumer's process
 * does not.
 *
 * The declared return type stays the open one in both modes, deliberately — the same reason as in `apiObject`: the
 * switch is read at runtime, so the compiler cannot follow it, and the published declarations must not shift with an
 * environment variable.
 */
export function openEnum<const T extends readonly string[]>(values: T) {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  const documented = values.map(value => `'${value}'`).join(' | ');

  // `string & {}`, not `string`: a plain `string` in the union swallows the literals and takes the suggestions with it.
  const open = z.custom<T[number] | (string & {})>(value => typeof value === 'string', {
    message: `one of ${documented}, or another string`,
  });

  if (env?.TRELLO_STRICT_SCHEMAS === 'true') {
    return z.enum(values) as unknown as typeof open;
  }

  return open;
}
