export interface Request {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string | number>;
  query?: Record<string, string | number>;
  body?: object;
}
