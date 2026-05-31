import type { Client, SendRequestOptions } from '#/core';
import * as actionsNs from '#/api/actions';
import * as boardsNs from '#/api/boards';
import * as cardsNs from '#/api/cards';
import * as checklistsNs from '#/api/checklists';
import * as customFieldsNs from '#/api/customFields';
import * as emojiNs from '#/api/emoji';
import * as enterprisesNs from '#/api/enterprises';
import * as labelsNs from '#/api/labels';
import * as listsNs from '#/api/lists';
import * as membersNs from '#/api/members';
import * as notificationsNs from '#/api/notifications';
import * as organizationsNs from '#/api/organizations';
import * as pluginsNs from '#/api/plugins';
import * as searchNs from '#/api/search';
import * as tokensNs from '#/api/tokens';
import * as webhooksNs from '#/api/webhooks';

type UnboundModule<M> = {
  [K in keyof M]: M[K] extends (client: Client, params: infer P) => infer R ? (params: P) => R : never;
};

export interface BatchClient {
  actions: UnboundModule<typeof actionsNs>;
  boards: UnboundModule<typeof boardsNs>;
  cards: UnboundModule<typeof cardsNs>;
  checklists: UnboundModule<typeof checklistsNs>;
  customFields: UnboundModule<typeof customFieldsNs>;
  emoji: UnboundModule<typeof emojiNs>;
  enterprises: UnboundModule<typeof enterprisesNs>;
  labels: UnboundModule<typeof labelsNs>;
  lists: UnboundModule<typeof listsNs>;
  members: UnboundModule<typeof membersNs>;
  notifications: UnboundModule<typeof notificationsNs>;
  organizations: UnboundModule<typeof organizationsNs>;
  plugins: UnboundModule<typeof pluginsNs>;
  search: UnboundModule<typeof searchNs>;
  tokens: UnboundModule<typeof tokensNs>;
  webhooks: UnboundModule<typeof webhooksNs>;
}

interface Resolver {
  resolve: (value: unknown) => void;
  reject: (err: Error) => void;
}

function bindNs<M extends Record<string, (c: Client, ...a: never[]) => unknown>>(
  ns: M,
  client: Client,
): UnboundModule<M> {
  return Object.fromEntries(
    Object.entries(ns).map(([key, fn]) => [key, (params: unknown) => fn(client, params as never)]),
  ) as UnboundModule<M>;
}

export function createBatchRunner(realClient: Client) {
  return async function run<const T extends readonly Promise<unknown>[]>(
    builder: (b: BatchClient) => T,
  ): Promise<{ -readonly [K in keyof T]: Awaited<T[K]> }> {
    const urls: string[] = [];
    const resolvers: Resolver[] = [];
    const innerPromises: Promise<unknown>[] = [];

    const capturingClient: Client = {
      sendRequest<R>(opts: SendRequestOptions<R>): Promise<R> {
        const p = new Promise<R>((resolve, reject) => {
          urls.push(opts.url);
          resolvers.push({ resolve: resolve as (v: unknown) => void, reject });
        });
        innerPromises.push(p as Promise<unknown>);

        return p;
      },
    };

    const batchClient: BatchClient = {
      actions: bindNs(actionsNs, capturingClient),
      boards: bindNs(boardsNs, capturingClient),
      cards: bindNs(cardsNs, capturingClient),
      checklists: bindNs(checklistsNs, capturingClient),
      customFields: bindNs(customFieldsNs, capturingClient),
      emoji: bindNs(emojiNs, capturingClient),
      enterprises: bindNs(enterprisesNs, capturingClient),
      labels: bindNs(labelsNs, capturingClient),
      lists: bindNs(listsNs, capturingClient),
      members: bindNs(membersNs, capturingClient),
      notifications: bindNs(notificationsNs, capturingClient),
      organizations: bindNs(organizationsNs, capturingClient),
      plugins: bindNs(pluginsNs, capturingClient),
      search: bindNs(searchNs, capturingClient),
      tokens: bindNs(tokensNs, capturingClient),
      webhooks: bindNs(webhooksNs, capturingClient),
    };

    // Suppress unhandled rejections on the namespace function promises (e.g. boards.getBoard(...))
    // — they reject when their inner promise is rejected, but we return innerPromises directly.
    const builderResult = builder(batchClient);
    builderResult.forEach(p => {
      p.catch(() => {});
    });

    if (urls.length === 0) return [] as unknown as { -readonly [K in keyof T]: Awaited<T[K]> };

    const results = await realClient.sendRequest<Array<Record<string, unknown>>>({
      url: '/batch',
      method: 'GET',
      searchParams: { urls: urls.join(',') },
    });

    for (let i = 0; i < resolvers.length; i++) {
      const item = results[i] as Record<string, unknown> | undefined;

      if (item === undefined) {
        resolvers[i].reject(new Error('Batch request failed: missing response'));
        continue;
      }

      const [statusKey] = Object.keys(item);
      const status = Number(statusKey);

      if (status >= 200 && status < 300) {
        resolvers[i].resolve(item[statusKey]);
      } else {
        resolvers[i].reject(new Error(`Batch request failed: ${JSON.stringify(item)}`));
      }
    }

    return Promise.all(innerPromises) as unknown as { -readonly [K in keyof T]: Awaited<T[K]> };
  };
}
