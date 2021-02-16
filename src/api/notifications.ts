import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Notifications {
  constructor(private client: Client) { }

  async getNotification<T = any>(parameters: Parameters.GetNotification, callback: Callback<T>): Promise<void>;
  async getNotification<T = any>(parameters: Parameters.GetNotification, callback?: undefined): Promise<T>;
  async getNotification<T = any>(parameters: Parameters.GetNotification, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}`,
      method: 'GET',
      params: {
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
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotification' });
  }

  /**
   * Update the read status of a notification */
  async updateNotification<T = any>(parameters: Parameters.UpdateNotification, callback: Callback<T>): Promise<void>;
  /**
   * Update the read status of a notification */
  async updateNotification<T = any>(parameters: Parameters.UpdateNotification, callback?: undefined): Promise<T>;
  async updateNotification<T = any>(parameters: Parameters.UpdateNotification, callback?: Callback<T>): Promise<void | T> {
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
  async getNotificationField<T = any>(parameters: Parameters.GetNotificationField, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific property of a notification */
  async getNotificationField<T = any>(parameters: Parameters.GetNotificationField, callback?: undefined): Promise<T>;
  async getNotificationField<T = any>(parameters: Parameters.GetNotificationField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/notifications/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getNotificationField' });
  }

  /**
   * Mark all notifications as read */
  async markAllNotificationsAsRead<T = any>(parameters?: Parameters.MarkAllNotificationsAsRead, callback?: Callback<T>): Promise<void>;
  /**
   * Mark all notifications as read */
  async markAllNotificationsAsRead<T = any>(parameters?: Parameters.MarkAllNotificationsAsRead, callback?: undefined): Promise<T>;
  async markAllNotificationsAsRead<T = any>(parameters?: Parameters.MarkAllNotificationsAsRead, callback?: Callback<T>): Promise<void | T> {
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
  async updateNotificationReadStatus<T = any>(parameters: Parameters.UpdateNotificationReadStatus, callback: Callback<T>): Promise<void>;
  /**
   * Update Notification's read status */
  async updateNotificationReadStatus<T = any>(parameters: Parameters.UpdateNotificationReadStatus, callback?: undefined): Promise<T>;
  async updateNotificationReadStatus<T = any>(parameters: Parameters.UpdateNotificationReadStatus, callback?: Callback<T>): Promise<void | T> {
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
  async getNotificationBoard<T = any>(parameters: Parameters.GetNotificationBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the board a notification is associated with */
  async getNotificationBoard<T = any>(parameters: Parameters.GetNotificationBoard, callback?: undefined): Promise<T>;
  async getNotificationBoard<T = any>(parameters: Parameters.GetNotificationBoard, callback?: Callback<T>): Promise<void | T> {
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
  async getNotificationCard<T = any>(parameters: Parameters.GetNotificationCard, callback: Callback<T>): Promise<void>;
  /**
   * Get the card a notification is associated with */
  async getNotificationCard<T = any>(parameters: Parameters.GetNotificationCard, callback?: undefined): Promise<T>;
  async getNotificationCard<T = any>(parameters: Parameters.GetNotificationCard, callback?: Callback<T>): Promise<void | T> {
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
  async getNotificationList<T = any>(parameters: Parameters.GetNotificationList, callback: Callback<T>): Promise<void>;
  /**
   * Get the list a notification is associated with */
  async getNotificationList<T = any>(parameters: Parameters.GetNotificationList, callback?: undefined): Promise<T>;
  async getNotificationList<T = any>(parameters: Parameters.GetNotificationList, callback?: Callback<T>): Promise<void | T> {
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
  async getNotificationMember<T = any>(parameters: Parameters.GetNotificationMember, callback: Callback<T>): Promise<void>;
  /**
   * Get the member (not the creator) a notification is about */
  async getNotificationMember<T = any>(parameters: Parameters.GetNotificationMember, callback?: undefined): Promise<T>;
  async getNotificationMember<T = any>(parameters: Parameters.GetNotificationMember, callback?: Callback<T>): Promise<void | T> {
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
  async getNotificationMemberCreator<T = any>(parameters: Parameters.GetNotificationMemberCreator, callback: Callback<T>): Promise<void>;
  /**
   * Get the member who created the notification */
  async getNotificationMemberCreator<T = any>(parameters: Parameters.GetNotificationMemberCreator, callback?: undefined): Promise<T>;
  async getNotificationMemberCreator<T = any>(parameters: Parameters.GetNotificationMemberCreator, callback?: Callback<T>): Promise<void | T> {
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
  async getNotificationOrganization<T = any>(parameters: Parameters.GetNotificationOrganization, callback: Callback<T>): Promise<void>;
  /**
   * Get the organization a notification is associated with */
  async getNotificationOrganization<T = any>(parameters: Parameters.GetNotificationOrganization, callback?: undefined): Promise<T>;
  async getNotificationOrganization<T = any>(parameters: Parameters.GetNotificationOrganization, callback?: Callback<T>): Promise<void | T> {
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
