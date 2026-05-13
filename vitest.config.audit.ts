import { mergeConfig } from 'vitest/config';
import liveConfig from './vitest.config.live';

// Live test suite with strict schemas: any key the Trello API returns that the
// schemas don't declare raises a ZodError. Used by `pnpm audit:schemas` and the
// daily schema-audit workflow to surface gaps between schemas and the live API.
export default mergeConfig(liveConfig, {
  test: {
    env: { TRELLO_STRICT_SCHEMAS: 'true' },
  },
});
