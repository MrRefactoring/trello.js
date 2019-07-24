export namespace SearchResponses {
  export interface ISearch {
    options: {
      terms: any[];
      modifiers: any[];
      modelTypes: string[];
      partial: boolean;
    };

    boards: Array<{
      id: string;
      name: string;
      idOrganization: string;
    }>;
    cards: Array<{
      id: string;
      badges: any;
      checkItemStates: any;
      closed: boolean;
      dueComplete: boolean;
      dateLastActivity: string;
      desc: string;
      descData: any;
      due: any | null;
      dueRemember: any | null;
      email: any | null;
      idBoard: string;
      idChecklist: any[];
      idList: string;
      idMembers: any[];
      idMembersVoted: any[];
      idShort: number;
      idAttachmentCover: any | null;
      labels: any[];
      idLabels: any[];
      manualCoverAttachment: boolean;
      name: string;
      pos: number;
      shortLink: string;
      shortUrl: string;
      subscribed: boolean;
      url: string;
    }>;

    organizations: any[];

    members: any[];
  }
}
