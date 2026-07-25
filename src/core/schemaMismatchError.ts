import type { SchemaMismatchReport } from './schemaMismatch';

/**
 * The request succeeded, but the response is not what the endpoint's schema describes.
 *
 * Only raised when `onSchemaMismatch` is set to `'throw'` — by default a mismatch is reported and the body comes back
 * unvalidated. The underlying `ZodError` is preserved on `cause`, so nothing is lost by catching this instead; callers
 * should not have to know which validator this library uses in order to handle a drifted response.
 *
 * `report` names field paths and types and never the values at them. Putting the response body on the error would land
 * card names, comment text and custom field contents in every log line and error tracker that saw it — a schema bug
 * turning into someone else's data incident.
 */
export class SchemaMismatchError extends Error {
  /** Which fields disagreed with the schema, by path and type. Paste-able into a bug report. */
  readonly report: SchemaMismatchReport;

  constructor(message: string, report: SchemaMismatchReport, options?: { cause?: unknown }) {
    super(message, options);
    this.name = 'SchemaMismatchError';
    this.report = report;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
