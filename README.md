# Trello.js

NodeJS/JS Module which provides easy-to-use access to the Trello REST API.

# Installation

```bash
npm i trello.js
```

# Usage

```typescript
import { TrelloClient } from "trello.js";

const client = new TrelloClient({
  key: "",
  token: "",
  timeout: 1000 // optional parameter
});

// Callback
client.search.search({ query: "development" }, (err, data) => console.log(data));

// Promise
client.cards
  .getCard({ id: "cardId" })
  .then(data => console.log(data))
  .catch(e => {
    throw e;
  });

// Awaiting
const data = await client.reactions.getEmoji();
```

# Keys and Tokens

View the [official documentation](https://developers.trello.com/reference/#api-key-tokens).

# Supported API Calls

- actions
  - getAction `GET /actions/{id}`
  - getField `GET /actions/{id}/{field}`
  - getBoard `GET /actions/{id}/board`
  - getCard `GET /actions/{id}/card`
  - getDisplay `GET /actions/{id}/display`
  - getList `GET /actions/{id}/list`
  - getMember `GET /actions/{id}/member`
  - getMemberCreator `GET /actions/{id}/memberCreator`
  - getOrganization `GET /actions/{id}/organization`
  - updateComment `PUT /actions/{id}`
  - updateActionText `PUT /actions/{id}/text`
  - deleteAction `DELETE /actions/{id}`
- batch
  - batch `GET /batch`
- board
  - getBoard `GET /boards/{id}`
  - getField `GET /boards/{id}/{field}`
  - getActions `GET /boards/{id}/actions`
  - getEnabledPlugins `GET /boards/{id}/boardPlugins`
  - getStars `GET /boards/{id}/boardStars`
  - getCards `GET /boards/{id}/cards`
  - getCardFilter `GET /boards/{id}/cards/{filter}`
  - getCard `GET /boards/{id}/cards/{cardId}`
  - getChecklist `GET /boards/{id}/checklists`
  - getCustomFields `GET /boards/{id}/customFields`
  - getLabels `GET /boards/{id}/labels`
  - getLists `GET /boards/{id}/lists`
  - getListsFilter `GET /boards/{id}/lists/{filter}`
  - getMembers `GET /boards/{id}/members`
  - getMemberships `GET /boards/{id}/memberships`
  - getPlugins `GET /boards/{id}/plugins`
  - updateBoard `PUT /boards/{id}`
  - updateMembers `PUT /boards/{id}/members`
  - updateMember `PUT /boards/{id}/members/{idMember}`
  - updateMembership `PUT /boards/{id}/memberships/{idMembership}`
  - updateEmailPosition `PUT /boards/{id}/myPrefs/emailPosition`
  - updateIdEmailList `PUT /boards/{id}/myPrefs/idEmailList`
  - showListGuide `PUT /boards/{id}/myPrefs/showListGuide`
  - showSidebar `PUT /boards/{id}/myPrefs/showSidebar`
  - showSidebarActivity `PUT /boards/{id}/myPrefs/showSidebarActivity`
  - showSidebarBoardActions `PUT /boards/{id}/myPrefs/showSidebarBoardActions`
  - showSidebarMembers `PUT /boards/{id}/myPrefs/showSidebarMembers`
  - addBoard `POST /boards`
  - addPlugin `POST /boards/{id}/boardPlugins`
  - generateNewCalendarKey `POST /boards/{id}/calendarKey/generate`
  - generateNewEmailKey `POST /boards/{id}/emailKey/generate`
  - addIdTag `POST /boards/{id}/idTags`
  - addLabel `POST /boards/{id}/labels`
  - addList `POST /boards/{id}/lists`
  - markedAsViewed `POST /boards/{id}/markedAsViewed`
  - powerUps `POST /boards/{id}/powerUps`
  - deleteBoard `DELETE /boards/{id}`
  - deletePlugin `DELETE /boards/{id}/boardPlugins/{idPlugin}`
  - deleteMember `DELETE /boards/{id}/members/{idMember}`
  - deletePowerUp `DELETE /boards/{id}/powerUps/{powerUp}`
- cards
  - getCard `GET /cards/{id}`
  - getCardField `GET /cards/{id}/{field}`
  - getActions `GET /cards/{id}/actions`
  - getAttachments `GET /cards/{id}/attachments`
  - getAttachment `GET /cards/{id}/attachments/{idAttachment}`
  - getBoard `GET /cards/{id}/board`
  - checkItemState `GET /cards/{id}/checkItemStates`
  - getChecklists `GET /cards/{id}/checklists`
  - getCheckItem `GET /cards/{id}/checkItem/{idCheckItem}`
  - getCustomFieldItems `GET /cards/{id}/customFieldItems`
  - getList `GET /cards/{id}/list`
  - getMembers `GET /cards/{id}/members`
  - getMembersVotes `GET /cards/{id}/membersVoted`
  - getPluginData `GET /cards/{id}/pluginData`
  - getStickers `GET /cards/{id}/stickers`
  - getSticker `GET /cards/{id}/stickers/{idSticker}`
  - updateCard `PUT /cards/{id}`
  - updateComment `PUT /cards/{id}/actions/{idAction}/comments`
  - updateCheckItem `PUT /cards/{id}/checkItem/{idCheckItem}`
  - updateCheckItemInCheckList `PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}`
  - updateSticker `PUT /cards/{id}/stickers/{idSticker}`
  - addCard `POST /cards`
  - addComment `POST /cards/{id}/actions/comments`
  - addAttachment `POST /cards/{id}/attachments`
  - addCheckList `POST /cards/{id}/checklists`
  - addIdLabel `POST /cards/{id}/idLabels`
  - addIdMember `POST /cards/{id}/idMembers`
  - addLabel `POST /cards/{id}/labels`
  - markAssociatedNotificationsRead `POST /cards/{id}/markAssociatedNotificationsRead`
  - addMembersVoted `POST /cards/{id}/membersVoted`
  - addSticker `POST /cards/{id}/stickers`
  - deleteCard `DELETE /cards/{id}`
  - deleteComment `DELETE /cards/{id}/actions/{idAction}/comments`
  - deleteAttachment `DELETE /cards/{id}/attachments/{idAttachment}`
  - deleteCheckItem `DELETE /cards/{id}/checkItem/{idCheckItem}`
  - deleteCheckList `DELETE /cards/{id}/checklists/{idChecklist}`
  - deleteLabel `DELETE /cards/{id}/idLabels/{idLabel}`
  - deleteMember `DELETE /cards/{id}/idMembers/{idMember}`
  - deleteMembersVote `DELETE /cards/{id}/membersVoted/{idMember}`
  - deleteSticker `DELETE /cards/{id}/stickers/{idSticker}`
- checklists
  - getCheckList `GET /checklists/{id}`
  - getField `GET /checklists/{id}/{field}`
  - getBoard `GET /checklists/{id}/board`
  - getCards `GET /checklists/{id}/cards`
  - getCheckItems `GET /checklists/{id}/checkItems`
  - getCheckItem `GET /checklists/{id}/checkItems/{idCheckItem}`
  - updateCheckList `PUT /checklists/{id}`
  - updateName `PUT /checklists/{id}/name`
  - addCheckList `POST /checklists`
  - addCheckItems `POST /checklists/{id}/checkItems`
  - deleteCheckList `DELETE /checklists/{id}`
  - deleteCheckItem `DELETE /checklists/{id}/checkItems/{idCheckItem}`
- customFields
  - getCustomField `GET /customFields/{id}`
  - updateCustomField `PUT /customFields/{id}`
  - addCustomField `POST /customFields`
  - deleteCustomField `DELETE /customFields/{id}`
  - getOptions `GET /customFields/{id}/options`
  - getOption `GET /customFields/{id}/options/{idCustomFieldOption}`
  - addOption `POST /customFields/{id}/options`
  - deleteOptions `DELETE /customfields/{id}/options/{idCustomFieldOption}`
  - updateCardCustomField `PUT /card/{idCard}/customField/{idCustomField}/item`
  - getBoardCustomFields `GET /boards/{id}/customFields`
- enterprises
  - getEnterprize `GET /enterprises/{id}`
  - getAdmins `GET /enterprises/{id}/admins`
  - getSignUpUrl `GET /enterprises/{id}/signupUrl`
  - getMembers `GET /enterprises/{id}/members`
  - getMember `GET /enterprises/{id}/members/{idMember}`
  - getOrganization `GET /enterprises/{id}/transferrable/organization/{idOrganization}`
  - deactivateMember `PUT /enterprises/{id}/members/{idMember}/deactivated`
  - transferOrganization `PUT /enterprises/{id}/organizations`
  - setAdmin `PUT /enterprises/{id}/admins/{idMember}`
  - createToken `POST /enterprises/{id}/tokens`
  - deleteOrganization `DELETE /enterprises/{id}/organizations/{idOrganization}`
  - deleteAdmin `DELETE /enterprises/{id}/admins/{idMember}`
- labels
  - getLabel `GET /labels/{id}`
  - updateLabel `PUT /labels/{id}`
  - updateColor `PUT /labels/{id}/color`
  - updateName `PUT /labels/{id}/name`
  - addLabel `POST /labels`
  - deleteLabel `DELETE /labels/{id}`
- lists
  - getList `GET /lists/{id}`
  - getField `GET /lists/{id}/{field}`
  - getActions `GET /lists/{id}/actions`
  - getBoard `GET /lists/{id}/board`
  - getCards `GET /lists/{id}/cards`
  - updateList `PUT /lists/{id}`
  - archive `PUT /lists/{id}/closed`
  - moveToBoard `PUT /lists/{id}/idBoard`
  - rename `PUT /lists/{id}/name`
  - changePosition `PUT /lists/{id}/pos`
  - setLimit `PUT /lists/{id}/softLimit`
  - subscribe `PUT /lists/{id}/subscribed`
  - addList `POST /lists`
  - archiveAllCards `POST /lists/{id}/archiveAllCards`
  - moveAllCards `POST /lists/{id}/moveAllCards`
- members
  - getMember `GET /members/{id}`
  - getField `GET /members/{id}/{field}`
  - getActions `GET /members/{id}/actions`
  - getBoards `GET /members/{id}/boards`
  - getBoardBackgrounds `GET /members/{id}/boardBackgrounds`
  - getBoardBackground `GET /members/{id}/boardBackgrounds/{idBackground}`
  - getBoardStars `GET /members/{id}/boardStars`
  - getBoardStar `GET /members/{id}/boardStars/{idStar}`
  - getBoardsInvited `GET /members/{id}/boardsInvited`
  - getCards `GET /members/{id}/cards`
  - getCustomBoardBackgrounds `GET /members/{id}/customBoardBackgrounds`
  - getCustomBoardBackground `GET /members/{id}/customBoardBackgrounds/{idBackground}`
  - getCustomEmojis `GET /members/{id}/customEmoji`
  - getCustomEmoji `GET /members/{id}/customEmoji/{idEmoji}`
  - getCustomStickers `GET /members/{id}/customStickers`
  - getCustomSticker `GET /members/{id}/customStickers/{idSticker}`
  - getEnterprises `GET /members/{id}/enterprises/`
  - getNotifications `GET /members/{id}/notifications`
  - getOrganizations `GET /members/{id}/organizations`
  - getOrganizationInvited `GET /members/{id}/organizationsInvited`
  - getSavedSearchers `GET /members/{id}/savedSearches`
  - getSavedSearch `GET /members/{id}/savedSearches/{idSearch}`
  - getToken `GET /members/{id}/tokens`
  - updateMember `PUT /members/{id}`
  - updateBoardBackground `PUT /members/{id}/boardBackgrounds/{idBackground}`
  - updateBoardStar `PUT /members/{id}/boardStars/{idStar}`
  - updateCustomBackground `PUT /members/{id}/customBoardBackgrounds/{idBackground}`
  - updateSavedSearch `PUT /members/{id}/savedSearches/{idSearch}`
  - addAvatar `POST /members/{id}/avatar`
  - uploadBoardBackground `POST /members/{id}/boardBackgrounds`
  - starBoard `POST /members/{id}/boardStars`
  - uploadCustomBoardBackground `POST /members/{id}/customBoardBackgrounds`
  - uploadCustomEmoji `POST /members/{id}/customEmoji`
  - uploadCustomSticker `POST /members/{id}/customStickers`
  - dismissMessage `POST /members/{id}/oneTimeMessagesDismissed`
  - createSavedSearch `POST /members/{id}/savedSearches`
  - deleteBoardBackground `DELETE /members/{id}/boardBackgrounds/{idBackground}`
  - deleteBoardStar `DELETE /members/{id}/boardStars/{idStar}`
  - deleteCustomBoardBackground `DELETE /members/{id}/customBoardBackgrounds/{idBackground}`
  - deleteCustomSticker `DELETE /members/{id}/customStickers/{idSticker}`
  - deleteSavedSearch `DELETE /members/{id}/savedSearches/{idSearch}`
- notifications
  - getNotification `GET /notifications/{id}`
  - getField `GET /notifications/{id}/{field}`
  - getBoard `GET /notifications/{id}/board`
  - getCard `GET /notifications/{id}/card`
  - getList `GET /notifications/{id}/list`
  - getMember `GET /notifications/{id}/member`
  - getMemberCreator `GET /notifications/{id}/memberCreator`
  - getOrganization `GET /notifications/{id}/organization`
  - updateReadStatus `PUT /notifications/{id}`
  - updateUnreadStatus `PUT /notifications/{id}/unread`
  - markAllAsRead `POST /notifications/all/read`
- organizations
  - getOrganization `GET /organizations/{id}`
  - getField `GET /organizations/{id}/{field}`
  - getActions `GET /organizations/{id}/actions`
  - getBoards `GET /organizations/{id}/boards`
  - getMembers `GET /organizations/{id}/members`
  - getMembersInvited `GET /organizations/{id}/membersInvited`
  - getMemberships `GET /organizations/{id}/memberships`
  - getMembership `GET /organizations/{id}/memberships/{idMembership}`
  - getPluginData `GET /organizations/{id}/pluginData`
  - getTags `GET /organizations/{id}/tags`
  - getBillableGuest `GET /organizations/{id}/newBillableGuests/{idBoard}`
  - getExports `GET /organizations/{id}/exports`
  - updateOrganization `PUT /organizations/{id}`
  - updateMembers `PUT /organizations/{id}/members`
  - updateMember `PUT /organizations/{id}/members/{idMember}`
  - memberDeactivate `PUT /organizations/{id}/members/{idMember}/deactivated`
  - addOrganization `POST /organizations`
  - uploadLogo `POST /organizations/{id}/logo`
  - uploadTags `POST /organizations/{id}/tags`
  - uploadExports `POST /organizations/{id}/exports`
  - deleteOrganization `DELETE /organizations/{id}`
  - deleteLogo `DELETE /organizations/{id}/logo`
  - deleteMember `DELETE /organizations/{id}/members/{idMember}`
  - deleteMembersFromAll `DELETE /organizations/{id}/members/{idMember}/all`
  - deleteAssociatedDomain `DELETE /organizations/{id}/prefs/associatedDomain`
  - deleteRestrictions `DELETE /organizations/{id}/prefs/orgInviteRestrict`
  - deleteTag `DELETE /organizations/{id}/tags/{idTag}`
- reactions
  - getEmoji `GET /emoji`
  - getReactions `GET /actions/{idAction}/reactions`
  - getReaction `GET /actions/{idAction}/reactions/{id}`
  - getReactionsSummary `GET /actions/{idAction}/reactionsSummary`
  - addReaction `POST /actions/{idAction}/reactions`
  - deleteReaction `DELETE /actions/{idAction}/reactions/{id}`
- search
  - search `GET /search`
  - searchMembers `GET /search/members`
- tokens
  - getInfo `GET /tokens/{token}`
  - getMember `GET /tokens/{token}/member`
  - getWebhooks `GET /tokens/{token}/webhooks`
  - getWebhook `GET /tokens/{token}/webhooks/{idWebhook}`
  - addWebhook `POST /tokens/{token}/webhooks`
  - updateWebhook `PUT /tokens/{token}/webhooks/{webhookId}`
  - deleteToken `DELETE /tokens/{token}`
  - deleteWebhook `DELETE /tokens/{token}/webhooks/{idWebhook}`
- types
  - getTypes `GET /types`
- webhooks
  - getWebhook `GET /webhooks/{id}`
  - getField `GET /webhooks/{id}/{field}`
  - updateWebhook `PUT /webhooks/{id}`
  - addWebhook `POST /webhooks`
  - deleteWebhook `DELETE /webhooks/{id}`
