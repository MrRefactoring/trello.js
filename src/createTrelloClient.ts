import { type ClientConfig, createClient } from '#/core';
import { createBatchRunner, type BatchClient } from '#/batchRunner';
import * as actions from '#/api/actions';
import * as boards from '#/api/boards';
import * as cards from '#/api/cards';
import * as checklists from '#/api/checklists';
import * as customFields from '#/api/customFields';
import * as emoji from '#/api/emoji';
import * as enterprises from '#/api/enterprises';
import * as labels from '#/api/labels';
import * as lists from '#/api/lists';
import * as members from '#/api/members';
import * as notifications from '#/api/notifications';
import * as organizations from '#/api/organizations';
import * as plugins from '#/api/plugins';
import * as search from '#/api/search';
import * as tokens from '#/api/tokens';
import * as webhooks from '#/api/webhooks';
import {
  type GetAction,
  type UpdateAction,
  type DeleteAction,
  type GetActionField,
  type GetActionBoard,
  type GetActionCard,
  type GetActionList,
  type GetActionMember,
  type GetActionCreator,
  type GetActionOrganization,
  type UpdateActionText,
  type GetActionReactions,
  type CreateActionReaction,
  type GetActionReaction,
  type DeleteActionReaction,
  type GetActionReactionSummary,
  type GetBoardMemberships,
  type GetBoard,
  type UpdateBoard,
  type DeleteBoard,
  type GetBoardField,
  type GetBoardActions,
  type GetBoardStars,
  type GetBoardChecklists,
  type GetBoardCards,
  type GetBoardCardsByFilter,
  type GetBoardCustomFields,
  type GetBoardLabels,
  type CreateBoardLabel,
  type GetBoardLists,
  type CreateBoardList,
  type GetBoardListsByFilter,
  type GetBoardMembers,
  type InviteBoardMember,
  type UpdateBoardMember,
  type RemoveBoardMember,
  type UpdateBoardMembership,
  type UpdateBoardEmailPosition,
  type UpdateBoardEmailList,
  type UpdateBoardShowSidebar,
  type UpdateBoardShowSidebarActivity,
  type UpdateBoardShowSidebarBoardActions,
  type UpdateBoardShowSidebarMembers,
  type CreateBoard,
  type GenerateBoardCalendarKey,
  type GenerateBoardEmailKey,
  type AddBoardTag,
  type MarkBoardAsViewed,
  type GetBoardPlugins,
  type EnableBoardPlugin,
  type DisableBoardPlugin,
  type GetBoardPowerUps,
  type CreateCard,
  type GetCard,
  type UpdateCard,
  type DeleteCard,
  type GetCardField,
  type GetCardActions,
  type GetCardAttachments,
  type CreateCardAttachment,
  type GetCardAttachment,
  type DeleteCardAttachment,
  type GetCardBoard,
  type GetCardCheckItemStates,
  type GetCardChecklists,
  type CreateCardChecklist,
  type GetCardCheckItem,
  type UpdateCardCheckItem,
  type DeleteCardCheckItem,
  type GetCardList,
  type GetCardMembers,
  type GetCardMembersVoted,
  type VoteOnCard,
  type GetCardPluginData,
  type GetCardStickers,
  type CreateCardSticker,
  type GetCardSticker,
  type UpdateCardSticker,
  type DeleteCardSticker,
  type UpdateCardComment,
  type DeleteCardComment,
  type UpdateCardCustomFieldItem,
  type UpdateCardCustomFields,
  type GetCardCustomFieldItems,
  type CreateCardComment,
  type AddCardLabel,
  type AddCardMember,
  type CreateCardLabel,
  type MarkCardNotificationsRead,
  type RemoveCardLabel,
  type RemoveCardMember,
  type RemoveCardMemberVote,
  type UpdateCardChecklistItem,
  type RemoveCardChecklist,
  type CreateChecklist,
  type GetChecklist,
  type UpdateChecklist,
  type DeleteChecklist,
  type GetChecklistField,
  type UpdateChecklistField,
  type GetChecklistBoard,
  type GetChecklistCards,
  type GetChecklistItems,
  type CreateChecklistItem,
  type GetChecklistItem,
  type DeleteChecklistItem,
  type CreateCustomField,
  type GetCustomField,
  type UpdateCustomField,
  type DeleteCustomField,
  type GetCustomFieldOptions,
  type CreateCustomFieldOption,
  type GetCustomFieldOption,
  type DeleteCustomFieldOption,
  type GetEmoji,
  type GetEnterprise,
  type GetEnterpriseAuditLog,
  type GetEnterpriseAdmins,
  type GetEnterpriseSignUpUrl,
  type GetUser,
  type GetEnterpriseMembers,
  type GetEnterpriseMember,
  type GetEnterpriseTransferrableOrganization,
  type GetEnterpriseBulkTransferrableOrganizations,
  type UpdateEnterpriseJoinRequests,
  type GetEnterpriseClaimableOrganizations,
  type GetEnterprisePendingOrganizations,
  type CreateEnterpriseToken,
  type GetEnterpriseOrganizations,
  type AddEnterpriseOrganization,
  type UpdateEnterpriseMemberLicensed,
  type DeactivateEnterpriseMember,
  type AddEnterpriseAdmin,
  type RemoveEnterpriseAdmin,
  type RemoveEnterpriseOrganization,
  type GetEnterpriseBulkOrganizations,
  type GetLabel,
  type UpdateLabel,
  type DeleteLabel,
  type UpdateLabelField,
  type CreateLabel,
  type GetList,
  type UpdateList,
  type CreateList,
  type ArchiveAllListCards,
  type MoveAllListCards,
  type ArchiveList,
  type MoveListToBoard,
  type UpdateListField,
  type GetListActions,
  type GetListBoard,
  type GetListCards,
  type GetMember,
  type UpdateMember,
  type GetMemberField,
  type GetMemberActions,
  type GetMemberBoardBackgrounds,
  type CreateMemberBoardBackground,
  type GetMemberBoardBackground,
  type UpdateMemberBoardBackground,
  type DeleteMemberBoardBackground,
  type GetMemberBoardStars,
  type StarBoard,
  type GetMemberBoardStar,
  type UpdateMemberBoardStar,
  type UnstarBoard,
  type GetMemberBoards,
  type GetMemberInvitedBoards,
  type GetMemberCards,
  type GetMemberCustomBoardBackgrounds,
  type CreateMemberCustomBoardBackground,
  type GetMemberCustomBoardBackground,
  type UpdateMemberCustomBoardBackground,
  type DeleteMemberCustomBoardBackground,
  type GetMemberCustomEmojis,
  type UploadMemberCustomEmoji,
  type GetMemberCustomEmoji,
  type GetMemberCustomStickers,
  type UploadMemberCustomSticker,
  type GetMemberCustomSticker,
  type DeleteMemberCustomSticker,
  type GetMemberNotifications,
  type GetMemberOrganizations,
  type GetMemberInvitedOrganizations,
  type GetMemberSavedSearches,
  type CreateMemberSavedSearch,
  type GetMemberSavedSearch,
  type UpdateMemberSavedSearch,
  type DeleteMemberSavedSearch,
  type GetMemberTokens,
  type UploadMemberAvatar,
  type DismissMemberOneTimeMessage,
  type GetMemberNotificationChannelSettings,
  type UpdateMemberNotificationChannelSettings,
  type GetMemberNotificationChannelSetting,
  type UpdateMemberNotificationChannelSetting,
  type UpdateMemberNotificationChannelBlockedKey,
  type GetNotification,
  type UpdateNotification,
  type GetNotificationField,
  type MarkAllNotificationsRead,
  type UpdateNotificationUnreadStatus,
  type GetNotificationBoard,
  type GetNotificationCard,
  type GetNotificationList,
  type GetNotificationMember,
  type GetNotificationCreator,
  type GetNotificationOrganization,
  type CreateOrganization,
  type GetOrganization,
  type UpdateOrganization,
  type DeleteOrganization,
  type GetOrganizationField,
  type GetOrganizationActions,
  type GetOrganizationBoards,
  type GetOrganizationExports,
  type CreateOrganizationExport,
  type GetOrganizationMembers,
  type UpdateOrganizationMembers,
  type GetOrganizationMemberships,
  type GetOrganizationMembership,
  type GetOrganizationPluginData,
  type GetOrganizationTags,
  type CreateOrganizationTag,
  type UpdateOrganizationMember,
  type RemoveOrganizationMember,
  type DeactivateOrganizationMember,
  type UploadOrganizationLogo,
  type DeleteOrganizationLogo,
  type RemoveOrganizationMemberFromAllBoards,
  type DeleteOrganizationAssociatedDomain,
  type DeleteOrganizationInviteRestriction,
  type DeleteOrganizationTag,
  type GetOrganizationNewBillableGuests,
  type GetPlugin,
  type UpdatePlugin,
  type CreatePluginListing,
  type GetPluginMemberPrivacyCompliance,
  type UpdatePluginListing,
  type Search,
  type SearchMembers,
  type GetToken,
  type GetTokenMember,
  type GetTokenWebhooks,
  type CreateTokenWebhook,
  type GetTokenWebhook,
  type UpdateTokenWebhook,
  type DeleteTokenWebhook,
  type DeleteToken,
  type CreateWebhook,
  type GetWebhook,
  type UpdateWebhook,
  type DeleteWebhook,
  type GetWebhookField,
} from '#/parameters';
import {
  type Action,
  type FieldValue,
  type Board,
  type Card,
  type TrelloList,
  type Member,
  type Organization,
  type Reaction,
  type ReactionSummary,
  type Memberships,
  type BoardStars,
  type Checklist,
  type CustomField,
  type Label,
  type BoardMembersResult,
  type BoardMyPrefs,
  type Tag,
  type Plugin,
  type Attachment,
  type CheckItemState,
  type CheckItem,
  type PluginData,
  type CardSticker,
  type CustomFieldItems,
  type CustomFieldOption,
  type Emoji,
  type Enterprise,
  type EnterpriseAuditLog,
  type EnterpriseAdmin,
  type GetEnterpriseSignUpUrl as GetEnterpriseSignUpUrlModel,
  type Membership,
  type TransferrableOrganization,
  type ClaimableOrganizations,
  type PendingOrganizations,
  type APIToken,
  type BoardBackground,
  type CustomEmoji,
  type CustomSticker,
  type Notification,
  type SavedSearch,
  type Token,
  type NotificationChannelSettings,
  type Export,
  type PluginListing,
  type SearchResult,
  type Webhook,
} from '#/models';

export interface BatchNamespace {
  run<const T extends readonly Promise<unknown>[]>(
    builder: (b: BatchClient) => T,
  ): Promise<{ -readonly [K in keyof T]: Awaited<T[K]> }>;
}

export function createTrelloClient(clientConfig: ClientConfig) {
  const client = createClient(clientConfig);

  return {
    actions: {
      getAction: (parameters: GetAction): Promise<Action> => actions.getAction(client, parameters),
      updateAction: (parameters: UpdateAction): Promise<Action> => actions.updateAction(client, parameters),
      deleteAction: (parameters: DeleteAction): Promise<void> => actions.deleteAction(client, parameters),
      getActionField: <T = unknown>(parameters: GetActionField): Promise<FieldValue<T>> =>
        actions.getActionField<T>(client, parameters),
      getActionBoard: (parameters: GetActionBoard): Promise<Board> => actions.getActionBoard(client, parameters),
      getActionCard: (parameters: GetActionCard): Promise<Card> => actions.getActionCard(client, parameters),
      getActionList: (parameters: GetActionList): Promise<TrelloList> => actions.getActionList(client, parameters),
      getActionMember: (parameters: GetActionMember): Promise<Member> => actions.getActionMember(client, parameters),
      getActionCreator: (parameters: GetActionCreator): Promise<Member> => actions.getActionCreator(client, parameters),
      getActionOrganization: (parameters: GetActionOrganization): Promise<Organization> =>
        actions.getActionOrganization(client, parameters),
      updateActionText: (parameters: UpdateActionText): Promise<Action> => actions.updateActionText(client, parameters),
      getActionReactions: (parameters: GetActionReactions): Promise<Reaction[]> =>
        actions.getActionReactions(client, parameters),
      createActionReaction: (parameters: CreateActionReaction): Promise<Reaction> =>
        actions.createActionReaction(client, parameters),
      getActionReaction: (parameters: GetActionReaction): Promise<Reaction> =>
        actions.getActionReaction(client, parameters),
      deleteActionReaction: (parameters: DeleteActionReaction): Promise<void> =>
        actions.deleteActionReaction(client, parameters),
      getActionReactionSummary: (parameters: GetActionReactionSummary): Promise<ReactionSummary[]> =>
        actions.getActionReactionSummary(client, parameters),
    },
    batch: {
      run: createBatchRunner(client),
    } satisfies BatchNamespace,
    boards: {
      getBoardMemberships: (parameters: GetBoardMemberships): Promise<Memberships[]> =>
        boards.getBoardMemberships(client, parameters),
      getBoard: (parameters: GetBoard): Promise<Board> => boards.getBoard(client, parameters),
      updateBoard: (parameters: UpdateBoard): Promise<Board> => boards.updateBoard(client, parameters),
      deleteBoard: (parameters: DeleteBoard): Promise<void> => boards.deleteBoard(client, parameters),
      getBoardField: <T = unknown>(parameters: GetBoardField): Promise<FieldValue<T>> =>
        boards.getBoardField<T>(client, parameters),
      getBoardActions: (parameters: GetBoardActions): Promise<Action[]> => boards.getBoardActions(client, parameters),
      getBoardStars: (parameters: GetBoardStars): Promise<BoardStars[]> => boards.getBoardStars(client, parameters),
      getBoardChecklists: (parameters: GetBoardChecklists): Promise<Checklist[]> =>
        boards.getBoardChecklists(client, parameters),
      getBoardCards: (parameters: GetBoardCards): Promise<Card[]> => boards.getBoardCards(client, parameters),
      getBoardCardsByFilter: (parameters: GetBoardCardsByFilter): Promise<Card[]> =>
        boards.getBoardCardsByFilter(client, parameters),
      getBoardCustomFields: (parameters: GetBoardCustomFields): Promise<CustomField[]> =>
        boards.getBoardCustomFields(client, parameters),
      getBoardLabels: (parameters: GetBoardLabels): Promise<Label[]> => boards.getBoardLabels(client, parameters),
      createBoardLabel: (parameters: CreateBoardLabel): Promise<Label> => boards.createBoardLabel(client, parameters),
      getBoardLists: (parameters: GetBoardLists): Promise<TrelloList[]> => boards.getBoardLists(client, parameters),
      createBoardList: (parameters: CreateBoardList): Promise<TrelloList> => boards.createBoardList(client, parameters),
      getBoardListsByFilter: (parameters: GetBoardListsByFilter): Promise<TrelloList[]> =>
        boards.getBoardListsByFilter(client, parameters),
      getBoardMembers: (parameters: GetBoardMembers): Promise<Member[]> => boards.getBoardMembers(client, parameters),
      inviteBoardMember: (parameters: InviteBoardMember): Promise<BoardMembersResult> =>
        boards.inviteBoardMember(client, parameters),
      updateBoardMember: (parameters: UpdateBoardMember): Promise<BoardMembersResult> =>
        boards.updateBoardMember(client, parameters),
      removeBoardMember: (parameters: RemoveBoardMember): Promise<void> => boards.removeBoardMember(client, parameters),
      updateBoardMembership: (parameters: UpdateBoardMembership): Promise<Memberships> =>
        boards.updateBoardMembership(client, parameters),
      updateBoardEmailPosition: (parameters: UpdateBoardEmailPosition): Promise<BoardMyPrefs> =>
        boards.updateBoardEmailPosition(client, parameters),
      updateBoardEmailList: (parameters: UpdateBoardEmailList): Promise<BoardMyPrefs> =>
        boards.updateBoardEmailList(client, parameters),
      updateBoardShowSidebar: (parameters: UpdateBoardShowSidebar): Promise<BoardMyPrefs> =>
        boards.updateBoardShowSidebar(client, parameters),
      updateBoardShowSidebarActivity: (parameters: UpdateBoardShowSidebarActivity): Promise<BoardMyPrefs> =>
        boards.updateBoardShowSidebarActivity(client, parameters),
      updateBoardShowSidebarBoardActions: (parameters: UpdateBoardShowSidebarBoardActions): Promise<BoardMyPrefs> =>
        boards.updateBoardShowSidebarBoardActions(client, parameters),
      updateBoardShowSidebarMembers: (parameters: UpdateBoardShowSidebarMembers): Promise<BoardMyPrefs> =>
        boards.updateBoardShowSidebarMembers(client, parameters),
      createBoard: (parameters: CreateBoard): Promise<Board> => boards.createBoard(client, parameters),
      generateBoardCalendarKey: (parameters: GenerateBoardCalendarKey): Promise<Board> =>
        boards.generateBoardCalendarKey(client, parameters),
      generateBoardEmailKey: (parameters: GenerateBoardEmailKey): Promise<Board> =>
        boards.generateBoardEmailKey(client, parameters),
      addBoardTag: (parameters: AddBoardTag): Promise<Tag> => boards.addBoardTag(client, parameters),
      markBoardAsViewed: (parameters: MarkBoardAsViewed): Promise<Board> =>
        boards.markBoardAsViewed(client, parameters),
      getBoardPlugins: (parameters: GetBoardPlugins): Promise<Plugin[]> => boards.getBoardPlugins(client, parameters),
      enableBoardPlugin: (parameters: EnableBoardPlugin): Promise<Plugin> =>
        boards.enableBoardPlugin(client, parameters),
      disableBoardPlugin: (parameters: DisableBoardPlugin): Promise<void> =>
        boards.disableBoardPlugin(client, parameters),
      getBoardPowerUps: (parameters: GetBoardPowerUps): Promise<Plugin[]> =>
        boards.getBoardPowerUps(client, parameters),
    },
    cards: {
      createCard: (parameters: CreateCard): Promise<Card> => cards.createCard(client, parameters),
      getCard: (parameters: GetCard): Promise<Card> => cards.getCard(client, parameters),
      updateCard: (parameters: UpdateCard): Promise<Card> => cards.updateCard(client, parameters),
      deleteCard: (parameters: DeleteCard): Promise<void> => cards.deleteCard(client, parameters),
      getCardField: <T = unknown>(parameters: GetCardField): Promise<FieldValue<T>> =>
        cards.getCardField<T>(client, parameters),
      getCardActions: (parameters: GetCardActions): Promise<Action[]> => cards.getCardActions(client, parameters),
      getCardAttachments: (parameters: GetCardAttachments): Promise<Attachment[]> =>
        cards.getCardAttachments(client, parameters),
      createCardAttachment: (parameters: CreateCardAttachment): Promise<Attachment> =>
        cards.createCardAttachment(client, parameters),
      getCardAttachment: (parameters: GetCardAttachment): Promise<Attachment> =>
        cards.getCardAttachment(client, parameters),
      deleteCardAttachment: (parameters: DeleteCardAttachment): Promise<void> =>
        cards.deleteCardAttachment(client, parameters),
      getCardBoard: (parameters: GetCardBoard): Promise<Board> => cards.getCardBoard(client, parameters),
      getCardCheckItemStates: (parameters: GetCardCheckItemStates): Promise<CheckItemState[]> =>
        cards.getCardCheckItemStates(client, parameters),
      getCardChecklists: (parameters: GetCardChecklists): Promise<Checklist[]> =>
        cards.getCardChecklists(client, parameters),
      createCardChecklist: (parameters: CreateCardChecklist): Promise<Checklist> =>
        cards.createCardChecklist(client, parameters),
      getCardCheckItem: (parameters: GetCardCheckItem): Promise<CheckItem> =>
        cards.getCardCheckItem(client, parameters),
      updateCardCheckItem: (parameters: UpdateCardCheckItem): Promise<CheckItem> =>
        cards.updateCardCheckItem(client, parameters),
      deleteCardCheckItem: (parameters: DeleteCardCheckItem): Promise<void> =>
        cards.deleteCardCheckItem(client, parameters),
      getCardList: (parameters: GetCardList): Promise<TrelloList> => cards.getCardList(client, parameters),
      getCardMembers: (parameters: GetCardMembers): Promise<Member[]> => cards.getCardMembers(client, parameters),
      getCardMembersVoted: (parameters: GetCardMembersVoted): Promise<Member[]> =>
        cards.getCardMembersVoted(client, parameters),
      voteOnCard: (parameters: VoteOnCard): Promise<void> => cards.voteOnCard(client, parameters),
      getCardPluginData: (parameters: GetCardPluginData): Promise<PluginData[]> =>
        cards.getCardPluginData(client, parameters),
      getCardStickers: (parameters: GetCardStickers): Promise<CardSticker[]> =>
        cards.getCardStickers(client, parameters),
      createCardSticker: (parameters: CreateCardSticker): Promise<CardSticker> =>
        cards.createCardSticker(client, parameters),
      getCardSticker: (parameters: GetCardSticker): Promise<CardSticker> => cards.getCardSticker(client, parameters),
      updateCardSticker: (parameters: UpdateCardSticker): Promise<CardSticker> =>
        cards.updateCardSticker(client, parameters),
      deleteCardSticker: (parameters: DeleteCardSticker): Promise<void> => cards.deleteCardSticker(client, parameters),
      updateCardComment: (parameters: UpdateCardComment): Promise<Action> =>
        cards.updateCardComment(client, parameters),
      deleteCardComment: (parameters: DeleteCardComment): Promise<void> => cards.deleteCardComment(client, parameters),
      updateCardCustomFieldItem: (parameters: UpdateCardCustomFieldItem): Promise<void> =>
        cards.updateCardCustomFieldItem(client, parameters),
      updateCardCustomFields: (parameters: UpdateCardCustomFields): Promise<void> =>
        cards.updateCardCustomFields(client, parameters),
      getCardCustomFieldItems: (parameters: GetCardCustomFieldItems): Promise<CustomFieldItems[]> =>
        cards.getCardCustomFieldItems(client, parameters),
      createCardComment: (parameters: CreateCardComment): Promise<Action> =>
        cards.createCardComment(client, parameters),
      addCardLabel: (parameters: AddCardLabel): Promise<void> => cards.addCardLabel(client, parameters),
      addCardMember: (parameters: AddCardMember): Promise<Member[]> => cards.addCardMember(client, parameters),
      createCardLabel: (parameters: CreateCardLabel): Promise<Label> => cards.createCardLabel(client, parameters),
      markCardNotificationsRead: (parameters: MarkCardNotificationsRead): Promise<void> =>
        cards.markCardNotificationsRead(client, parameters),
      removeCardLabel: (parameters: RemoveCardLabel): Promise<void> => cards.removeCardLabel(client, parameters),
      removeCardMember: (parameters: RemoveCardMember): Promise<void> => cards.removeCardMember(client, parameters),
      removeCardMemberVote: (parameters: RemoveCardMemberVote): Promise<void> =>
        cards.removeCardMemberVote(client, parameters),
      updateCardChecklistItem: (parameters: UpdateCardChecklistItem): Promise<CheckItem> =>
        cards.updateCardChecklistItem(client, parameters),
      removeCardChecklist: (parameters: RemoveCardChecklist): Promise<void> =>
        cards.removeCardChecklist(client, parameters),
    },
    checklists: {
      createChecklist: (parameters: CreateChecklist): Promise<Checklist> =>
        checklists.createChecklist(client, parameters),
      getChecklist: (parameters: GetChecklist): Promise<Checklist> => checklists.getChecklist(client, parameters),
      updateChecklist: (parameters: UpdateChecklist): Promise<Checklist> =>
        checklists.updateChecklist(client, parameters),
      deleteChecklist: (parameters: DeleteChecklist): Promise<void> => checklists.deleteChecklist(client, parameters),
      getChecklistField: <T = unknown>(parameters: GetChecklistField): Promise<FieldValue<T>> =>
        checklists.getChecklistField<T>(client, parameters),
      updateChecklistField: (parameters: UpdateChecklistField): Promise<Checklist> =>
        checklists.updateChecklistField(client, parameters),
      getChecklistBoard: (parameters: GetChecklistBoard): Promise<Board> =>
        checklists.getChecklistBoard(client, parameters),
      getChecklistCards: (parameters: GetChecklistCards): Promise<Card[]> =>
        checklists.getChecklistCards(client, parameters),
      getChecklistItems: (parameters: GetChecklistItems): Promise<CheckItem[]> =>
        checklists.getChecklistItems(client, parameters),
      createChecklistItem: (parameters: CreateChecklistItem): Promise<CheckItem> =>
        checklists.createChecklistItem(client, parameters),
      getChecklistItem: (parameters: GetChecklistItem): Promise<CheckItem> =>
        checklists.getChecklistItem(client, parameters),
      deleteChecklistItem: (parameters: DeleteChecklistItem): Promise<void> =>
        checklists.deleteChecklistItem(client, parameters),
    },
    customFields: {
      createCustomField: (parameters: CreateCustomField): Promise<CustomField> =>
        customFields.createCustomField(client, parameters),
      getCustomField: (parameters: GetCustomField): Promise<CustomField> =>
        customFields.getCustomField(client, parameters),
      updateCustomField: (parameters: UpdateCustomField): Promise<CustomField> =>
        customFields.updateCustomField(client, parameters),
      deleteCustomField: (parameters: DeleteCustomField): Promise<void> =>
        customFields.deleteCustomField(client, parameters),
      getCustomFieldOptions: (parameters: GetCustomFieldOptions): Promise<CustomFieldOption[]> =>
        customFields.getCustomFieldOptions(client, parameters),
      createCustomFieldOption: (parameters: CreateCustomFieldOption): Promise<CustomFieldOption> =>
        customFields.createCustomFieldOption(client, parameters),
      getCustomFieldOption: (parameters: GetCustomFieldOption): Promise<CustomFieldOption> =>
        customFields.getCustomFieldOption(client, parameters),
      deleteCustomFieldOption: (parameters: DeleteCustomFieldOption): Promise<void> =>
        customFields.deleteCustomFieldOption(client, parameters),
    },
    emoji: {
      getEmoji: (parameters?: GetEmoji): Promise<Emoji> => emoji.getEmoji(client, parameters),
    },
    enterprises: {
      getEnterprise: (parameters: GetEnterprise): Promise<Enterprise> => enterprises.getEnterprise(client, parameters),
      getEnterpriseAuditLog: (parameters: GetEnterpriseAuditLog): Promise<EnterpriseAuditLog[]> =>
        enterprises.getEnterpriseAuditLog(client, parameters),
      getEnterpriseAdmins: (parameters: GetEnterpriseAdmins): Promise<EnterpriseAdmin> =>
        enterprises.getEnterpriseAdmins(client, parameters),
      getEnterpriseSignUpUrl: (parameters: GetEnterpriseSignUpUrl): Promise<GetEnterpriseSignUpUrlModel> =>
        enterprises.getEnterpriseSignUpUrl(client, parameters),
      getUser: (parameters: GetUser): Promise<Membership[]> => enterprises.getUser(client, parameters),
      getEnterpriseMembers: (parameters: GetEnterpriseMembers): Promise<Member[]> =>
        enterprises.getEnterpriseMembers(client, parameters),
      getEnterpriseMember: (parameters: GetEnterpriseMember): Promise<Member> =>
        enterprises.getEnterpriseMember(client, parameters),
      getEnterpriseTransferrableOrganization: (
        parameters: GetEnterpriseTransferrableOrganization,
      ): Promise<TransferrableOrganization> => enterprises.getEnterpriseTransferrableOrganization(client, parameters),
      getEnterpriseBulkTransferrableOrganizations: (
        parameters: GetEnterpriseBulkTransferrableOrganizations,
      ): Promise<TransferrableOrganization[]> =>
        enterprises.getEnterpriseBulkTransferrableOrganizations(client, parameters),
      updateEnterpriseJoinRequests: (parameters: UpdateEnterpriseJoinRequests): Promise<void> =>
        enterprises.updateEnterpriseJoinRequests(client, parameters),
      getEnterpriseClaimableOrganizations: (
        parameters: GetEnterpriseClaimableOrganizations,
      ): Promise<ClaimableOrganizations> => enterprises.getEnterpriseClaimableOrganizations(client, parameters),
      getEnterprisePendingOrganizations: (
        parameters: GetEnterprisePendingOrganizations,
      ): Promise<PendingOrganizations[]> => enterprises.getEnterprisePendingOrganizations(client, parameters),
      createEnterpriseToken: (parameters: CreateEnterpriseToken): Promise<APIToken> =>
        enterprises.createEnterpriseToken(client, parameters),
      getEnterpriseOrganizations: (parameters: GetEnterpriseOrganizations): Promise<Organization[]> =>
        enterprises.getEnterpriseOrganizations(client, parameters),
      addEnterpriseOrganization: (parameters: AddEnterpriseOrganization): Promise<Organization[]> =>
        enterprises.addEnterpriseOrganization(client, parameters),
      updateEnterpriseMemberLicensed: (parameters: UpdateEnterpriseMemberLicensed): Promise<Member> =>
        enterprises.updateEnterpriseMemberLicensed(client, parameters),
      deactivateEnterpriseMember: (parameters: DeactivateEnterpriseMember): Promise<Member> =>
        enterprises.deactivateEnterpriseMember(client, parameters),
      addEnterpriseAdmin: (parameters: AddEnterpriseAdmin): Promise<void> =>
        enterprises.addEnterpriseAdmin(client, parameters),
      removeEnterpriseAdmin: (parameters: RemoveEnterpriseAdmin): Promise<void> =>
        enterprises.removeEnterpriseAdmin(client, parameters),
      removeEnterpriseOrganization: (parameters: RemoveEnterpriseOrganization): Promise<void> =>
        enterprises.removeEnterpriseOrganization(client, parameters),
      getEnterpriseBulkOrganizations: (parameters: GetEnterpriseBulkOrganizations): Promise<Organization[]> =>
        enterprises.getEnterpriseBulkOrganizations(client, parameters),
    },
    labels: {
      getLabel: (parameters: GetLabel): Promise<Label> => labels.getLabel(client, parameters),
      updateLabel: (parameters: UpdateLabel): Promise<Label> => labels.updateLabel(client, parameters),
      deleteLabel: (parameters: DeleteLabel): Promise<void> => labels.deleteLabel(client, parameters),
      updateLabelField: (parameters: UpdateLabelField): Promise<Label> => labels.updateLabelField(client, parameters),
      createLabel: (parameters: CreateLabel): Promise<Label> => labels.createLabel(client, parameters),
    },
    lists: {
      getList: (parameters: GetList): Promise<TrelloList> => lists.getList(client, parameters),
      updateList: (parameters: UpdateList): Promise<TrelloList> => lists.updateList(client, parameters),
      createList: (parameters: CreateList): Promise<TrelloList> => lists.createList(client, parameters),
      archiveAllListCards: (parameters: ArchiveAllListCards): Promise<void> =>
        lists.archiveAllListCards(client, parameters),
      moveAllListCards: (parameters: MoveAllListCards): Promise<void> => lists.moveAllListCards(client, parameters),
      archiveList: (parameters: ArchiveList): Promise<TrelloList> => lists.archiveList(client, parameters),
      moveListToBoard: (parameters: MoveListToBoard): Promise<TrelloList> => lists.moveListToBoard(client, parameters),
      updateListField: (parameters: UpdateListField): Promise<TrelloList> => lists.updateListField(client, parameters),
      getListActions: (parameters: GetListActions): Promise<Action[]> => lists.getListActions(client, parameters),
      getListBoard: (parameters: GetListBoard): Promise<Board> => lists.getListBoard(client, parameters),
      getListCards: (parameters: GetListCards): Promise<Card[]> => lists.getListCards(client, parameters),
    },
    members: {
      getMember: (parameters: GetMember): Promise<Member> => members.getMember(client, parameters),
      updateMember: (parameters: UpdateMember): Promise<Member> => members.updateMember(client, parameters),
      getMemberField: <T = unknown>(parameters: GetMemberField): Promise<FieldValue<T>> =>
        members.getMemberField<T>(client, parameters),
      getMemberActions: (parameters: GetMemberActions): Promise<Action[]> =>
        members.getMemberActions(client, parameters),
      getMemberBoardBackgrounds: (parameters: GetMemberBoardBackgrounds): Promise<BoardBackground[]> =>
        members.getMemberBoardBackgrounds(client, parameters),
      createMemberBoardBackground: (parameters: CreateMemberBoardBackground): Promise<BoardBackground[]> =>
        members.createMemberBoardBackground(client, parameters),
      getMemberBoardBackground: (parameters: GetMemberBoardBackground): Promise<BoardBackground> =>
        members.getMemberBoardBackground(client, parameters),
      updateMemberBoardBackground: (parameters: UpdateMemberBoardBackground): Promise<BoardBackground> =>
        members.updateMemberBoardBackground(client, parameters),
      deleteMemberBoardBackground: (parameters: DeleteMemberBoardBackground): Promise<void> =>
        members.deleteMemberBoardBackground(client, parameters),
      getMemberBoardStars: (parameters: GetMemberBoardStars): Promise<BoardStars[]> =>
        members.getMemberBoardStars(client, parameters),
      starBoard: (parameters: StarBoard): Promise<BoardStars> => members.starBoard(client, parameters),
      getMemberBoardStar: (parameters: GetMemberBoardStar): Promise<BoardStars> =>
        members.getMemberBoardStar(client, parameters),
      updateMemberBoardStar: (parameters: UpdateMemberBoardStar): Promise<BoardStars> =>
        members.updateMemberBoardStar(client, parameters),
      unstarBoard: (parameters: UnstarBoard): Promise<void> => members.unstarBoard(client, parameters),
      getMemberBoards: (parameters: GetMemberBoards): Promise<Board[]> => members.getMemberBoards(client, parameters),
      getMemberInvitedBoards: (parameters: GetMemberInvitedBoards): Promise<Board[]> =>
        members.getMemberInvitedBoards(client, parameters),
      getMemberCards: (parameters: GetMemberCards): Promise<Card[]> => members.getMemberCards(client, parameters),
      getMemberCustomBoardBackgrounds: (parameters: GetMemberCustomBoardBackgrounds): Promise<BoardBackground[]> =>
        members.getMemberCustomBoardBackgrounds(client, parameters),
      createMemberCustomBoardBackground: (parameters: CreateMemberCustomBoardBackground): Promise<BoardBackground> =>
        members.createMemberCustomBoardBackground(client, parameters),
      getMemberCustomBoardBackground: (parameters: GetMemberCustomBoardBackground): Promise<BoardBackground> =>
        members.getMemberCustomBoardBackground(client, parameters),
      updateMemberCustomBoardBackground: (parameters: UpdateMemberCustomBoardBackground): Promise<BoardBackground> =>
        members.updateMemberCustomBoardBackground(client, parameters),
      deleteMemberCustomBoardBackground: (parameters: DeleteMemberCustomBoardBackground): Promise<void> =>
        members.deleteMemberCustomBoardBackground(client, parameters),
      getMemberCustomEmojis: (parameters: GetMemberCustomEmojis): Promise<CustomEmoji[]> =>
        members.getMemberCustomEmojis(client, parameters),
      uploadMemberCustomEmoji: (parameters: UploadMemberCustomEmoji): Promise<CustomEmoji> =>
        members.uploadMemberCustomEmoji(client, parameters),
      getMemberCustomEmoji: (parameters: GetMemberCustomEmoji): Promise<CustomEmoji> =>
        members.getMemberCustomEmoji(client, parameters),
      getMemberCustomStickers: (parameters: GetMemberCustomStickers): Promise<CustomSticker[]> =>
        members.getMemberCustomStickers(client, parameters),
      uploadMemberCustomSticker: (parameters: UploadMemberCustomSticker): Promise<CustomSticker> =>
        members.uploadMemberCustomSticker(client, parameters),
      getMemberCustomSticker: (parameters: GetMemberCustomSticker): Promise<CustomSticker> =>
        members.getMemberCustomSticker(client, parameters),
      deleteMemberCustomSticker: (parameters: DeleteMemberCustomSticker): Promise<void> =>
        members.deleteMemberCustomSticker(client, parameters),
      getMemberNotifications: (parameters: GetMemberNotifications): Promise<Notification[]> =>
        members.getMemberNotifications(client, parameters),
      getMemberOrganizations: (parameters: GetMemberOrganizations): Promise<Organization[]> =>
        members.getMemberOrganizations(client, parameters),
      getMemberInvitedOrganizations: (parameters: GetMemberInvitedOrganizations): Promise<Organization[]> =>
        members.getMemberInvitedOrganizations(client, parameters),
      getMemberSavedSearches: (parameters: GetMemberSavedSearches): Promise<SavedSearch[]> =>
        members.getMemberSavedSearches(client, parameters),
      createMemberSavedSearch: (parameters: CreateMemberSavedSearch): Promise<SavedSearch> =>
        members.createMemberSavedSearch(client, parameters),
      getMemberSavedSearch: (parameters: GetMemberSavedSearch): Promise<SavedSearch> =>
        members.getMemberSavedSearch(client, parameters),
      updateMemberSavedSearch: (parameters: UpdateMemberSavedSearch): Promise<SavedSearch> =>
        members.updateMemberSavedSearch(client, parameters),
      deleteMemberSavedSearch: (parameters: DeleteMemberSavedSearch): Promise<void> =>
        members.deleteMemberSavedSearch(client, parameters),
      getMemberTokens: (parameters: GetMemberTokens): Promise<Token[]> => members.getMemberTokens(client, parameters),
      uploadMemberAvatar: (parameters: UploadMemberAvatar): Promise<void> =>
        members.uploadMemberAvatar(client, parameters),
      dismissMemberOneTimeMessage: (parameters: DismissMemberOneTimeMessage): Promise<void> =>
        members.dismissMemberOneTimeMessage(client, parameters),
      getMemberNotificationChannelSettings: (
        parameters: GetMemberNotificationChannelSettings,
      ): Promise<NotificationChannelSettings[]> => members.getMemberNotificationChannelSettings(client, parameters),
      updateMemberNotificationChannelSettings: (
        parameters: UpdateMemberNotificationChannelSettings,
      ): Promise<NotificationChannelSettings> => members.updateMemberNotificationChannelSettings(client, parameters),
      getMemberNotificationChannelSetting: (
        parameters: GetMemberNotificationChannelSetting,
      ): Promise<NotificationChannelSettings> => members.getMemberNotificationChannelSetting(client, parameters),
      updateMemberNotificationChannelSetting: (
        parameters: UpdateMemberNotificationChannelSetting,
      ): Promise<NotificationChannelSettings> => members.updateMemberNotificationChannelSetting(client, parameters),
      updateMemberNotificationChannelBlockedKey: (
        parameters: UpdateMemberNotificationChannelBlockedKey,
      ): Promise<NotificationChannelSettings> => members.updateMemberNotificationChannelBlockedKey(client, parameters),
    },
    notifications: {
      getNotification: (parameters: GetNotification): Promise<Notification> =>
        notifications.getNotification(client, parameters),
      updateNotification: (parameters: UpdateNotification): Promise<Notification> =>
        notifications.updateNotification(client, parameters),
      getNotificationField: <T = unknown>(parameters: GetNotificationField): Promise<FieldValue<T>> =>
        notifications.getNotificationField<T>(client, parameters),
      markAllNotificationsRead: (parameters: MarkAllNotificationsRead): Promise<void> =>
        notifications.markAllNotificationsRead(client, parameters),
      updateNotificationUnreadStatus: (parameters: UpdateNotificationUnreadStatus): Promise<Notification> =>
        notifications.updateNotificationUnreadStatus(client, parameters),
      getNotificationBoard: (parameters: GetNotificationBoard): Promise<Board> =>
        notifications.getNotificationBoard(client, parameters),
      getNotificationCard: (parameters: GetNotificationCard): Promise<Card> =>
        notifications.getNotificationCard(client, parameters),
      getNotificationList: (parameters: GetNotificationList): Promise<TrelloList> =>
        notifications.getNotificationList(client, parameters),
      getNotificationMember: (parameters: GetNotificationMember): Promise<Member> =>
        notifications.getNotificationMember(client, parameters),
      getNotificationCreator: (parameters: GetNotificationCreator): Promise<Member> =>
        notifications.getNotificationCreator(client, parameters),
      getNotificationOrganization: (parameters: GetNotificationOrganization): Promise<Organization> =>
        notifications.getNotificationOrganization(client, parameters),
    },
    organizations: {
      createOrganization: (parameters: CreateOrganization): Promise<Organization> =>
        organizations.createOrganization(client, parameters),
      getOrganization: (parameters: GetOrganization): Promise<Organization> =>
        organizations.getOrganization(client, parameters),
      updateOrganization: (parameters: UpdateOrganization): Promise<Organization> =>
        organizations.updateOrganization(client, parameters),
      deleteOrganization: (parameters: DeleteOrganization): Promise<void> =>
        organizations.deleteOrganization(client, parameters),
      getOrganizationField: <T = unknown>(parameters: GetOrganizationField): Promise<FieldValue<T>> =>
        organizations.getOrganizationField(client, parameters),
      getOrganizationActions: (parameters: GetOrganizationActions): Promise<Action[]> =>
        organizations.getOrganizationActions(client, parameters),
      getOrganizationBoards: (parameters: GetOrganizationBoards): Promise<Board[]> =>
        organizations.getOrganizationBoards(client, parameters),
      getOrganizationExports: (parameters: GetOrganizationExports): Promise<Export[]> =>
        organizations.getOrganizationExports(client, parameters),
      createOrganizationExport: (parameters: CreateOrganizationExport): Promise<Export> =>
        organizations.createOrganizationExport(client, parameters),
      getOrganizationMembers: (parameters: GetOrganizationMembers): Promise<Member[]> =>
        organizations.getOrganizationMembers(client, parameters),
      updateOrganizationMembers: (parameters: UpdateOrganizationMembers): Promise<void> =>
        organizations.updateOrganizationMembers(client, parameters),
      getOrganizationMemberships: (parameters: GetOrganizationMemberships): Promise<Memberships[]> =>
        organizations.getOrganizationMemberships(client, parameters),
      getOrganizationMembership: (parameters: GetOrganizationMembership): Promise<Memberships> =>
        organizations.getOrganizationMembership(client, parameters),
      getOrganizationPluginData: (parameters: GetOrganizationPluginData): Promise<PluginData[]> =>
        organizations.getOrganizationPluginData(client, parameters),
      getOrganizationTags: (parameters: GetOrganizationTags): Promise<Tag[]> =>
        organizations.getOrganizationTags(client, parameters),
      createOrganizationTag: (parameters: CreateOrganizationTag): Promise<Tag> =>
        organizations.createOrganizationTag(client, parameters),
      updateOrganizationMember: (parameters: UpdateOrganizationMember): Promise<Member> =>
        organizations.updateOrganizationMember(client, parameters),
      removeOrganizationMember: (parameters: RemoveOrganizationMember): Promise<void> =>
        organizations.removeOrganizationMember(client, parameters),
      deactivateOrganizationMember: (parameters: DeactivateOrganizationMember): Promise<void> =>
        organizations.deactivateOrganizationMember(client, parameters),
      uploadOrganizationLogo: (parameters: UploadOrganizationLogo): Promise<Organization> =>
        organizations.uploadOrganizationLogo(client, parameters),
      deleteOrganizationLogo: (parameters: DeleteOrganizationLogo): Promise<void> =>
        organizations.deleteOrganizationLogo(client, parameters),
      removeOrganizationMemberFromAllBoards: (parameters: RemoveOrganizationMemberFromAllBoards): Promise<void> =>
        organizations.removeOrganizationMemberFromAllBoards(client, parameters),
      deleteOrganizationAssociatedDomain: (parameters: DeleteOrganizationAssociatedDomain): Promise<void> =>
        organizations.deleteOrganizationAssociatedDomain(client, parameters),
      deleteOrganizationInviteRestriction: (parameters: DeleteOrganizationInviteRestriction): Promise<void> =>
        organizations.deleteOrganizationInviteRestriction(client, parameters),
      deleteOrganizationTag: (parameters: DeleteOrganizationTag): Promise<void> =>
        organizations.deleteOrganizationTag(client, parameters),
      getOrganizationNewBillableGuests: (parameters: GetOrganizationNewBillableGuests): Promise<unknown> =>
        organizations.getOrganizationNewBillableGuests(client, parameters),
    },
    plugins: {
      getPlugin: (parameters: GetPlugin): Promise<Plugin> => plugins.getPlugin(client, parameters),
      updatePlugin: (parameters: UpdatePlugin): Promise<Plugin> => plugins.updatePlugin(client, parameters),
      createPluginListing: (parameters: CreatePluginListing): Promise<PluginListing> =>
        plugins.createPluginListing(client, parameters),
      getPluginMemberPrivacyCompliance: (parameters: GetPluginMemberPrivacyCompliance): Promise<void> =>
        plugins.getPluginMemberPrivacyCompliance(client, parameters),
      updatePluginListing: (parameters: UpdatePluginListing): Promise<PluginListing> =>
        plugins.updatePluginListing(client, parameters),
    },
    search: {
      search: (parameters: Search): Promise<SearchResult> => search.search(client, parameters),
      searchMembers: (parameters: SearchMembers): Promise<Member[]> => search.searchMembers(client, parameters),
    },
    tokens: {
      getToken: (parameters: GetToken): Promise<Token> => tokens.getToken(client, parameters),
      getTokenMember: (parameters: GetTokenMember): Promise<Member> => tokens.getTokenMember(client, parameters),
      getTokenWebhooks: (parameters: GetTokenWebhooks): Promise<Webhook[]> =>
        tokens.getTokenWebhooks(client, parameters),
      createTokenWebhook: (parameters: CreateTokenWebhook): Promise<Webhook> =>
        tokens.createTokenWebhook(client, parameters),
      getTokenWebhook: (parameters: GetTokenWebhook): Promise<Webhook> => tokens.getTokenWebhook(client, parameters),
      updateTokenWebhook: (parameters: UpdateTokenWebhook): Promise<void> =>
        tokens.updateTokenWebhook(client, parameters),
      deleteTokenWebhook: (parameters: DeleteTokenWebhook): Promise<void> =>
        tokens.deleteTokenWebhook(client, parameters),
      deleteToken: (parameters: DeleteToken): Promise<void> => tokens.deleteToken(client, parameters),
    },
    webhooks: {
      createWebhook: (parameters: CreateWebhook): Promise<Webhook> => webhooks.createWebhook(client, parameters),
      getWebhook: (parameters: GetWebhook): Promise<Webhook> => webhooks.getWebhook(client, parameters),
      updateWebhook: (parameters: UpdateWebhook): Promise<Webhook> => webhooks.updateWebhook(client, parameters),
      deleteWebhook: (parameters: DeleteWebhook): Promise<void> => webhooks.deleteWebhook(client, parameters),
      getWebhookField: <T = unknown>(parameters: GetWebhookField): Promise<FieldValue<T>> =>
        webhooks.getWebhookField<T>(client, parameters),
    },
  };
}

export type TrelloClient = ReturnType<typeof createTrelloClient>;
