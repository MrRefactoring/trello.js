const RUN_ID = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

export function runId(): string {
  return RUN_ID;
}

export function testName(label: string): string {
  return `[tljs:${RUN_ID}] ${label}`;
}
