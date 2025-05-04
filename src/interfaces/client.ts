import type { Request } from './request';
import type { ZodSchema, z } from 'zod';

export interface Client {
  sendRequest<T extends ZodSchema>(request: Request, mapper?: T): Promise<z.infer<T>>;
}
