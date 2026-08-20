import type { z } from 'zod';
import { openEnum } from '#/core';

export const ChannelSchema = openEnum(['email']);

export type Channel = z.infer<typeof ChannelSchema>;
