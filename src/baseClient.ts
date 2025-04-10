import { Config, configSchema } from '~/schemas';
import type { Client, Request } from '~/interfaces';
import { ZodSchema } from 'zod';

export class BaseClient implements Client {
  private baseUrl = 'https://api.trello.com';

  constructor(private config: Config) {
    this.config = configSchema.parse(config);
  }

  async sendRequest<T>(request: Request, mapper?: ZodSchema): Promise<T> {
    const url = new URL(`/1${request.url}`, this.baseUrl);

    const headers = {
      'Content-Type': 'application/json',
    };

    Object.entries(request.query ?? {}).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });

    url.searchParams.set('key', this.config.key);
    url.searchParams.set('token', this.config.token);

    const response = await fetch(url, {
      method: request.method,
      headers,
      body: request.body ? JSON.stringify(request.body) : undefined,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error('Request Error'); // todo handle error
    }

    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const jsonData = await response.json();
      return mapper ? mapper.parse(jsonData) : jsonData;
    }

    if (contentType.startsWith('text/')) {
      const textData = await response.text();
      return mapper ? mapper.parse(textData) : textData as unknown as T;
    }

    // Handle binary data
    if (contentType.includes('application/octet-stream') ||
      contentType.includes('application/pdf') ||
      contentType.includes('image/')) {
      const binaryData = await response.arrayBuffer();
      return mapper ? mapper.parse(binaryData) : binaryData as unknown as T;
    }

    // Fallback for other content types
    const fallbackData = await response.text();
    return mapper ? mapper.parse(fallbackData) : fallbackData as unknown as T;
  }
}
