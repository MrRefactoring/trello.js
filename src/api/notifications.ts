import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Notifications {
  constructor(private client: Client) {
  }

  async getNotification<T = unknown>(parameters: Parameters.GetNotification, callback: Callback<T>): Promise<void>;
  async getNotification<T = unknown>(parameters: Parameters.GetNotification, callback?: never): Promise<T>;
  async getNotification<T = unknown>(parameters: Parameters.GetNotification, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}`,
      method: 'GET',
      params: {
        board: parameters.board,
        board_fields: parameters.boardFields,
        card: parameters.card,
        card_fields: parameters.cardFields,
        display: parameters.display,
        entities: parameters.entities,
        fields: parameters.fields,
        list: parameters.list,
        member: parameters.member,
        member_fields: parameters.memberFields,
        memberCreator: parameters.memberCreator,
        memberCreator_fields: parameters.memberCreatorFields,
        organization: parameters.organization,
        organization_fields: parameters.organizationFields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotification' });
  }

  /**
   * Update the read status of a notification */
  async updateNotification<T = unknown>(parameters: Parameters.UpdateNotification, callback: Callback<T>): Promise<void>;
  /**
   * Update the read status of a notification */
  async updateNotification<T = unknown>(parameters: Parameters.UpdateNotification, callback?: never): Promise<T>;
  async updateNotification<T = unknown>(parameters: Parameters.UpdateNotification, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}`,
      method: 'PUT',
      params: {
        unread: parameters.unread,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateNotification' });
  }

  /**
   * Get a specific property of a notification */
  async getNotificationField<T = unknown>(parameters: Parameters.GetNotificationField, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific property of a notification */
  async getNotificationField<T = unknown>(parameters: Parameters.GetNotificationField, callback?: never): Promise<T>;
  async getNotificationField<T = unknown>(parameters: Parameters.GetNotificationField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationField' });
  }

  /**
   * Mark all notifications as read */
  async markAllNotificationsAsRead<T = unknown>(parameters?: Parameters.MarkAllNotificationsAsRead, callback?: Callback<T>): Promise<void>;
  /**
   * Mark all notifications as read */
  async markAllNotificationsAsRead<T = unknown>(parameters?: Parameters.MarkAllNotificationsAsRead, callback?: never): Promise<T>;
  async markAllNotificationsAsRead<T = unknown>(parameters?: Parameters.MarkAllNotificationsAsRead, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/notifications/all/read',
      method: 'POST',
      params: {
        read: parameters?.read,
        ids: parameters?.ids,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'markAllNotificationsAsRead' });
  }

  /**
   * Update Notification's read status */
  async updateNotificationReadStatus<T = unknown>(parameters: Parameters.UpdateNotificationReadStatus, callback: Callback<T>): Promise<void>;
  /**
   * Update Notification's read status */
  async updateNotificationReadStatus<T = unknown>(parameters: Parameters.UpdateNotificationReadStatus, callback?: never): Promise<T>;
  async updateNotificationReadStatus<T = unknown>(parameters: Parameters.UpdateNotificationReadStatus, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/unread`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateNotificationReadStatus' });
  }

  /**
   * Get the board a notification is associated with */
  async getNotificationBoard<T = unknown>(parameters: Parameters.GetNotificationBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the board a notification is associated with */
  async getNotificationBoard<T = unknown>(parameters: Parameters.GetNotificationBoard, callback?: never): Promise<T>;
  async getNotificationBoard<T = unknown>(parameters: Parameters.GetNotificationBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationBoard' });
  }

  /**
   * Get the card a notification is associated with */
  async getNotificationCard<T = unknown>(parameters: Parameters.GetNotificationCard, callback: Callback<T>): Promise<void>;
  /**
   * Get the card a notification is associated with */
  async getNotificationCard<T = unknown>(parameters: Parameters.GetNotificationCard, callback?: never): Promise<T>;
  async getNotificationCard<T = unknown>(parameters: Parameters.GetNotificationCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/card`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationCard' });
  }

  /**
   * Get the list a notification is associated with */
  async getNotificationList<T = unknown>(parameters: Parameters.GetNotificationList, callback: Callback<T>): Promise<void>;
  /**
   * Get the list a notification is associated with */
  async getNotificationList<T = unknown>(parameters: Parameters.GetNotificationList, callback?: never): Promise<T>;
  async getNotificationList<T = unknown>(parameters: Parameters.GetNotificationList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/list`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationList' });
  }

  /**
   * Get the member (not the creator) a notification is about */
  async getNotificationMember<T = unknown>(parameters: Parameters.GetNotificationMember, callback: Callback<T>): Promise<void>;
  /**
   * Get the member (not the creator) a notification is about */
  async getNotificationMember<T = unknown>(parameters: Parameters.GetNotificationMember, callback?: never): Promise<T>;
  async getNotificationMember<T = unknown>(parameters: Parameters.GetNotificationMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/member`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationMember' });
  }

  /**
   * Get the member who created the notification */
  async getNotificationMemberCreator<T = unknown>(parameters: Parameters.GetNotificationMemberCreator, callback: Callback<T>): Promise<void>;
  /**
   * Get the member who created the notification */
  async getNotificationMemberCreator<T = unknown>(parameters: Parameters.GetNotificationMemberCreator, callback?: never): Promise<T>;
  async getNotificationMemberCreator<T = unknown>(parameters: Parameters.GetNotificationMemberCreator, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/memberCreator`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationMemberCreator' });
  }

  /**
   * Get the organization a notification is associated with */
  async getNotificationOrganization<T = unknown>(parameters: Parameters.GetNotificationOrganization, callback: Callback<T>): Promise<void>;
  /**
   * Get the organization a notification is associated with */
  async getNotificationOrganization<T = unknown>(parameters: Parameters.GetNotificationOrganization, callback?: never): Promise<T>;
  async getNotificationOrganization<T = unknown>(parameters: Parameters.GetNotificationOrganization, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/organization`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationOrganization' });
  }
}
