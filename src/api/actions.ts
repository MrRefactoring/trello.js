import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Actions {
  constructor(private client: Client) { }

  /**
   * Get an Action */
  async getAction<T = any>(parameters: Parameters.GetActionsId, callback: Callback<T>): Promise<void>;
  /**
   * Get an Action */
  async getAction<T = any>(parameters: Parameters.GetActionsId, callback?: undefined): Promise<T>;
  async getAction<T = any>(parameters: Parameters.GetActionsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}`,
      method: 'GET',
      params: {
        display: parameters.display,
        entities: parameters.entities,
        fields: parameters.fields,
        member: parameters.member,
        member_fields: parameters.member_fields,
        memberCreator: parameters.memberCreator,
        memberCreator_fields: parameters.memberCreator_fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionsId' });
  }

  /**
   * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment. */
  async updateAction<T = any>(parameters: Parameters.PutActionsId, callback: Callback<T>): Promise<void>;
  /**
   * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment. */
  async updateAction<T = any>(parameters: Parameters.PutActionsId, callback?: undefined): Promise<T>;
  async updateAction<T = any>(parameters: Parameters.PutActionsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}`,
      method: 'PUT',
      params: {
        text: parameters.text,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'putActionsId' });
  }

  /**
   * Delete a specific action. Only comment actions can be deleted. */
  async deleteAction<T = any>(parameters: Parameters.DeleteActionsId, callback: Callback<T>): Promise<void>;
  /**
   * Delete a specific action. Only comment actions can be deleted. */
  async deleteAction<T = any>(parameters: Parameters.DeleteActionsId, callback?: undefined): Promise<T>;
  async deleteAction<T = any>(parameters: Parameters.DeleteActionsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteAction' });
  }

  /**
   * Get a specific property of an action */
  async getActionField<T = Models.Action>(parameters: Parameters.GetActionsIdField, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific property of an action */
  async getActionField<T = Models.Action>(parameters: Parameters.GetActionsIdField, callback?: undefined): Promise<T>;
  async getActionField<T = Models.Action>(parameters: Parameters.GetActionsIdField, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/${parameters.field}`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionField' });
  }

  /**
   * Get the Board for an Action */
  async getActionBoard<T = Models.Board>(parameters: Parameters.GetActionsIdBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the Board for an Action */
  async getActionBoard<T = Models.Board>(parameters: Parameters.GetActionsIdBoard, callback?: undefined): Promise<T>;
  async getActionBoard<T = Models.Board>(parameters: Parameters.GetActionsIdBoard, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionBoard' });
  }

  /**
   * Get the card for an action */
  async getActionCard<T = Models.Card>(parameters: Parameters.GetActionsIdCard, callback: Callback<T>): Promise<void>;
  /**
   * Get the card for an action */
  async getActionCard<T = Models.Card>(parameters: Parameters.GetActionsIdCard, callback?: undefined): Promise<T>;
  async getActionCard<T = Models.Card>(parameters: Parameters.GetActionsIdCard, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/card`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionCard' });
  }

  /**
   * Get the List for an Action */
  async getActionList<T = Models.List>(parameters: Parameters.GetActionsIdList, callback: Callback<T>): Promise<void>;
  /**
   * Get the List for an Action */
  async getActionList<T = Models.List>(parameters: Parameters.GetActionsIdList, callback?: undefined): Promise<T>;
  async getActionList<T = Models.List>(parameters: Parameters.GetActionsIdList, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/list`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionList' });
  }

  /**
   * Gets the member of an action (not the creator) */
  async getActionMember<T = Models.Member>(parameters: Parameters.GetActionsIdMember, callback: Callback<T>): Promise<void>;
  /**
   * Gets the member of an action (not the creator) */
  async getActionMember<T = Models.Member>(parameters: Parameters.GetActionsIdMember, callback?: undefined): Promise<T>;
  async getActionMember<T = Models.Member>(parameters: Parameters.GetActionsIdMember, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/member`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionMember' });
  }

  /**
   * Get the Member who created the Action */
  async getActionMemberCreator<T = Models.Member>(parameters: Parameters.GetActionsIdMembercreator, callback: Callback<T>): Promise<void>;
  /**
   * Get the Member who created the Action */
  async getActionMemberCreator<T = Models.Member>(parameters: Parameters.GetActionsIdMembercreator, callback?: undefined): Promise<T>;
  async getActionMemberCreator<T = Models.Member>(parameters: Parameters.GetActionsIdMembercreator, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/memberCreator`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionMemberCreator' });
  }

  /**
   * Get the Organization of an Action */
  async getActionOrganization<T = Models.Organization>(parameters: Parameters.GetActionsIdOrganization, callback: Callback<T>): Promise<void>;
  /**
   * Get the Organization of an Action */
  async getActionOrganization<T = Models.Organization>(parameters: Parameters.GetActionsIdOrganization, callback?: undefined): Promise<T>;
  async getActionOrganization<T = Models.Organization>(parameters: Parameters.GetActionsIdOrganization, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/organization`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionOrganization' });
  }

  /**
   * Update a comment action */
  async updateActionText<T = any>(parameters: Parameters.PutActionsIdText, callback: Callback<T>): Promise<void>;
  /**
   * Update a comment action */
  async updateActionText<T = any>(parameters: Parameters.PutActionsIdText, callback?: undefined): Promise<T>;
  async updateActionText<T = any>(parameters: Parameters.PutActionsIdText, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.id}/text`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'updateActionText' });
  }

  /**
   * List reactions for an action */
  async getActionReactions<T = any>(parameters: Parameters.GetActionsIdactionReactions, callback: Callback<T>): Promise<void>;
  /**
   * List reactions for an action */
  async getActionReactions<T = any>(parameters: Parameters.GetActionsIdactionReactions, callback?: undefined): Promise<T>;
  async getActionReactions<T = any>(parameters: Parameters.GetActionsIdactionReactions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.idAction}/reactions`,
      method: 'GET',
      params: {
        member: parameters.member,
        emoji: parameters.emoji,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionReactions' });
  }

  /**
   * Adds a new reaction to an action */
  async addActionReaction<T = any>(parameters: Parameters.PostActionsIdactionReactions, callback: Callback<T>): Promise<void>;
  /**
   * Adds a new reaction to an action */
  async addActionReaction<T = any>(parameters: Parameters.PostActionsIdactionReactions, callback?: undefined): Promise<T>;
  async addActionReaction<T = any>(parameters: Parameters.PostActionsIdactionReactions, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.idAction}/reactions`,
      method: 'POST',
      data: {
        shortName: parameters.shortName,
        skinVariation: parameters.skinVariation,
        native: parameters.native,
        unified: parameters.unified,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'addActionReaction' });
  }

  /**
   * Get information for a reaction */
  async getActionReaction<T = any>(parameters: Parameters.GetActionsIdactionReactionsId, callback: Callback<T>): Promise<void>;
  /**
   * Get information for a reaction */
  async getActionReaction<T = any>(parameters: Parameters.GetActionsIdactionReactionsId, callback?: undefined): Promise<T>;
  async getActionReaction<T = any>(parameters: Parameters.GetActionsIdactionReactionsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
      method: 'GET',
      params: {
        member: parameters.member,
        emoji: parameters.emoji,
      },
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionReaction' });
  }

  /**
   * Deletes a reaction */
  async deleteActionReaction<T = any>(parameters: Parameters.DeleteActionsIdactionReactionsId, callback: Callback<T>): Promise<void>;
  /**
   * Deletes a reaction */
  async deleteActionReaction<T = any>(parameters: Parameters.DeleteActionsIdactionReactionsId, callback?: undefined): Promise<T>;
  async deleteActionReaction<T = any>(parameters: Parameters.DeleteActionsIdactionReactionsId, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
      method: 'DELETE',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'deleteActionReaction' });
  }

  /**
   * List a summary of all reactions for an action */
  async getActionReactionSummary<T = any>(parameters: Parameters.GetActionsIdactionReactionsummary, callback: Callback<T>): Promise<void>;
  /**
   * List a summary of all reactions for an action */
  async getActionReactionSummary<T = any>(parameters: Parameters.GetActionsIdactionReactionsummary, callback?: undefined): Promise<T>;
  async getActionReactionSummary<T = any>(parameters: Parameters.GetActionsIdactionReactionsummary, callback?: Callback<T>): Promise<void | T> {
    const config = ({
      url: `/actions/${parameters.idAction}/reactionsSummary`,
      method: 'GET',
    } as RequestConfig);

    return this.client.sendRequest(config, callback, { methodName: 'getActionReactionSummary' });
  }
}
