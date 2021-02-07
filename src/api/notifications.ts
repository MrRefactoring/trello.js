import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Notifications {
  constructor(private client: Client) { }
  async getNotificationsId<T = any>(parameters: Parameters.GetNotificationsId, callback: Callback<T>): Promise<void>;
  async getNotificationsId<T = any>(parameters: Parameters.GetNotificationsId, callback?: undefined): Promise<T>;
  async getNotificationsId<T = any>(parameters: Parameters.GetNotificationsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        board: parameters.board,
        board_fields: parameters.board_fields,
        card: parameters.card,
        card_fields: parameters.card_fields,
        display: parameters.display,
        entities: parameters.entities,
        fields: parameters.fields,
        list: parameters.list,
        member: parameters.member,
        member_fields: parameters.member_fields,
        memberCreator: parameters.memberCreator,
        memberCreator_fields: parameters.memberCreator_fields,
        organization: parameters.organization,
        organization_fields: parameters.organization_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationsId' });
  }
  /**
     * Update the read status of a notification */
  async putNotificationsId<T = any>(parameters: Parameters.PutNotificationsId, callback: Callback<T>): Promise<void>;
  /**
     * Update the read status of a notification */
  async putNotificationsId<T = any>(parameters: Parameters.PutNotificationsId, callback?: undefined): Promise<T>;
  async putNotificationsId<T = any>(parameters: Parameters.PutNotificationsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        unread: parameters.unread,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putNotificationsId' });
  }
  /**
     * Get a specific property of a notification */
  async getNotificationsIdField<T = any>(parameters: Parameters.GetNotificationsIdField, callback: Callback<T>): Promise<void>;
  /**
     * Get a specific property of a notification */
  async getNotificationsIdField<T = any>(parameters: Parameters.GetNotificationsIdField, callback?: undefined): Promise<T>;
  async getNotificationsIdField<T = any>(parameters: Parameters.GetNotificationsIdField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/${parameters.field}`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationsIdField' });
  }
  /**
     * Mark all notifications as read */
  async postNotificationsAllRead<T = any>(parameters: Parameters.PostNotificationsAllRead, callback: Callback<T>): Promise<void>;
  /**
     * Mark all notifications as read */
  async postNotificationsAllRead<T = any>(parameters: Parameters.PostNotificationsAllRead, callback?: undefined): Promise<T>;
  async postNotificationsAllRead<T = any>(parameters: Parameters.PostNotificationsAllRead, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: '/notifications/all/read',
      method: 'POST',
      params: {
        key: parameters.key,
        token: parameters.token,
        read: parameters.read,
        ids: parameters.ids,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'postNotificationsAllRead' });
  }
  /**
     * Update Notification's read status */
  async putNotificationsIdUnread<T = any>(parameters: Parameters.PutNotificationsIdUnread, callback: Callback<T>): Promise<void>;
  /**
     * Update Notification's read status */
  async putNotificationsIdUnread<T = any>(parameters: Parameters.PutNotificationsIdUnread, callback?: undefined): Promise<T>;
  async putNotificationsIdUnread<T = any>(parameters: Parameters.PutNotificationsIdUnread, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/unread`,
      method: 'PUT',
      params: {
        key: parameters.key,
        token: parameters.token,
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putNotificationsIdUnread' });
  }
  /**
     * Get the board a notification is associated with */
  async getNotificationsIdBoard<T = any>(parameters: Parameters.GetNotificationsIdBoard, callback: Callback<T>): Promise<void>;
  /**
     * Get the board a notification is associated with */
  async getNotificationsIdBoard<T = any>(parameters: Parameters.GetNotificationsIdBoard, callback?: undefined): Promise<T>;
  async getNotificationsIdBoard<T = any>(parameters: Parameters.GetNotificationsIdBoard, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/board`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationsIdBoard' });
  }
  /**
     * Get the card a notification is associated with */
  async getNotificationsIdCard<T = any>(parameters: Parameters.GetNotificationsIdCard, callback: Callback<T>): Promise<void>;
  /**
     * Get the card a notification is associated with */
  async getNotificationsIdCard<T = any>(parameters: Parameters.GetNotificationsIdCard, callback?: undefined): Promise<T>;
  async getNotificationsIdCard<T = any>(parameters: Parameters.GetNotificationsIdCard, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/card`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationsIdCard' });
  }
  /**
     * Get the list a notification is associated with */
  async getNotificationsIdList<T = any>(parameters: Parameters.GetNotificationsIdList, callback: Callback<T>): Promise<void>;
  /**
     * Get the list a notification is associated with */
  async getNotificationsIdList<T = any>(parameters: Parameters.GetNotificationsIdList, callback?: undefined): Promise<T>;
  async getNotificationsIdList<T = any>(parameters: Parameters.GetNotificationsIdList, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/list`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationsIdList' });
  }
  /**
     * Get the member (not the creator) a notification is about */
  async notificationsidmember<T = any>(parameters: Parameters.Notificationsidmember, callback: Callback<T>): Promise<void>;
  /**
     * Get the member (not the creator) a notification is about */
  async notificationsidmember<T = any>(parameters: Parameters.Notificationsidmember, callback?: undefined): Promise<T>;
  async notificationsidmember<T = any>(parameters: Parameters.Notificationsidmember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/member`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'notificationsidmember' });
  }
  /**
     * Get the member who created the notification */
  async getNotificationsIdMembercreator<T = any>(parameters: Parameters.GetNotificationsIdMembercreator, callback: Callback<T>): Promise<void>;
  /**
     * Get the member who created the notification */
  async getNotificationsIdMembercreator<T = any>(parameters: Parameters.GetNotificationsIdMembercreator, callback?: undefined): Promise<T>;
  async getNotificationsIdMembercreator<T = any>(parameters: Parameters.GetNotificationsIdMembercreator, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/memberCreator`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationsIdMembercreator' });
  }
  /**
     * Get the organization a notification is associated with */
  async getNotificationsIdOrganization<T = any>(parameters: Parameters.GetNotificationsIdOrganization, callback: Callback<T>): Promise<void>;
  /**
     * Get the organization a notification is associated with */
  async getNotificationsIdOrganization<T = any>(parameters: Parameters.GetNotificationsIdOrganization, callback?: undefined): Promise<T>;
  async getNotificationsIdOrganization<T = any>(parameters: Parameters.GetNotificationsIdOrganization, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/notifications/${parameters.id}/organization`,
      method: 'GET',
      params: {
        key: parameters.key,
        token: parameters.token,
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationsIdOrganization' });
  }
}
