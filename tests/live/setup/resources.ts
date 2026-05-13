type CleanupFn = () => Promise<void>;

const CLEANUP_ATTEMPTS = 4;

export class ResourceTracker {
  private readonly stack: CleanupFn[] = [];

  defer(fn: CleanupFn): void {
    this.stack.push(fn);
  }

  async cleanup(): Promise<void> {
    const fns = this.stack.splice(0).reverse();

    for (const fn of fns) {
      for (let attempt = 0; attempt < CLEANUP_ATTEMPTS; attempt++) {
        try {
          await fn();
          break;
        } catch {
          if (attempt < CLEANUP_ATTEMPTS - 1) {
            await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
          }
        }
      }
    }
  }
}
