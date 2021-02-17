import { TrelloID } from './trelloID';

export interface Action {
  id?: TrelloID;
  idMemberCreator?: TrelloID;
  data?: {
    text?: string;
    card?: {
      id?: TrelloID;
      name?: string;
      idShort?: number;
      shortLink?: string;
    };
    board?: {
      id?: TrelloID;
      name?: string;
      shortLink?: string;
    };
    list?: {
      id?: TrelloID;
      name?: string;
    };
  };
  type?: string;
  date?: string;
  limits?: {
    reactions?: {
      perAction?: {
        status?: string;
        disableAt?: number;
        warnAt?: number;
      };
      uniquePerAction?: {
        status?: string;
        disableAt?: number;
        warnAt?: number;
      };
    };
  };
  display?: {
    translationKey?: string;
    entities?: {
      contextOn?: {
        type?: string;
        translationKey?: string;
        hideIfContext?: boolean;
        idContext?: TrelloID;
      };
      card?: {
        type?: string;
        hideIfContext?: boolean;
        id?: TrelloID;
        shortLink?: string;
        text?: string;
      };
      comment?: {
        type?: string;
        text?: string;
      };
      memberCreator?: {
        type?: string;
        id?: TrelloID;
        username?: string;
        text?: string;
      };
    };
  };
  memberCreator?: {
    id?: TrelloID;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarUrl?: string;
    fullName?: string;
    idMemberReferrer?: TrelloID;
    initials?: string;
    username?: string;
  };
}
