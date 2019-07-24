import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  Actions,
  Batch,
  Board,
  Cards,
  CheckLists,
  CustomFields,
  Enterprises,
  Labels,
  Lists,
  Members,
  Notifications,
  Organizations,
  Reactions,
  Search,
  Tokens,
  Types,
  Webhooks
} from './api';

export interface IConfig {
  key: string;
  token: string;
  timeout?: number;
}

export class TrelloClient {
  public actions: Actions;
  public batch: Batch;
  public board: Board;
  public cards: Cards;
  public checkLists: CheckLists;
  public customFields: CustomFields;
  public enterprises: Enterprises;
  public labels: Labels;
  public lists: Lists;
  public members: Members;
  public notifications: Notifications;
  public organizations: Organizations;
  public reactions: Reactions;
  public search: Search;
  public tokens: Tokens;
  public types: Types;
  public webhooks: Webhooks;

  private requestInstance: AxiosInstance;

  constructor(private readonly config: IConfig) {
    this.requestInstance = axios.create({
      baseURL: 'https://api.trello.com/1',
      proxy: false,
      timeout: config.timeout
    });

    this.actions = new Actions(this);
    this.batch = new Batch(this);
    this.board = new Board(this);
    this.cards = new Cards(this);
    this.checkLists = new CheckLists(this);
    this.customFields = new CustomFields(this);
    this.enterprises = new Enterprises(this);
    this.labels = new Labels(this);
    this.lists = new Lists(this);
    this.members = new Members(this);
    this.notifications = new Notifications(this);
    this.organizations = new Organizations(this);
    this.reactions = new Reactions(this);
    this.search = new Search(this);
    this.tokens = new Tokens(this);
    this.types = new Types(this);
    this.webhooks = new Webhooks(this);
  }

  public async sendRequest(options: AxiosRequestConfig, callback?: (err: any, data: any) => void): Promise<any> {
    options.params = {
      key: this.config.key,
      token: this.config.token,
      ...options.params
    };

    if (callback) {
      try {
        const response = await this.requestInstance.request(options);
        callback(undefined, response.data);
      } catch (e) {
        callback(e, undefined);
      }
      return;
    }

    const response = await this.requestInstance.request(options);

    return response.data;
  }
}
