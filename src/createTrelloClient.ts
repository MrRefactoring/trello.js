import { type ClientConfig, type Client, type RequestOptions, createClient } from '#/core';
import * as actions from '#/api/actions';
import { createBatchRunner, type BatchClient } from '#/batchRunner';
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
import type {
  GetAction,
  UpdateAction,
  DeleteAction,
  GetActionField,
  GetActionBoard,
  GetActionCard,
  GetActionList,
  GetActionMember,
  GetActionCreator,
  GetActionOrganization,
  UpdateActionText,
  GetActionReactions,
  CreateActionReaction,
  GetActionReaction,
  DeleteActionReaction,
  GetActionReactionSummary,
  GetBoardMemberships,
  GetBoard,
  UpdateBoard,
  DeleteBoard,
  GetBoardField,
  GetBoardActions,
  GetBoardStars,
  GetBoardChecklists,
  GetBoardCards,
  GetBoardCardsByFilter,
  GetBoardCustomFields,
  GetBoardLabels,
  CreateBoardLabel,
  GetBoardLists,
  CreateBoardList,
  GetBoardListsByFilter,
  GetBoardMembers,
  InviteBoardMember,
  UpdateBoardMember,
  RemoveBoardMember,
  UpdateBoardMembership,
  UpdateBoardEmailPosition,
  UpdateBoardEmailList,
  UpdateBoardShowSidebar,
  UpdateBoardShowSidebarActivity,
  UpdateBoardShowSidebarBoardActions,
  UpdateBoardShowSidebarMembers,
  CreateBoard,
  GenerateBoardCalendarKey,
  GenerateBoardEmailKey,
  AddBoardTag,
  MarkBoardAsViewed,
  GetBoardPlugins,
  EnableBoardPlugin,
  DisableBoardPlugin,
  GetBoardPowerUps,
  CreateBoardExport,
  GetBoardExport,
  DeleteBoardExport,
  DownloadBoardExport,
  GetBoardMostRecentExport,
  CreateCard,
  GetCard,
  UpdateCard,
  DeleteCard,
  GetCardField,
  GetCardActions,
  GetCardAttachments,
  CreateCardAttachment,
  GetCardAttachment,
  DeleteCardAttachment,
  GetCardBoard,
  GetCardCheckItemStates,
  GetCardChecklists,
  CreateCardChecklist,
  GetCardCheckItem,
  UpdateCardCheckItem,
  DeleteCardCheckItem,
  GetCardList,
  GetCardMembers,
  GetCardMembersVoted,
  VoteOnCard,
  GetCardPluginData,
  GetCardStickers,
  CreateCardSticker,
  GetCardSticker,
  UpdateCardSticker,
  DeleteCardSticker,
  UpdateCardComment,
  DeleteCardComment,
  UpdateCardCustomFieldItem,
  UpdateCardCustomFields,
  GetCardCustomFieldItems,
  CreateCardComment,
  AddCardLabel,
  AddCardMember,
  CreateCardLabel,
  MarkCardNotificationsRead,
  RemoveCardLabel,
  RemoveCardMember,
  RemoveCardMemberVote,
  UpdateCardChecklistItem,
  RemoveCardChecklist,
  CreateChecklist,
  GetChecklist,
  UpdateChecklist,
  DeleteChecklist,
  GetChecklistField,
  UpdateChecklistField,
  GetChecklistBoard,
  GetChecklistCards,
  GetChecklistItems,
  CreateChecklistItem,
  GetChecklistItem,
  DeleteChecklistItem,
  CreateCustomField,
  GetCustomField,
  UpdateCustomField,
  DeleteCustomField,
  GetCustomFieldOptions,
  CreateCustomFieldOption,
  GetCustomFieldOption,
  DeleteCustomFieldOption,
  GetEmoji,
  GetEnterprise,
  GetEnterpriseAuditLog,
  GetEnterpriseAdmins,
  GetEnterpriseSignUpUrl,
  GetUser,
  GetEnterpriseMembers,
  GetEnterpriseMember,
  GetEnterpriseTransferrableOrganization,
  GetEnterpriseBulkTransferrableOrganizations,
  UpdateEnterpriseJoinRequests,
  GetEnterpriseClaimableOrganizations,
  GetEnterprisePendingOrganizations,
  CreateEnterpriseToken,
  GetEnterpriseOrganizations,
  AddEnterpriseOrganization,
  UpdateEnterpriseMemberLicensed,
  DeactivateEnterpriseMember,
  AddEnterpriseAdmin,
  RemoveEnterpriseAdmin,
  RemoveEnterpriseOrganization,
  GetEnterpriseBulkOrganizations,
  GetLabel,
  UpdateLabel,
  DeleteLabel,
  UpdateLabelField,
  CreateLabel,
  GetList,
  UpdateList,
  CreateList,
  ArchiveAllListCards,
  MoveAllListCards,
  ArchiveList,
  MoveListToBoard,
  UpdateListField,
  GetListActions,
  GetListBoard,
  GetListCards,
  GetMember,
  UpdateMember,
  GetMemberField,
  GetMemberActions,
  GetMemberBoardBackgrounds,
  CreateMemberBoardBackground,
  GetMemberBoardBackground,
  UpdateMemberBoardBackground,
  DeleteMemberBoardBackground,
  GetMemberBoardStars,
  StarBoard,
  GetMemberBoardStar,
  UpdateMemberBoardStar,
  UnstarBoard,
  GetMemberBoards,
  GetMemberInvitedBoards,
  GetMemberCards,
  GetMemberCustomBoardBackgrounds,
  CreateMemberCustomBoardBackground,
  GetMemberCustomBoardBackground,
  UpdateMemberCustomBoardBackground,
  DeleteMemberCustomBoardBackground,
  GetMemberCustomEmojis,
  UploadMemberCustomEmoji,
  GetMemberCustomEmoji,
  GetMemberCustomStickers,
  UploadMemberCustomSticker,
  GetMemberCustomSticker,
  DeleteMemberCustomSticker,
  GetMemberNotifications,
  GetMemberOrganizations,
  GetMemberInvitedOrganizations,
  GetMemberSavedSearches,
  CreateMemberSavedSearch,
  GetMemberSavedSearch,
  UpdateMemberSavedSearch,
  DeleteMemberSavedSearch,
  GetMemberTokens,
  UploadMemberAvatar,
  DismissMemberOneTimeMessage,
  GetMemberNotificationChannelSettings,
  UpdateMemberNotificationChannelSettings,
  GetMemberNotificationChannelSetting,
  UpdateMemberNotificationChannelSetting,
  UpdateMemberNotificationChannelBlockedKey,
  GetNotification,
  UpdateNotification,
  GetNotificationField,
  MarkAllNotificationsRead,
  UpdateNotificationUnreadStatus,
  GetNotificationBoard,
  GetNotificationCard,
  GetNotificationList,
  GetNotificationMember,
  GetNotificationCreator,
  GetNotificationOrganization,
  CreateOrganization,
  GetOrganization,
  UpdateOrganization,
  DeleteOrganization,
  GetOrganizationField,
  GetOrganizationActions,
  GetOrganizationBoards,
  GetOrganizationExports,
  CreateOrganizationExport,
  GetOrganizationMembers,
  UpdateOrganizationMembers,
  GetOrganizationMemberships,
  GetOrganizationMembership,
  GetOrganizationPluginData,
  GetOrganizationTags,
  CreateOrganizationTag,
  UpdateOrganizationMember,
  RemoveOrganizationMember,
  DeactivateOrganizationMember,
  UploadOrganizationLogo,
  DeleteOrganizationLogo,
  RemoveOrganizationMemberFromAllBoards,
  DeleteOrganizationAssociatedDomain,
  DeleteOrganizationInviteRestriction,
  DeleteOrganizationTag,
  GetOrganizationNewBillableGuests,
  GetPlugin,
  UpdatePlugin,
  CreatePluginListing,
  GetPluginMemberPrivacyCompliance,
  UpdatePluginListing,
  Search,
  SearchMembers,
  GetToken,
  GetTokenMember,
  GetTokenWebhooks,
  CreateTokenWebhook,
  GetTokenWebhook,
  UpdateTokenWebhook,
  DeleteTokenWebhook,
  DeleteToken,
  CreateWebhook,
  GetWebhook,
  UpdateWebhook,
  DeleteWebhook,
  GetWebhookField,
} from '#/parameters';
import type {
  Action,
  FieldValue,
  Board,
  Card,
  TrelloList,
  Member,
  Organization,
  Reaction,
  ReactionSummary,
  Memberships,
  BoardStars,
  Checklist,
  CustomField,
  Label,
  BoardMembersResult,
  BoardMyPrefs,
  Tag,
  Plugin,
  Export,
  Attachment,
  CheckItemState,
  CheckItem,
  PluginData,
  CardSticker,
  CustomFieldItems,
  CustomFieldOption,
  Emoji,
  Enterprise,
  EnterpriseAuditLog,
  EnterpriseAdmin,
  GetEnterpriseSignUpUrl as GetEnterpriseSignUpUrlModel,
  Membership,
  TransferrableOrganization,
  ClaimableOrganizations,
  PendingOrganizations,
  APIToken,
  BoardBackground,
  CustomEmoji,
  CustomSticker,
  Notification,
  SavedSearch,
  Token,
  NotificationChannelSettings,
  PluginListing,
  SearchResult,
  Webhook,
} from '#/models';

export interface BatchNamespace {
  run<const T extends readonly Promise<unknown>[]>(
    builder: (b: BatchClient) => T,
  ): Promise<{ -readonly [K in keyof T]: Awaited<T[K]> }>;
}

export function createTrelloClient(clientConfig: ClientConfig | Client) {
  const client = createClient(clientConfig);

  return {
    actions: {
      getAction: (parameters: GetAction, options?: RequestOptions): Promise<Action> =>
        actions.getAction(client, parameters, options),
      updateAction: (parameters: UpdateAction, options?: RequestOptions): Promise<Action> =>
        actions.updateAction(client, parameters, options),
      deleteAction: (parameters: DeleteAction, options?: RequestOptions): Promise<void> =>
        actions.deleteAction(client, parameters, options),
      getActionField: <T = unknown>(parameters: GetActionField, options?: RequestOptions): Promise<FieldValue<T>> =>
        actions.getActionField<T>(client, parameters, options),
      getActionBoard: (parameters: GetActionBoard, options?: RequestOptions): Promise<Board> =>
        actions.getActionBoard(client, parameters, options),
      getActionCard: (parameters: GetActionCard, options?: RequestOptions): Promise<Card> =>
        actions.getActionCard(client, parameters, options),
      getActionList: (parameters: GetActionList, options?: RequestOptions): Promise<TrelloList> =>
        actions.getActionList(client, parameters, options),
      getActionMember: (parameters: GetActionMember, options?: RequestOptions): Promise<Member> =>
        actions.getActionMember(client, parameters, options),
      getActionCreator: (parameters: GetActionCreator, options?: RequestOptions): Promise<Member> =>
        actions.getActionCreator(client, parameters, options),
      getActionOrganization: (parameters: GetActionOrganization, options?: RequestOptions): Promise<Organization> =>
        actions.getActionOrganization(client, parameters, options),
      updateActionText: (parameters: UpdateActionText, options?: RequestOptions): Promise<Action> =>
        actions.updateActionText(client, parameters, options),
      getActionReactions: (parameters: GetActionReactions, options?: RequestOptions): Promise<Reaction[]> =>
        actions.getActionReactions(client, parameters, options),
      createActionReaction: (parameters: CreateActionReaction, options?: RequestOptions): Promise<Reaction> =>
        actions.createActionReaction(client, parameters, options),
      getActionReaction: (parameters: GetActionReaction, options?: RequestOptions): Promise<Reaction> =>
        actions.getActionReaction(client, parameters, options),
      deleteActionReaction: (parameters: DeleteActionReaction, options?: RequestOptions): Promise<void> =>
        actions.deleteActionReaction(client, parameters, options),
      getActionReactionSummary: (
        parameters: GetActionReactionSummary,
        options?: RequestOptions,
      ): Promise<ReactionSummary[]> => actions.getActionReactionSummary(client, parameters, options),
    },
    batch: { run: createBatchRunner(client) } satisfies BatchNamespace,
    boards: {
      getBoardMemberships: (parameters: GetBoardMemberships, options?: RequestOptions): Promise<Memberships[]> =>
        boards.getBoardMemberships(client, parameters, options),
      getBoard: (parameters: GetBoard, options?: RequestOptions): Promise<Board> =>
        boards.getBoard(client, parameters, options),
      updateBoard: (parameters: UpdateBoard, options?: RequestOptions): Promise<Board> =>
        boards.updateBoard(client, parameters, options),
      deleteBoard: (parameters: DeleteBoard, options?: RequestOptions): Promise<void> =>
        boards.deleteBoard(client, parameters, options),
      getBoardField: <T = unknown>(parameters: GetBoardField, options?: RequestOptions): Promise<FieldValue<T>> =>
        boards.getBoardField<T>(client, parameters, options),
      getBoardActions: (parameters: GetBoardActions, options?: RequestOptions): Promise<Action[]> =>
        boards.getBoardActions(client, parameters, options),
      getBoardStars: (parameters: GetBoardStars, options?: RequestOptions): Promise<BoardStars[]> =>
        boards.getBoardStars(client, parameters, options),
      getBoardChecklists: (parameters: GetBoardChecklists, options?: RequestOptions): Promise<Checklist[]> =>
        boards.getBoardChecklists(client, parameters, options),
      getBoardCards: (parameters: GetBoardCards, options?: RequestOptions): Promise<Card[]> =>
        boards.getBoardCards(client, parameters, options),
      getBoardCardsByFilter: (parameters: GetBoardCardsByFilter, options?: RequestOptions): Promise<Card[]> =>
        boards.getBoardCardsByFilter(client, parameters, options),
      getBoardCustomFields: (parameters: GetBoardCustomFields, options?: RequestOptions): Promise<CustomField[]> =>
        boards.getBoardCustomFields(client, parameters, options),
      getBoardLabels: (parameters: GetBoardLabels, options?: RequestOptions): Promise<Label[]> =>
        boards.getBoardLabels(client, parameters, options),
      createBoardLabel: (parameters: CreateBoardLabel, options?: RequestOptions): Promise<Label> =>
        boards.createBoardLabel(client, parameters, options),
      getBoardLists: (parameters: GetBoardLists, options?: RequestOptions): Promise<TrelloList[]> =>
        boards.getBoardLists(client, parameters, options),
      createBoardList: (parameters: CreateBoardList, options?: RequestOptions): Promise<TrelloList> =>
        boards.createBoardList(client, parameters, options),
      getBoardListsByFilter: (parameters: GetBoardListsByFilter, options?: RequestOptions): Promise<TrelloList[]> =>
        boards.getBoardListsByFilter(client, parameters, options),
      getBoardMembers: (parameters: GetBoardMembers, options?: RequestOptions): Promise<Member[]> =>
        boards.getBoardMembers(client, parameters, options),
      inviteBoardMember: (parameters: InviteBoardMember, options?: RequestOptions): Promise<BoardMembersResult> =>
        boards.inviteBoardMember(client, parameters, options),
      updateBoardMember: (parameters: UpdateBoardMember, options?: RequestOptions): Promise<BoardMembersResult> =>
        boards.updateBoardMember(client, parameters, options),
      removeBoardMember: (parameters: RemoveBoardMember, options?: RequestOptions): Promise<void> =>
        boards.removeBoardMember(client, parameters, options),
      updateBoardMembership: (parameters: UpdateBoardMembership, options?: RequestOptions): Promise<Memberships> =>
        boards.updateBoardMembership(client, parameters, options),
      updateBoardEmailPosition: (
        parameters: UpdateBoardEmailPosition,
        options?: RequestOptions,
      ): Promise<BoardMyPrefs> => boards.updateBoardEmailPosition(client, parameters, options),
      updateBoardEmailList: (parameters: UpdateBoardEmailList, options?: RequestOptions): Promise<BoardMyPrefs> =>
        boards.updateBoardEmailList(client, parameters, options),
      updateBoardShowSidebar: (parameters: UpdateBoardShowSidebar, options?: RequestOptions): Promise<BoardMyPrefs> =>
        boards.updateBoardShowSidebar(client, parameters, options),
      updateBoardShowSidebarActivity: (
        parameters: UpdateBoardShowSidebarActivity,
        options?: RequestOptions,
      ): Promise<BoardMyPrefs> => boards.updateBoardShowSidebarActivity(client, parameters, options),
      updateBoardShowSidebarBoardActions: (
        parameters: UpdateBoardShowSidebarBoardActions,
        options?: RequestOptions,
      ): Promise<BoardMyPrefs> => boards.updateBoardShowSidebarBoardActions(client, parameters, options),
      updateBoardShowSidebarMembers: (
        parameters: UpdateBoardShowSidebarMembers,
        options?: RequestOptions,
      ): Promise<BoardMyPrefs> => boards.updateBoardShowSidebarMembers(client, parameters, options),
      createBoard: (parameters: CreateBoard, options?: RequestOptions): Promise<Board> =>
        boards.createBoard(client, parameters, options),
      generateBoardCalendarKey: (parameters: GenerateBoardCalendarKey, options?: RequestOptions): Promise<Board> =>
        boards.generateBoardCalendarKey(client, parameters, options),
      generateBoardEmailKey: (parameters: GenerateBoardEmailKey, options?: RequestOptions): Promise<Board> =>
        boards.generateBoardEmailKey(client, parameters, options),
      addBoardTag: (parameters: AddBoardTag, options?: RequestOptions): Promise<Tag> =>
        boards.addBoardTag(client, parameters, options),
      markBoardAsViewed: (parameters: MarkBoardAsViewed, options?: RequestOptions): Promise<Board> =>
        boards.markBoardAsViewed(client, parameters, options),
      getBoardPlugins: (parameters: GetBoardPlugins, options?: RequestOptions): Promise<Plugin[]> =>
        boards.getBoardPlugins(client, parameters, options),
      enableBoardPlugin: (parameters: EnableBoardPlugin, options?: RequestOptions): Promise<Plugin> =>
        boards.enableBoardPlugin(client, parameters, options),
      disableBoardPlugin: (parameters: DisableBoardPlugin, options?: RequestOptions): Promise<void> =>
        boards.disableBoardPlugin(client, parameters, options),
      getBoardPowerUps: (parameters: GetBoardPowerUps, options?: RequestOptions): Promise<Plugin[]> =>
        boards.getBoardPowerUps(client, parameters, options),
      createBoardExport: (parameters: CreateBoardExport, options?: RequestOptions): Promise<Export> =>
        boards.createBoardExport(client, parameters, options),
      getBoardExport: (parameters: GetBoardExport, options?: RequestOptions): Promise<Export> =>
        boards.getBoardExport(client, parameters, options),
      deleteBoardExport: (parameters: DeleteBoardExport, options?: RequestOptions): Promise<void> =>
        boards.deleteBoardExport(client, parameters, options),
      downloadBoardExport: (parameters: DownloadBoardExport, options?: RequestOptions): Promise<unknown> =>
        boards.downloadBoardExport(client, parameters, options),
      getBoardMostRecentExport: (parameters: GetBoardMostRecentExport, options?: RequestOptions): Promise<Export> =>
        boards.getBoardMostRecentExport(client, parameters, options),
    },
    cards: {
      createCard: (parameters: CreateCard, options?: RequestOptions): Promise<Card> =>
        cards.createCard(client, parameters, options),
      getCard: (parameters: GetCard, options?: RequestOptions): Promise<Card> =>
        cards.getCard(client, parameters, options),
      updateCard: (parameters: UpdateCard, options?: RequestOptions): Promise<Card> =>
        cards.updateCard(client, parameters, options),
      deleteCard: (parameters: DeleteCard, options?: RequestOptions): Promise<void> =>
        cards.deleteCard(client, parameters, options),
      getCardField: <T = unknown>(parameters: GetCardField, options?: RequestOptions): Promise<FieldValue<T>> =>
        cards.getCardField<T>(client, parameters, options),
      getCardActions: (parameters: GetCardActions, options?: RequestOptions): Promise<Action[]> =>
        cards.getCardActions(client, parameters, options),
      getCardAttachments: (parameters: GetCardAttachments, options?: RequestOptions): Promise<Attachment[]> =>
        cards.getCardAttachments(client, parameters, options),
      createCardAttachment: (parameters: CreateCardAttachment, options?: RequestOptions): Promise<Attachment> =>
        cards.createCardAttachment(client, parameters, options),
      getCardAttachment: (parameters: GetCardAttachment, options?: RequestOptions): Promise<Attachment> =>
        cards.getCardAttachment(client, parameters, options),
      deleteCardAttachment: (parameters: DeleteCardAttachment, options?: RequestOptions): Promise<void> =>
        cards.deleteCardAttachment(client, parameters, options),
      getCardBoard: (parameters: GetCardBoard, options?: RequestOptions): Promise<Board> =>
        cards.getCardBoard(client, parameters, options),
      getCardCheckItemStates: (
        parameters: GetCardCheckItemStates,
        options?: RequestOptions,
      ): Promise<CheckItemState[]> => cards.getCardCheckItemStates(client, parameters, options),
      getCardChecklists: (parameters: GetCardChecklists, options?: RequestOptions): Promise<Checklist[]> =>
        cards.getCardChecklists(client, parameters, options),
      createCardChecklist: (parameters: CreateCardChecklist, options?: RequestOptions): Promise<Checklist> =>
        cards.createCardChecklist(client, parameters, options),
      getCardCheckItem: (parameters: GetCardCheckItem, options?: RequestOptions): Promise<CheckItem> =>
        cards.getCardCheckItem(client, parameters, options),
      updateCardCheckItem: (parameters: UpdateCardCheckItem, options?: RequestOptions): Promise<CheckItem> =>
        cards.updateCardCheckItem(client, parameters, options),
      deleteCardCheckItem: (parameters: DeleteCardCheckItem, options?: RequestOptions): Promise<void> =>
        cards.deleteCardCheckItem(client, parameters, options),
      getCardList: (parameters: GetCardList, options?: RequestOptions): Promise<TrelloList> =>
        cards.getCardList(client, parameters, options),
      getCardMembers: (parameters: GetCardMembers, options?: RequestOptions): Promise<Member[]> =>
        cards.getCardMembers(client, parameters, options),
      getCardMembersVoted: (parameters: GetCardMembersVoted, options?: RequestOptions): Promise<Member[]> =>
        cards.getCardMembersVoted(client, parameters, options),
      voteOnCard: (parameters: VoteOnCard, options?: RequestOptions): Promise<void> =>
        cards.voteOnCard(client, parameters, options),
      getCardPluginData: (parameters: GetCardPluginData, options?: RequestOptions): Promise<PluginData[]> =>
        cards.getCardPluginData(client, parameters, options),
      getCardStickers: (parameters: GetCardStickers, options?: RequestOptions): Promise<CardSticker[]> =>
        cards.getCardStickers(client, parameters, options),
      createCardSticker: (parameters: CreateCardSticker, options?: RequestOptions): Promise<CardSticker> =>
        cards.createCardSticker(client, parameters, options),
      getCardSticker: (parameters: GetCardSticker, options?: RequestOptions): Promise<CardSticker> =>
        cards.getCardSticker(client, parameters, options),
      updateCardSticker: (parameters: UpdateCardSticker, options?: RequestOptions): Promise<CardSticker> =>
        cards.updateCardSticker(client, parameters, options),
      deleteCardSticker: (parameters: DeleteCardSticker, options?: RequestOptions): Promise<void> =>
        cards.deleteCardSticker(client, parameters, options),
      updateCardComment: (parameters: UpdateCardComment, options?: RequestOptions): Promise<Action> =>
        cards.updateCardComment(client, parameters, options),
      deleteCardComment: (parameters: DeleteCardComment, options?: RequestOptions): Promise<void> =>
        cards.deleteCardComment(client, parameters, options),
      updateCardCustomFieldItem: (parameters: UpdateCardCustomFieldItem, options?: RequestOptions): Promise<void> =>
        cards.updateCardCustomFieldItem(client, parameters, options),
      updateCardCustomFields: (parameters: UpdateCardCustomFields, options?: RequestOptions): Promise<void> =>
        cards.updateCardCustomFields(client, parameters, options),
      getCardCustomFieldItems: (
        parameters: GetCardCustomFieldItems,
        options?: RequestOptions,
      ): Promise<CustomFieldItems[]> => cards.getCardCustomFieldItems(client, parameters, options),
      createCardComment: (parameters: CreateCardComment, options?: RequestOptions): Promise<Action> =>
        cards.createCardComment(client, parameters, options),
      addCardLabel: (parameters: AddCardLabel, options?: RequestOptions): Promise<void> =>
        cards.addCardLabel(client, parameters, options),
      addCardMember: (parameters: AddCardMember, options?: RequestOptions): Promise<Member[]> =>
        cards.addCardMember(client, parameters, options),
      createCardLabel: (parameters: CreateCardLabel, options?: RequestOptions): Promise<Label> =>
        cards.createCardLabel(client, parameters, options),
      markCardNotificationsRead: (parameters: MarkCardNotificationsRead, options?: RequestOptions): Promise<void> =>
        cards.markCardNotificationsRead(client, parameters, options),
      removeCardLabel: (parameters: RemoveCardLabel, options?: RequestOptions): Promise<void> =>
        cards.removeCardLabel(client, parameters, options),
      removeCardMember: (parameters: RemoveCardMember, options?: RequestOptions): Promise<void> =>
        cards.removeCardMember(client, parameters, options),
      removeCardMemberVote: (parameters: RemoveCardMemberVote, options?: RequestOptions): Promise<void> =>
        cards.removeCardMemberVote(client, parameters, options),
      updateCardChecklistItem: (parameters: UpdateCardChecklistItem, options?: RequestOptions): Promise<CheckItem> =>
        cards.updateCardChecklistItem(client, parameters, options),
      removeCardChecklist: (parameters: RemoveCardChecklist, options?: RequestOptions): Promise<void> =>
        cards.removeCardChecklist(client, parameters, options),
    },
    checklists: {
      createChecklist: (parameters: CreateChecklist, options?: RequestOptions): Promise<Checklist> =>
        checklists.createChecklist(client, parameters, options),
      getChecklist: (parameters: GetChecklist, options?: RequestOptions): Promise<Checklist> =>
        checklists.getChecklist(client, parameters, options),
      updateChecklist: (parameters: UpdateChecklist, options?: RequestOptions): Promise<Checklist> =>
        checklists.updateChecklist(client, parameters, options),
      deleteChecklist: (parameters: DeleteChecklist, options?: RequestOptions): Promise<void> =>
        checklists.deleteChecklist(client, parameters, options),
      getChecklistField: <T = unknown>(
        parameters: GetChecklistField,
        options?: RequestOptions,
      ): Promise<FieldValue<T>> => checklists.getChecklistField<T>(client, parameters, options),
      updateChecklistField: (parameters: UpdateChecklistField, options?: RequestOptions): Promise<Checklist> =>
        checklists.updateChecklistField(client, parameters, options),
      getChecklistBoard: (parameters: GetChecklistBoard, options?: RequestOptions): Promise<Board> =>
        checklists.getChecklistBoard(client, parameters, options),
      getChecklistCards: (parameters: GetChecklistCards, options?: RequestOptions): Promise<Card[]> =>
        checklists.getChecklistCards(client, parameters, options),
      getChecklistItems: (parameters: GetChecklistItems, options?: RequestOptions): Promise<CheckItem[]> =>
        checklists.getChecklistItems(client, parameters, options),
      createChecklistItem: (parameters: CreateChecklistItem, options?: RequestOptions): Promise<CheckItem> =>
        checklists.createChecklistItem(client, parameters, options),
      getChecklistItem: (parameters: GetChecklistItem, options?: RequestOptions): Promise<CheckItem> =>
        checklists.getChecklistItem(client, parameters, options),
      deleteChecklistItem: (parameters: DeleteChecklistItem, options?: RequestOptions): Promise<void> =>
        checklists.deleteChecklistItem(client, parameters, options),
    },
    customFields: {
      createCustomField: (parameters: CreateCustomField, options?: RequestOptions): Promise<CustomField> =>
        customFields.createCustomField(client, parameters, options),
      getCustomField: (parameters: GetCustomField, options?: RequestOptions): Promise<CustomField> =>
        customFields.getCustomField(client, parameters, options),
      updateCustomField: (parameters: UpdateCustomField, options?: RequestOptions): Promise<CustomField> =>
        customFields.updateCustomField(client, parameters, options),
      deleteCustomField: (parameters: DeleteCustomField, options?: RequestOptions): Promise<void> =>
        customFields.deleteCustomField(client, parameters, options),
      getCustomFieldOptions: (
        parameters: GetCustomFieldOptions,
        options?: RequestOptions,
      ): Promise<CustomFieldOption[]> => customFields.getCustomFieldOptions(client, parameters, options),
      createCustomFieldOption: (
        parameters: CreateCustomFieldOption,
        options?: RequestOptions,
      ): Promise<CustomFieldOption> => customFields.createCustomFieldOption(client, parameters, options),
      getCustomFieldOption: (parameters: GetCustomFieldOption, options?: RequestOptions): Promise<CustomFieldOption> =>
        customFields.getCustomFieldOption(client, parameters, options),
      deleteCustomFieldOption: (parameters: DeleteCustomFieldOption, options?: RequestOptions): Promise<void> =>
        customFields.deleteCustomFieldOption(client, parameters, options),
    },
    emoji: {
      getEmoji: (parameters?: GetEmoji, options?: RequestOptions): Promise<Emoji> =>
        emoji.getEmoji(client, parameters, options),
    },
    enterprises: {
      getEnterprise: (parameters: GetEnterprise, options?: RequestOptions): Promise<Enterprise> =>
        enterprises.getEnterprise(client, parameters, options),
      getEnterpriseAuditLog: (
        parameters: GetEnterpriseAuditLog,
        options?: RequestOptions,
      ): Promise<EnterpriseAuditLog[]> => enterprises.getEnterpriseAuditLog(client, parameters, options),
      getEnterpriseAdmins: (parameters: GetEnterpriseAdmins, options?: RequestOptions): Promise<EnterpriseAdmin> =>
        enterprises.getEnterpriseAdmins(client, parameters, options),
      getEnterpriseSignUpUrl: (
        parameters: GetEnterpriseSignUpUrl,
        options?: RequestOptions,
      ): Promise<GetEnterpriseSignUpUrlModel> => enterprises.getEnterpriseSignUpUrl(client, parameters, options),
      getUser: (parameters: GetUser, options?: RequestOptions): Promise<Membership[]> =>
        enterprises.getUser(client, parameters, options),
      getEnterpriseMembers: (parameters: GetEnterpriseMembers, options?: RequestOptions): Promise<Member[]> =>
        enterprises.getEnterpriseMembers(client, parameters, options),
      getEnterpriseMember: (parameters: GetEnterpriseMember, options?: RequestOptions): Promise<Member> =>
        enterprises.getEnterpriseMember(client, parameters, options),
      getEnterpriseTransferrableOrganization: (
        parameters: GetEnterpriseTransferrableOrganization,
        options?: RequestOptions,
      ): Promise<TransferrableOrganization> =>
        enterprises.getEnterpriseTransferrableOrganization(client, parameters, options),
      getEnterpriseBulkTransferrableOrganizations: (
        parameters: GetEnterpriseBulkTransferrableOrganizations,
        options?: RequestOptions,
      ): Promise<TransferrableOrganization[]> =>
        enterprises.getEnterpriseBulkTransferrableOrganizations(client, parameters, options),
      updateEnterpriseJoinRequests: (
        parameters: UpdateEnterpriseJoinRequests,
        options?: RequestOptions,
      ): Promise<void> => enterprises.updateEnterpriseJoinRequests(client, parameters, options),
      getEnterpriseClaimableOrganizations: (
        parameters: GetEnterpriseClaimableOrganizations,
        options?: RequestOptions,
      ): Promise<ClaimableOrganizations> =>
        enterprises.getEnterpriseClaimableOrganizations(client, parameters, options),
      getEnterprisePendingOrganizations: (
        parameters: GetEnterprisePendingOrganizations,
        options?: RequestOptions,
      ): Promise<PendingOrganizations[]> => enterprises.getEnterprisePendingOrganizations(client, parameters, options),
      createEnterpriseToken: (parameters: CreateEnterpriseToken, options?: RequestOptions): Promise<APIToken> =>
        enterprises.createEnterpriseToken(client, parameters, options),
      getEnterpriseOrganizations: (
        parameters: GetEnterpriseOrganizations,
        options?: RequestOptions,
      ): Promise<Organization[]> => enterprises.getEnterpriseOrganizations(client, parameters, options),
      addEnterpriseOrganization: (
        parameters: AddEnterpriseOrganization,
        options?: RequestOptions,
      ): Promise<Organization[]> => enterprises.addEnterpriseOrganization(client, parameters, options),
      updateEnterpriseMemberLicensed: (
        parameters: UpdateEnterpriseMemberLicensed,
        options?: RequestOptions,
      ): Promise<Member> => enterprises.updateEnterpriseMemberLicensed(client, parameters, options),
      deactivateEnterpriseMember: (parameters: DeactivateEnterpriseMember, options?: RequestOptions): Promise<Member> =>
        enterprises.deactivateEnterpriseMember(client, parameters, options),
      addEnterpriseAdmin: (parameters: AddEnterpriseAdmin, options?: RequestOptions): Promise<void> =>
        enterprises.addEnterpriseAdmin(client, parameters, options),
      removeEnterpriseAdmin: (parameters: RemoveEnterpriseAdmin, options?: RequestOptions): Promise<void> =>
        enterprises.removeEnterpriseAdmin(client, parameters, options),
      removeEnterpriseOrganization: (
        parameters: RemoveEnterpriseOrganization,
        options?: RequestOptions,
      ): Promise<void> => enterprises.removeEnterpriseOrganization(client, parameters, options),
      getEnterpriseBulkOrganizations: (
        parameters: GetEnterpriseBulkOrganizations,
        options?: RequestOptions,
      ): Promise<Organization[]> => enterprises.getEnterpriseBulkOrganizations(client, parameters, options),
    },
    labels: {
      getLabel: (parameters: GetLabel, options?: RequestOptions): Promise<Label> =>
        labels.getLabel(client, parameters, options),
      updateLabel: (parameters: UpdateLabel, options?: RequestOptions): Promise<Label> =>
        labels.updateLabel(client, parameters, options),
      deleteLabel: (parameters: DeleteLabel, options?: RequestOptions): Promise<void> =>
        labels.deleteLabel(client, parameters, options),
      updateLabelField: (parameters: UpdateLabelField, options?: RequestOptions): Promise<Label> =>
        labels.updateLabelField(client, parameters, options),
      createLabel: (parameters: CreateLabel, options?: RequestOptions): Promise<Label> =>
        labels.createLabel(client, parameters, options),
    },
    lists: {
      getList: (parameters: GetList, options?: RequestOptions): Promise<TrelloList> =>
        lists.getList(client, parameters, options),
      updateList: (parameters: UpdateList, options?: RequestOptions): Promise<TrelloList> =>
        lists.updateList(client, parameters, options),
      createList: (parameters: CreateList, options?: RequestOptions): Promise<TrelloList> =>
        lists.createList(client, parameters, options),
      archiveAllListCards: (parameters: ArchiveAllListCards, options?: RequestOptions): Promise<void> =>
        lists.archiveAllListCards(client, parameters, options),
      moveAllListCards: (parameters: MoveAllListCards, options?: RequestOptions): Promise<void> =>
        lists.moveAllListCards(client, parameters, options),
      archiveList: (parameters: ArchiveList, options?: RequestOptions): Promise<TrelloList> =>
        lists.archiveList(client, parameters, options),
      moveListToBoard: (parameters: MoveListToBoard, options?: RequestOptions): Promise<TrelloList> =>
        lists.moveListToBoard(client, parameters, options),
      updateListField: (parameters: UpdateListField, options?: RequestOptions): Promise<TrelloList> =>
        lists.updateListField(client, parameters, options),
      getListActions: (parameters: GetListActions, options?: RequestOptions): Promise<Action[]> =>
        lists.getListActions(client, parameters, options),
      getListBoard: (parameters: GetListBoard, options?: RequestOptions): Promise<Board> =>
        lists.getListBoard(client, parameters, options),
      getListCards: (parameters: GetListCards, options?: RequestOptions): Promise<Card[]> =>
        lists.getListCards(client, parameters, options),
    },
    members: {
      getMember: (parameters: GetMember, options?: RequestOptions): Promise<Member> =>
        members.getMember(client, parameters, options),
      updateMember: (parameters: UpdateMember, options?: RequestOptions): Promise<Member> =>
        members.updateMember(client, parameters, options),
      getMemberField: <T = unknown>(parameters: GetMemberField, options?: RequestOptions): Promise<FieldValue<T>> =>
        members.getMemberField<T>(client, parameters, options),
      getMemberActions: (parameters: GetMemberActions, options?: RequestOptions): Promise<Action[]> =>
        members.getMemberActions(client, parameters, options),
      getMemberBoardBackgrounds: (
        parameters: GetMemberBoardBackgrounds,
        options?: RequestOptions,
      ): Promise<BoardBackground[]> => members.getMemberBoardBackgrounds(client, parameters, options),
      createMemberBoardBackground: (
        parameters: CreateMemberBoardBackground,
        options?: RequestOptions,
      ): Promise<BoardBackground[]> => members.createMemberBoardBackground(client, parameters, options),
      getMemberBoardBackground: (
        parameters: GetMemberBoardBackground,
        options?: RequestOptions,
      ): Promise<BoardBackground> => members.getMemberBoardBackground(client, parameters, options),
      updateMemberBoardBackground: (
        parameters: UpdateMemberBoardBackground,
        options?: RequestOptions,
      ): Promise<BoardBackground> => members.updateMemberBoardBackground(client, parameters, options),
      deleteMemberBoardBackground: (parameters: DeleteMemberBoardBackground, options?: RequestOptions): Promise<void> =>
        members.deleteMemberBoardBackground(client, parameters, options),
      getMemberBoardStars: (parameters: GetMemberBoardStars, options?: RequestOptions): Promise<BoardStars[]> =>
        members.getMemberBoardStars(client, parameters, options),
      starBoard: (parameters: StarBoard, options?: RequestOptions): Promise<BoardStars> =>
        members.starBoard(client, parameters, options),
      getMemberBoardStar: (parameters: GetMemberBoardStar, options?: RequestOptions): Promise<BoardStars> =>
        members.getMemberBoardStar(client, parameters, options),
      updateMemberBoardStar: (parameters: UpdateMemberBoardStar, options?: RequestOptions): Promise<BoardStars> =>
        members.updateMemberBoardStar(client, parameters, options),
      unstarBoard: (parameters: UnstarBoard, options?: RequestOptions): Promise<void> =>
        members.unstarBoard(client, parameters, options),
      getMemberBoards: (parameters: GetMemberBoards, options?: RequestOptions): Promise<Board[]> =>
        members.getMemberBoards(client, parameters, options),
      getMemberInvitedBoards: (parameters: GetMemberInvitedBoards, options?: RequestOptions): Promise<Board[]> =>
        members.getMemberInvitedBoards(client, parameters, options),
      getMemberCards: (parameters: GetMemberCards, options?: RequestOptions): Promise<Card[]> =>
        members.getMemberCards(client, parameters, options),
      getMemberCustomBoardBackgrounds: (
        parameters: GetMemberCustomBoardBackgrounds,
        options?: RequestOptions,
      ): Promise<BoardBackground[]> => members.getMemberCustomBoardBackgrounds(client, parameters, options),
      createMemberCustomBoardBackground: (
        parameters: CreateMemberCustomBoardBackground,
        options?: RequestOptions,
      ): Promise<BoardBackground> => members.createMemberCustomBoardBackground(client, parameters, options),
      getMemberCustomBoardBackground: (
        parameters: GetMemberCustomBoardBackground,
        options?: RequestOptions,
      ): Promise<BoardBackground> => members.getMemberCustomBoardBackground(client, parameters, options),
      updateMemberCustomBoardBackground: (
        parameters: UpdateMemberCustomBoardBackground,
        options?: RequestOptions,
      ): Promise<BoardBackground> => members.updateMemberCustomBoardBackground(client, parameters, options),
      deleteMemberCustomBoardBackground: (
        parameters: DeleteMemberCustomBoardBackground,
        options?: RequestOptions,
      ): Promise<void> => members.deleteMemberCustomBoardBackground(client, parameters, options),
      getMemberCustomEmojis: (parameters: GetMemberCustomEmojis, options?: RequestOptions): Promise<CustomEmoji[]> =>
        members.getMemberCustomEmojis(client, parameters, options),
      uploadMemberCustomEmoji: (parameters: UploadMemberCustomEmoji, options?: RequestOptions): Promise<CustomEmoji> =>
        members.uploadMemberCustomEmoji(client, parameters, options),
      getMemberCustomEmoji: (parameters: GetMemberCustomEmoji, options?: RequestOptions): Promise<CustomEmoji> =>
        members.getMemberCustomEmoji(client, parameters, options),
      getMemberCustomStickers: (
        parameters: GetMemberCustomStickers,
        options?: RequestOptions,
      ): Promise<CustomSticker[]> => members.getMemberCustomStickers(client, parameters, options),
      uploadMemberCustomSticker: (
        parameters: UploadMemberCustomSticker,
        options?: RequestOptions,
      ): Promise<CustomSticker> => members.uploadMemberCustomSticker(client, parameters, options),
      getMemberCustomSticker: (parameters: GetMemberCustomSticker, options?: RequestOptions): Promise<CustomSticker> =>
        members.getMemberCustomSticker(client, parameters, options),
      deleteMemberCustomSticker: (parameters: DeleteMemberCustomSticker, options?: RequestOptions): Promise<void> =>
        members.deleteMemberCustomSticker(client, parameters, options),
      getMemberNotifications: (parameters: GetMemberNotifications, options?: RequestOptions): Promise<Notification[]> =>
        members.getMemberNotifications(client, parameters, options),
      getMemberOrganizations: (parameters: GetMemberOrganizations, options?: RequestOptions): Promise<Organization[]> =>
        members.getMemberOrganizations(client, parameters, options),
      getMemberInvitedOrganizations: (
        parameters: GetMemberInvitedOrganizations,
        options?: RequestOptions,
      ): Promise<Organization[]> => members.getMemberInvitedOrganizations(client, parameters, options),
      getMemberSavedSearches: (parameters: GetMemberSavedSearches, options?: RequestOptions): Promise<SavedSearch[]> =>
        members.getMemberSavedSearches(client, parameters, options),
      createMemberSavedSearch: (parameters: CreateMemberSavedSearch, options?: RequestOptions): Promise<SavedSearch> =>
        members.createMemberSavedSearch(client, parameters, options),
      getMemberSavedSearch: (parameters: GetMemberSavedSearch, options?: RequestOptions): Promise<SavedSearch> =>
        members.getMemberSavedSearch(client, parameters, options),
      updateMemberSavedSearch: (parameters: UpdateMemberSavedSearch, options?: RequestOptions): Promise<SavedSearch> =>
        members.updateMemberSavedSearch(client, parameters, options),
      deleteMemberSavedSearch: (parameters: DeleteMemberSavedSearch, options?: RequestOptions): Promise<void> =>
        members.deleteMemberSavedSearch(client, parameters, options),
      getMemberTokens: (parameters: GetMemberTokens, options?: RequestOptions): Promise<Token[]> =>
        members.getMemberTokens(client, parameters, options),
      uploadMemberAvatar: (parameters: UploadMemberAvatar, options?: RequestOptions): Promise<void> =>
        members.uploadMemberAvatar(client, parameters, options),
      dismissMemberOneTimeMessage: (parameters: DismissMemberOneTimeMessage, options?: RequestOptions): Promise<void> =>
        members.dismissMemberOneTimeMessage(client, parameters, options),
      getMemberNotificationChannelSettings: (
        parameters: GetMemberNotificationChannelSettings,
        options?: RequestOptions,
      ): Promise<NotificationChannelSettings[]> =>
        members.getMemberNotificationChannelSettings(client, parameters, options),
      updateMemberNotificationChannelSettings: (
        parameters: UpdateMemberNotificationChannelSettings,
        options?: RequestOptions,
      ): Promise<NotificationChannelSettings> =>
        members.updateMemberNotificationChannelSettings(client, parameters, options),
      getMemberNotificationChannelSetting: (
        parameters: GetMemberNotificationChannelSetting,
        options?: RequestOptions,
      ): Promise<NotificationChannelSettings> =>
        members.getMemberNotificationChannelSetting(client, parameters, options),
      updateMemberNotificationChannelSetting: (
        parameters: UpdateMemberNotificationChannelSetting,
        options?: RequestOptions,
      ): Promise<NotificationChannelSettings> =>
        members.updateMemberNotificationChannelSetting(client, parameters, options),
      updateMemberNotificationChannelBlockedKey: (
        parameters: UpdateMemberNotificationChannelBlockedKey,
        options?: RequestOptions,
      ): Promise<NotificationChannelSettings> =>
        members.updateMemberNotificationChannelBlockedKey(client, parameters, options),
    },
    notifications: {
      getNotification: (parameters: GetNotification, options?: RequestOptions): Promise<Notification> =>
        notifications.getNotification(client, parameters, options),
      updateNotification: (parameters: UpdateNotification, options?: RequestOptions): Promise<Notification> =>
        notifications.updateNotification(client, parameters, options),
      getNotificationField: <T = unknown>(
        parameters: GetNotificationField,
        options?: RequestOptions,
      ): Promise<FieldValue<T>> => notifications.getNotificationField<T>(client, parameters, options),
      markAllNotificationsRead: (parameters: MarkAllNotificationsRead, options?: RequestOptions): Promise<void> =>
        notifications.markAllNotificationsRead(client, parameters, options),
      updateNotificationUnreadStatus: (
        parameters: UpdateNotificationUnreadStatus,
        options?: RequestOptions,
      ): Promise<Notification> => notifications.updateNotificationUnreadStatus(client, parameters, options),
      getNotificationBoard: (parameters: GetNotificationBoard, options?: RequestOptions): Promise<Board> =>
        notifications.getNotificationBoard(client, parameters, options),
      getNotificationCard: (parameters: GetNotificationCard, options?: RequestOptions): Promise<Card> =>
        notifications.getNotificationCard(client, parameters, options),
      getNotificationList: (parameters: GetNotificationList, options?: RequestOptions): Promise<TrelloList> =>
        notifications.getNotificationList(client, parameters, options),
      getNotificationMember: (parameters: GetNotificationMember, options?: RequestOptions): Promise<Member> =>
        notifications.getNotificationMember(client, parameters, options),
      getNotificationCreator: (parameters: GetNotificationCreator, options?: RequestOptions): Promise<Member> =>
        notifications.getNotificationCreator(client, parameters, options),
      getNotificationOrganization: (
        parameters: GetNotificationOrganization,
        options?: RequestOptions,
      ): Promise<Organization> => notifications.getNotificationOrganization(client, parameters, options),
    },
    organizations: {
      createOrganization: (parameters: CreateOrganization, options?: RequestOptions): Promise<Organization> =>
        organizations.createOrganization(client, parameters, options),
      getOrganization: (parameters: GetOrganization, options?: RequestOptions): Promise<Organization> =>
        organizations.getOrganization(client, parameters, options),
      updateOrganization: (parameters: UpdateOrganization, options?: RequestOptions): Promise<Organization> =>
        organizations.updateOrganization(client, parameters, options),
      deleteOrganization: (parameters: DeleteOrganization, options?: RequestOptions): Promise<void> =>
        organizations.deleteOrganization(client, parameters, options),
      getOrganizationField: <T = unknown>(
        parameters: GetOrganizationField,
        options?: RequestOptions,
      ): Promise<FieldValue<T>> => organizations.getOrganizationField<T>(client, parameters, options),
      getOrganizationActions: (parameters: GetOrganizationActions, options?: RequestOptions): Promise<Action[]> =>
        organizations.getOrganizationActions(client, parameters, options),
      getOrganizationBoards: (parameters: GetOrganizationBoards, options?: RequestOptions): Promise<Board[]> =>
        organizations.getOrganizationBoards(client, parameters, options),
      getOrganizationExports: (parameters: GetOrganizationExports, options?: RequestOptions): Promise<Export[]> =>
        organizations.getOrganizationExports(client, parameters, options),
      createOrganizationExport: (parameters: CreateOrganizationExport, options?: RequestOptions): Promise<Export> =>
        organizations.createOrganizationExport(client, parameters, options),
      getOrganizationMembers: (parameters: GetOrganizationMembers, options?: RequestOptions): Promise<Member[]> =>
        organizations.getOrganizationMembers(client, parameters, options),
      updateOrganizationMembers: (parameters: UpdateOrganizationMembers, options?: RequestOptions): Promise<void> =>
        organizations.updateOrganizationMembers(client, parameters, options),
      getOrganizationMemberships: (
        parameters: GetOrganizationMemberships,
        options?: RequestOptions,
      ): Promise<Memberships[]> => organizations.getOrganizationMemberships(client, parameters, options),
      getOrganizationMembership: (
        parameters: GetOrganizationMembership,
        options?: RequestOptions,
      ): Promise<Memberships> => organizations.getOrganizationMembership(client, parameters, options),
      getOrganizationPluginData: (
        parameters: GetOrganizationPluginData,
        options?: RequestOptions,
      ): Promise<PluginData[]> => organizations.getOrganizationPluginData(client, parameters, options),
      getOrganizationTags: (parameters: GetOrganizationTags, options?: RequestOptions): Promise<Tag[]> =>
        organizations.getOrganizationTags(client, parameters, options),
      createOrganizationTag: (parameters: CreateOrganizationTag, options?: RequestOptions): Promise<Tag> =>
        organizations.createOrganizationTag(client, parameters, options),
      updateOrganizationMember: (parameters: UpdateOrganizationMember, options?: RequestOptions): Promise<Member> =>
        organizations.updateOrganizationMember(client, parameters, options),
      removeOrganizationMember: (parameters: RemoveOrganizationMember, options?: RequestOptions): Promise<void> =>
        organizations.removeOrganizationMember(client, parameters, options),
      deactivateOrganizationMember: (
        parameters: DeactivateOrganizationMember,
        options?: RequestOptions,
      ): Promise<void> => organizations.deactivateOrganizationMember(client, parameters, options),
      uploadOrganizationLogo: (parameters: UploadOrganizationLogo, options?: RequestOptions): Promise<Organization> =>
        organizations.uploadOrganizationLogo(client, parameters, options),
      deleteOrganizationLogo: (parameters: DeleteOrganizationLogo, options?: RequestOptions): Promise<void> =>
        organizations.deleteOrganizationLogo(client, parameters, options),
      removeOrganizationMemberFromAllBoards: (
        parameters: RemoveOrganizationMemberFromAllBoards,
        options?: RequestOptions,
      ): Promise<void> => organizations.removeOrganizationMemberFromAllBoards(client, parameters, options),
      deleteOrganizationAssociatedDomain: (
        parameters: DeleteOrganizationAssociatedDomain,
        options?: RequestOptions,
      ): Promise<void> => organizations.deleteOrganizationAssociatedDomain(client, parameters, options),
      deleteOrganizationInviteRestriction: (
        parameters: DeleteOrganizationInviteRestriction,
        options?: RequestOptions,
      ): Promise<void> => organizations.deleteOrganizationInviteRestriction(client, parameters, options),
      deleteOrganizationTag: (parameters: DeleteOrganizationTag, options?: RequestOptions): Promise<void> =>
        organizations.deleteOrganizationTag(client, parameters, options),
      getOrganizationNewBillableGuests: (
        parameters: GetOrganizationNewBillableGuests,
        options?: RequestOptions,
      ): Promise<unknown> => organizations.getOrganizationNewBillableGuests(client, parameters, options),
    },
    plugins: {
      getPlugin: (parameters: GetPlugin, options?: RequestOptions): Promise<Plugin> =>
        plugins.getPlugin(client, parameters, options),
      updatePlugin: (parameters: UpdatePlugin, options?: RequestOptions): Promise<Plugin> =>
        plugins.updatePlugin(client, parameters, options),
      createPluginListing: (parameters: CreatePluginListing, options?: RequestOptions): Promise<PluginListing> =>
        plugins.createPluginListing(client, parameters, options),
      getPluginMemberPrivacyCompliance: (
        parameters: GetPluginMemberPrivacyCompliance,
        options?: RequestOptions,
      ): Promise<void> => plugins.getPluginMemberPrivacyCompliance(client, parameters, options),
      updatePluginListing: (parameters: UpdatePluginListing, options?: RequestOptions): Promise<PluginListing> =>
        plugins.updatePluginListing(client, parameters, options),
    },
    search: {
      search: (parameters: Search, options?: RequestOptions): Promise<SearchResult> =>
        search.search(client, parameters, options),
      searchMembers: (parameters: SearchMembers, options?: RequestOptions): Promise<Member[]> =>
        search.searchMembers(client, parameters, options),
    },
    tokens: {
      getToken: (parameters: GetToken, options?: RequestOptions): Promise<Token> =>
        tokens.getToken(client, parameters, options),
      getTokenMember: (parameters: GetTokenMember, options?: RequestOptions): Promise<Member> =>
        tokens.getTokenMember(client, parameters, options),
      getTokenWebhooks: (parameters: GetTokenWebhooks, options?: RequestOptions): Promise<Webhook[]> =>
        tokens.getTokenWebhooks(client, parameters, options),
      createTokenWebhook: (parameters: CreateTokenWebhook, options?: RequestOptions): Promise<Webhook> =>
        tokens.createTokenWebhook(client, parameters, options),
      getTokenWebhook: (parameters: GetTokenWebhook, options?: RequestOptions): Promise<Webhook> =>
        tokens.getTokenWebhook(client, parameters, options),
      updateTokenWebhook: (parameters: UpdateTokenWebhook, options?: RequestOptions): Promise<void> =>
        tokens.updateTokenWebhook(client, parameters, options),
      deleteTokenWebhook: (parameters: DeleteTokenWebhook, options?: RequestOptions): Promise<void> =>
        tokens.deleteTokenWebhook(client, parameters, options),
      deleteToken: (parameters: DeleteToken, options?: RequestOptions): Promise<void> =>
        tokens.deleteToken(client, parameters, options),
    },
    webhooks: {
      createWebhook: (parameters: CreateWebhook, options?: RequestOptions): Promise<Webhook> =>
        webhooks.createWebhook(client, parameters, options),
      getWebhook: (parameters: GetWebhook, options?: RequestOptions): Promise<Webhook> =>
        webhooks.getWebhook(client, parameters, options),
      updateWebhook: (parameters: UpdateWebhook, options?: RequestOptions): Promise<Webhook> =>
        webhooks.updateWebhook(client, parameters, options),
      deleteWebhook: (parameters: DeleteWebhook, options?: RequestOptions): Promise<void> =>
        webhooks.deleteWebhook(client, parameters, options),
      getWebhookField: <T = unknown>(parameters: GetWebhookField, options?: RequestOptions): Promise<FieldValue<T>> =>
        webhooks.getWebhookField<T>(client, parameters, options),
    },
  };
}

export type TrelloClient = ReturnType<typeof createTrelloClient>;
