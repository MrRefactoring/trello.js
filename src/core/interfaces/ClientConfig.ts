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
