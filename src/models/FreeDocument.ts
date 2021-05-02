import IProfileDocument from "./interfaces/IProfileDocument.ts";

class FreeDocument implements IProfileDocument {
    _id?: string;
    type: string;
    can_be_cited: boolean;
    category: string;
    user: string;
    html: string;
}

export default FreeDocument;