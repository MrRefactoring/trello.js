import type { Client, Request } from '~/interfaces';
import type { TrelloId } from '~/schemas/common';

export class Members {
  constructor(private client: Client) {}

  getBoards<T = {id: string}[]>(memberId: TrelloId): Promise<T> {
    const request: Request = {
      url: `/members/${memberId}/boards`,
      method: 'GET',
      query: {
        fields: 'id', // todo
      }
    }

    return this.client.sendRequest(request);
  }
}
