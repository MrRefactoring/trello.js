export interface PollOptions {
  maxAttempts?: number;
  initialDelayMs?: number;
  factor?: number;
}

export async function waitFor<T>(
  fn: () => Promise<T>,
  predicate: (value: T) => boolean,
  options: PollOptions = {},
): Promise<T> {
  const { maxAttempts = 5, initialDelayMs = 500, factor = 2 } = options;
  let delay = initialDelayMs;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const value = await fn();

    if (predicate(value)) {
      return value;
    }

    if (attempt < maxAttempts - 1) {
      await new Promise<void>(resolve => setTimeout(resolve, delay));
      delay = Math.round(delay * factor);
    }
  }

  throw new Error(`waitFor: condition not satisfied after ${maxAttempts} attempts`);
}
