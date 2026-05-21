import { z } from 'zod';
/**
 * @deprecated Use `z.string()` directly. `TrelloIDSchema` / `TrelloID` are kept only for backward compatibility with
 *   code that imported them from the public API — the generated codebase no longer references them internally.
 */

export const TrelloIDSchema = z.string();

export type TrelloID = z.infer<typeof TrelloIDSchema>;
