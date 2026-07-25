import { buildUrl } from './buildUrl';
import type { Client, ClientConfig, SendRequestOptions } from './interfaces';
import { describeIssues, reportSchemaMismatch } from './schemaMismatch';
import type { SchemaMismatchBehavior, SchemaMismatchReport } from './schemaMismatch';
import { SchemaMismatchError } from './schemaMismatchError';

const DEFAULT_HOST = 'https://api.trello.com/1';
const MAX_RETRY_ATTEMPTS = 4;

/**
 * Whether `TRELLO_STRICT_SCHEMAS` is on, which is what `apiObject` reads to switch response schemas to strict mode.
 *
 * Strict mode exists to fail on exactly this, so it forces `onSchemaMismatch` back to `'throw'`: a run that warned and
 * carried on would report a clean sweep over a schema the live API had already outgrown.
 */
function isStrictSchemaMode(): boolean {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;

  return env?.TRELLO_STRICT_SCHEMAS === 'true';
}

function isClient(value: ClientConfig | Client): value is Client {
  return typeof (value as Client).sendRequest === 'function';
}

export function createClient(config: ClientConfig | Client): Client {
  // Already a client: hand it straight back. This is what lets a client built once for the flat,
  // tree-shaken functions also drive `createTrelloClient` — one instance, one configuration, rather
  // than two that could disagree about `onSchemaMismatch` or the host.
  if (isClient(config)) return config;

  const baseUrl = (config.host ?? DEFAULT_HOST).replace(/\/$/, '');
  const defaultHeaders = config.headers ?? {};
  const skipParsing = config.skipParsing ?? false;
  const onSchemaMismatch = config.onSchemaMismatch ?? 'warn';

  return {
    async sendRequest<T>(options: SendRequestOptions<T>): Promise<T> {
      const fullUrl = buildUrl(baseUrl + options.url, {
        ...options.searchParams,
        key: config.apiKey,
        token: config.apiToken,
      });

      const body = serializeBody(options.body);

      const headers = buildHeaders(defaultHeaders, options.body, options.headers);

      const response = await fetchWithRetry(fullUrl, {
        method: options.method ?? 'GET',
        headers: Object.keys(headers).length > 0 ? headers : undefined,
        body,
      });

      return parseResponse(response, options, skipParsing, onSchemaMismatch);
    },
  };
}

function serializeBody(body: unknown): string | undefined {
  if (body === undefined || body === null) return undefined;

  return typeof body === 'string' ? body : JSON.stringify(body);
}

function buildHeaders(
  defaults: Record<string, string>,
  body: unknown,
  perRequest?: Record<string, string>,
): Record<string, string> {
  const contentType: Record<string, string> =
    body !== undefined && body !== null && typeof body !== 'string' ? { 'Content-Type': 'application/json' } : {};

  return { ...defaults, ...contentType, ...perRequest };
}

async function fetchWithRetry(url: string, init: RequestInit): Promise<Response> {
  let response!: Response;

  for (let attempt = 0; attempt < MAX_RETRY_ATTEMPTS; attempt++) {
    response = await fetch(url, init);

    if (response.status !== 429) break;

    if (attempt < MAX_RETRY_ATTEMPTS - 1) {
      await new Promise(r => setTimeout(r, 2000 * 2 ** attempt));
    }
  }

  return response;
}

async function parseResponse<T>(
  response: Response,
  options: SendRequestOptions<T>,
  skipParsing: boolean,
  onSchemaMismatch: SchemaMismatchBehavior,
): Promise<T> {
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText}${text ? ` - ${text}` : ''}`);
  }

  const contentType = response.headers.get('content-type');

  if (response.status === 204 || (contentType && !contentType.includes('application/json'))) {
    return undefined as T;
  }

  const data = (await response.json()) as unknown;

  if (!options.schema || skipParsing) return data as T;

  const parsed = options.schema.safeParse(data);

  if (parsed.success) return parsed.data;

  // The response parsed as JSON but is not the shape the endpoint promises. What happens next is the caller's choice:
  // by default the body comes back unvalidated and the problem is reported once, because Trello ships fields and enum
  // values ahead of the spec that describes them and none of that is the caller's bug to be stopped by.
  const endpoint = `${options.method ?? 'GET'} ${options.url}`;
  const report: SchemaMismatchReport = { endpoint, issues: describeIssues(parsed.error.issues, data) };
  const behavior = isStrictSchemaMode() ? 'throw' : onSchemaMismatch;

  if (reportSchemaMismatch(behavior, report)) {
    throw new SchemaMismatchError(`Response did not match the schema for ${endpoint}`, report, {
      cause: parsed.error,
    });
  }

  return data as T;
}
