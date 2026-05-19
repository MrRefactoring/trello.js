export function buildUrl(base: string, searchParams?: Record<string, unknown>): string {
  if (!searchParams || Object.keys(searchParams).length === 0) return base;

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (value !== undefined && value !== null) params.set(key, String(value));
  }

  const query = params.toString();

  return query ? `${base}${base.includes('?') ? '&' : '?'}${query}` : base;
}
