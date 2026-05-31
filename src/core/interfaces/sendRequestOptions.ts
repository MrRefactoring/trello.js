import type { ZodType } from 'zod';

export interface SendRequestOptions<T = unknown> {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  searchParams?: Record<string, unknown>;
  schema?: ZodType<T>;
}
