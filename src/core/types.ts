import type { ZodType } from 'zod';

export interface SendRequestOptions<T = unknown> {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  searchParams?: Record<string, unknown>;
  schema?: ZodType<T>;
}

export interface ClientConfig {
  host?: string;
  apiKey: string;
  apiToken: string;
  headers?: Record<string, string>;
  /**
   * When `true`, `schema.parse()` is not called on successful responses — neither Zod validation nor schema transforms
   * (e.g. `z.coerce.date()`) run. Date fields remain plain strings. Use as an escape hatch against schema drift or to
   * skip parsing overhead on large responses. Defaults to `false`.
   */
  skipParsing?: boolean;
}

export interface Client {
  sendRequest<T>(options: SendRequestOptions<T>): Promise<T>;
}
