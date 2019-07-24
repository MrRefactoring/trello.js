export namespace SearchOptions {
  export interface ISearch {
    query: string;
    idBoards?: string;
    idOrganizations?: string;
    idCards?: string;
    modelTypes?: string;
    boardFields?: string[];
    boardsLimit?: number;
    cardFields?: string[];
    cardsLimit?: number;
    cardsPage?: number;
    cardBoard?: boolean;
    cardList?: boolean;
    cardMembers?: boolean;
    cardStickers?: boolean;
    cardAttachments?: string;
    organizationFields?: string;
    organizationsLimit?: number;
    memberFields?: string;
    membersLimit?: number;
    partial?: boolean;
  }

  export interface ISearchMembers {
    query: string;
    limit?: number;
    idBoard?: string;
    idOrganization?: string;
    onlyOrgMembers?: boolean;
  }

}
