export interface Action {
  id?: string;
  idMemberCreator?: string;
  data?: {
    text?: string;
    card?: {
      id?: string;
      name?: string;
      idShort?: number;
      shortLink?: string;
    };
    board?: {
      id?: string;
      name?: string;
      shortLink?: string;
    };
    list?: {
      id?: string;
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
        idContext?: string;
      };
      card?: {
        type?: string;
        hideIfContext?: boolean;
        id?: string;
        shortLink?: string;
        text?: string;
      };
      comment?: {
        type?: string;
        text?: string;
      };
      memberCreator?: {
        type?: string;
        id?: string;
        username?: string;
        text?: string;
      };
    };
  };
  memberCreator?: {
    id?: string;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarUrl?: string;
    fullName?: string;
    idMemberReferrer?: string;
    initials?: string;
    username?: string;
  };
}
