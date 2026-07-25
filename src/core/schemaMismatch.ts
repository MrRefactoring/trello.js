import type * as zodCore from 'zod/v4/core';

/** One place where the response and the schema disagreed. */
export interface SchemaMismatchIssue {
  /** Dotted path to the value, e.g. `0.labels.2.color`. Empty for the response root. */
  path: string;
  /** What the schema expected there. */
  expected: string;
  /** What arrived, named by its type rather than quoted — the value itself never appears. */
  received: string;
}

/**
 * What a caller is told when a response does not match its schema.
 *
 * Types and paths only, deliberately: this is meant to be pasted into a bug report, and the body it describes belongs
 * to whoever ran the request — card names, comment text, custom field contents, member emails. A report that leaks
 * those turns a schema bug into someone else's incident.
 */
export interface SchemaMismatchReport {
  /** Method and path, without the query string — `GET /boards/{id}/cards`. */
  endpoint: string;
  issues: SchemaMismatchIssue[];
}

/**
 * What to do when a response does not match its schema.
 *
 * - `'warn'` (default) — report once per distinct problem and hand back the body unvalidated.
 * - `'silent'` — hand back the body unvalidated, say nothing.
 * - `'throw'` — raise `SchemaMismatchError`.
 * - A function — receives the report and replaces the printing entirely.
 *
 * The default is not `'throw'` on purpose. Trello ships new fields and new enum values to its single cloud well ahead
 * of the OpenAPI spec that describes it, and every one of those arrives as a response this library cannot validate: a
 * label in a shade added after the palette was documented, a `dueReminder` that turned into a number, an `agent` that
 * is now `null`. None of that is the caller's bug, and none of it should end their program. Set `'throw'` in a test
 * suite, where a mismatch _is_ the thing under test.
 */
export type SchemaMismatchBehavior = 'warn' | 'silent' | 'throw' | ((report: SchemaMismatchReport) => void);

/** A value described the way a schema would describe it, with nothing of the value itself kept. */
function describeValue(value: unknown): string {
  if (value === null) return 'null';

  if (Array.isArray(value)) return 'array';

  return typeof value;
}

/**
 * The type sitting at a zod issue's path, read from the body that failed.
 *
 * Zod does not carry the offending value on the issue, so the only way to say what arrived is to walk to it. Every
 * segment of an issue path is an object key or an array index, and anything no longer reachable is reported as absent —
 * which is itself the answer when the complaint is a missing field.
 */
function typeAtPath(body: unknown, path: readonly PropertyKey[]): string {
  let target = body;

  for (const segment of path) {
    if (target === null || typeof target !== 'object') return 'nothing';

    if (!(segment in (target as Record<PropertyKey, unknown>))) return 'nothing';

    target = (target as Record<PropertyKey, unknown>)[segment];
  }

  return describeValue(target);
}

/**
 * Flattens zod's issues into the report's own vocabulary.
 *
 * Union branches are flattened rather than nested: a caller reading this wants to know which field is wrong, and
 * telling them the response failed all four branches of a union is a fact about zod, not about their data.
 */
export function describeIssues(
  issues: readonly zodCore.$ZodIssue[],
  body: unknown,
  base: PropertyKey[] = [],
): SchemaMismatchIssue[] {
  const described: SchemaMismatchIssue[] = [];

  for (const issue of issues) {
    const path = [...base, ...issue.path];

    if (issue.code === 'invalid_union') {
      for (const branch of issue.errors) described.push(...describeIssues(branch, body, path));

      continue;
    }

    if (issue.code === 'unrecognized_keys') {
      described.push({
        path: path.map(String).join('.'),
        expected: 'no undocumented keys',
        // Key names describe the schema, not the data — safe to name, and the only useful thing to say.
        received: `undocumented: ${issue.keys.join(', ')}`,
      });
      continue;
    }

    described.push({
      path: path.map(String).join('.'),
      expected: 'expected' in issue ? String(issue.expected) : issue.code,
      received: typeAtPath(body, path),
    });
  }

  return described;
}

/**
 * Problems already reported, so one board's worth of cards does not narrate the same one five hundred times.
 *
 * Process-wide and unbounded on purpose. The key space is the schemas this library ships, so it cannot grow past that
 * however long the process runs, and per-client state would defeat the point — two clients against Trello have the same
 * schema bug.
 */
const reported = new Set<string>();

/** Exposed for tests, which would otherwise leak reported state between cases. */
export function resetSchemaMismatchReporting(): void {
  reported.clear();
}

/**
 * Prints each distinct problem once, to stderr.
 *
 * Stderr rather than stdout because a CLI's output belongs to the CLI: redirected to a file or piped into `jq`, this
 * stays in the terminal and the machine-readable stream is untouched. Deduplication is what makes it bearable at all —
 * one bad label colour across a 500-card board is one line, not five hundred.
 */
export function warnOnce(report: SchemaMismatchReport): void {
  for (const issue of report.issues) {
    const key = `${report.endpoint}|${issue.path}|${issue.expected}`;

    if (reported.has(key)) continue;

    reported.add(key);

    const where = issue.path === '' ? 'the response root' : `\`${issue.path}\``;

    console.warn(
      `[trello.js] ${report.endpoint} answered with something the schema does not describe: ` +
        `at ${where}, expected ${issue.expected}, got ${issue.received}. ` +
        'The response is returned unvalidated. ' +
        'Set `onSchemaMismatch` to `silent` to stop these, or pass a function to handle them yourself.',
    );
  }
}

/**
 * Runs the configured behavior. Returns whether the caller should throw.
 *
 * Kept here rather than inline in the transport so the decision reads in one place, and so `'throw'` is visibly the
 * only branch that ends the request.
 */
export function reportSchemaMismatch(behavior: SchemaMismatchBehavior, report: SchemaMismatchReport): boolean {
  if (typeof behavior === 'function') {
    behavior(report);

    return false;
  }

  if (behavior === 'throw') return true;

  if (behavior === 'warn') warnOnce(report);

  return false;
}
