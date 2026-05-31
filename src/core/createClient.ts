import { buildUrl } from './buildUrl';
import type { Client, ClientConfig, SendRequestOptions } from './types';

const DEFAULT_HOST = 'https://api.trello.com/1';
const MAX_RETRY_ATTEMPTS = 4;

export function createClient(config: ClientConfig): Client {
  const baseUrl = (config.host ?? DEFAULT_HOST).replace(/\/$/, '');
  const defaultHeaders = config.headers ?? {};
  const skipParsing = config.skipParsing ?? false;

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

      return parseResponse(response, options.schema, skipParsing);
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
  schema: SendRequestOptions<T>['schema'],
  skipParsing: boolean,
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

  return schema && !skipParsing ? (schema.parse(data) as T) : (data as T);
}
