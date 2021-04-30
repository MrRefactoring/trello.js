import * as Models from './models';
import * as Parameters from './parameters';
import { Client } from '../clients';
import { Callback, RequestConfig } from '../types';

export class Actions {
  constructor(private client: Client) {
  }

  /**
   * Get an Action */
  async getAction<T = unknown>(parameters: Parameters.GetAction, callback: Callback<T>): Promise<void>;
  /**
   * Get an Action */
  async getAction<T = unknown>(parameters: Parameters.GetAction, callback?: never): Promise<T>;
  async getAction<T = unknown>(parameters: Parameters.GetAction, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}`,
      method: 'GET',
      params: {
        display: parameters.display,
        entities: parameters.entities,
        fields: parameters.fields,
        member: parameters.member,
        member_fields: parameters.memberFields,
        memberCreator: parameters.memberCreator,
        memberCreator_fields: parameters.memberCreatorFields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getAction' });
  }

  /**
   * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment. */
  async updateAction<T = unknown>(parameters: Parameters.UpdateAction, callback: Callback<T>): Promise<void>;
  /**
   * Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment. */
  async updateAction<T = unknown>(parameters: Parameters.UpdateAction, callback?: never): Promise<T>;
  async updateAction<T = unknown>(parameters: Parameters.UpdateAction, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}`,
      method: 'PUT',
      params: {
        text: parameters.text,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateAction' });
  }

  /**
   * Delete a specific action. Only comment actions can be deleted. */
  async deleteAction<T = unknown>(parameters: Parameters.DeleteAction, callback: Callback<T>): Promise<void>;
  /**
   * Delete a specific action. Only comment actions can be deleted. */
  async deleteAction<T = unknown>(parameters: Parameters.DeleteAction, callback?: never): Promise<T>;
  async deleteAction<T = unknown>(parameters: Parameters.DeleteAction, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteAction' });
  }

  /**
   * Get a specific property of an action */
  async getActionField<T = Models.Action>(parameters: Parameters.GetActionField, callback: Callback<T>): Promise<void>;
  /**
   * Get a specific property of an action */
  async getActionField<T = Models.Action>(parameters: Parameters.GetActionField, callback?: never): Promise<T>;
  async getActionField<T = Models.Action>(parameters: Parameters.GetActionField, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/${parameters.field}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionField' });
  }

  /**
   * Get the Board for an Action */
  async getActionBoard<T = Models.Board>(parameters: Parameters.GetActionBoard, callback: Callback<T>): Promise<void>;
  /**
   * Get the Board for an Action */
  async getActionBoard<T = Models.Board>(parameters: Parameters.GetActionBoard, callback?: never): Promise<T>;
  async getActionBoard<T = Models.Board>(parameters: Parameters.GetActionBoard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/board`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionBoard' });
  }

  /**
   * Get the card for an action */
  async getActionCard<T = Models.Card>(parameters: Parameters.GetActionCard, callback: Callback<T>): Promise<void>;
  /**
   * Get the card for an action */
  async getActionCard<T = Models.Card>(parameters: Parameters.GetActionCard, callback?: never): Promise<T>;
  async getActionCard<T = Models.Card>(parameters: Parameters.GetActionCard, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/card`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionCard' });
  }

  /**
   * Get the List for an Action */
  async getActionList<T = Models.List>(parameters: Parameters.GetActionList, callback: Callback<T>): Promise<void>;
  /**
   * Get the List for an Action */
  async getActionList<T = Models.List>(parameters: Parameters.GetActionList, callback?: never): Promise<T>;
  async getActionList<T = Models.List>(parameters: Parameters.GetActionList, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/list`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionList' });
  }

  /**
   * Gets the member of an action (not the creator) */
  async getActionMember<T = Models.Member>(parameters: Parameters.GetActionMember, callback: Callback<T>): Promise<void>;
  /**
   * Gets the member of an action (not the creator) */
  async getActionMember<T = Models.Member>(parameters: Parameters.GetActionMember, callback?: never): Promise<T>;
  async getActionMember<T = Models.Member>(parameters: Parameters.GetActionMember, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/member`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionMember' });
  }

  /**
   * Get the Member who created the Action */
  async getActionMemberCreator<T = Models.Member>(parameters: Parameters.GetActionMemberCreator, callback: Callback<T>): Promise<void>;
  /**
   * Get the Member who created the Action */
  async getActionMemberCreator<T = Models.Member>(parameters: Parameters.GetActionMemberCreator, callback?: never): Promise<T>;
  async getActionMemberCreator<T = Models.Member>(parameters: Parameters.GetActionMemberCreator, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/memberCreator`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionMemberCreator' });
  }

  /**
   * Get the Organization of an Action */
  async getActionOrganization<T = Models.Organization>(parameters: Parameters.GetActionOrganization, callback: Callback<T>): Promise<void>;
  /**
   * Get the Organization of an Action */
  async getActionOrganization<T = Models.Organization>(parameters: Parameters.GetActionOrganization, callback?: never): Promise<T>;
  async getActionOrganization<T = Models.Organization>(parameters: Parameters.GetActionOrganization, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/organization`,
      method: 'GET',
      params: {
        fields: parameters.fields,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionOrganization' });
  }

  /**
   * Update a comment action */
  async updateActionText<T = unknown>(parameters: Parameters.UpdateActionText, callback: Callback<T>): Promise<void>;
  /**
   * Update a comment action */
  async updateActionText<T = unknown>(parameters: Parameters.UpdateActionText, callback?: never): Promise<T>;
  async updateActionText<T = unknown>(parameters: Parameters.UpdateActionText, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.id}/text`,
      method: 'PUT',
      params: {
        value: parameters.value,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'updateActionText' });
  }

  /**
   * List reactions for an action */
  async getActionReactions<T = unknown>(parameters: Parameters.GetActionReactions, callback: Callback<T>): Promise<void>;
  /**
   * List reactions for an action */
  async getActionReactions<T = unknown>(parameters: Parameters.GetActionReactions, callback?: never): Promise<T>;
  async getActionReactions<T = unknown>(parameters: Parameters.GetActionReactions, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.idAction}/reactions`,
      method: 'GET',
      params: {
        member: parameters.member,
        emoji: parameters.emoji,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionReactions' });
  }

  /**
   * Adds a new reaction to an action */
  async addActionReaction<T = unknown>(parameters: Parameters.AddActionReaction, callback: Callback<T>): Promise<void>;
  /**
   * Adds a new reaction to an action */
  async addActionReaction<T = unknown>(parameters: Parameters.AddActionReaction, callback?: never): Promise<T>;
  async addActionReaction<T = unknown>(parameters: Parameters.AddActionReaction, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.idAction}/reactions`,
      method: 'POST',
      data: {
        shortName: parameters.shortName,
        skinVariation: parameters.skinVariation,
        native: parameters.native,
        unified: parameters.unified,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'addActionReaction' });
  }

  /**
   * Get information for a reaction */
  async getActionReaction<T = unknown>(parameters: Parameters.GetActionReaction, callback: Callback<T>): Promise<void>;
  /**
   * Get information for a reaction */
  async getActionReaction<T = unknown>(parameters: Parameters.GetActionReaction, callback?: never): Promise<T>;
  async getActionReaction<T = unknown>(parameters: Parameters.GetActionReaction, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
      method: 'GET',
      params: {
        member: parameters.member,
        emoji: parameters.emoji,
      },
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionReaction' });
  }

  /**
   * Deletes a reaction */
  async deleteActionReaction<T = unknown>(parameters: Parameters.DeleteActionReaction, callback: Callback<T>): Promise<void>;
  /**
   * Deletes a reaction */
  async deleteActionReaction<T = unknown>(parameters: Parameters.DeleteActionReaction, callback?: never): Promise<T>;
  async deleteActionReaction<T = unknown>(parameters: Parameters.DeleteActionReaction, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(config, callback, { methodName: 'deleteActionReaction' });
  }

  /**
   * List a summary of all reactions for an action */
  async getActionReactionSummary<T = unknown>(parameters: Parameters.GetActionReactionSummary, callback: Callback<T>): Promise<void>;
  /**
   * List a summary of all reactions for an action */
  async getActionReactionSummary<T = unknown>(parameters: Parameters.GetActionReactionSummary, callback?: never): Promise<T>;
  async getActionReactionSummary<T = unknown>(parameters: Parameters.GetActionReactionSummary, callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: `/actions/${parameters.idAction}/reactionsSummary`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback, { methodName: 'getActionReactionSummary' });
  }
}
