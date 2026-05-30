import { type ZodType } from 'zod';

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
   * When `true`, successful responses are returned as-is without Zod schema validation. Trades runtime type-safety (and
   * schema transforms such as `z.coerce.date()`) for speed and resilience against schema drift. Defaults to `false`.
   */
  skipValidation?: boolean;
}

export interface Client {
  sendRequest<T>(options: SendRequestOptions<T>): Promise<T>;
}
