export enum LF_ITEM_STATUS {
    FOUND,
    LOST,
    RETURN
}

export enum LF_ITEM_TYPE {
    ID_CARD,
    DRIVING_LINCENSE,
    FAMILY_MEMBER,
    OTHER_STUFF
}

export class LfItem {
    type: LF_ITEM_TYPE;
    subType: String;
    IdNumber: String;
    Name: String;
    IssuesDate: String;
    IssuesPlace: String;
    Description: String;
    ImageUrl: String;
}

export class LfRecord {
    status: LF_ITEM_STATUS;
    ActorContact: String;
    HappenPlace: String;
    HappenDate: String;
    RegistDate: String;
    item: LfItem;
}

// export class LfFoundRecord {
//     status: LF_ITEM_STATUS;
//     FinderContact: String;
//     FindPlace: String;
//     FindDate: String;
//     RegistDate: String;
//     item: LfItem;
// }
