import IProfileDocument from "./interfaces/IProfileDocument.ts";

class FreeDocument implements IProfileDocument {
    order: number;
    _id?: string;
    type: string;
    can_be_cited: boolean;
    category: number;
    user: string;
    html: string;
}

export default FreeDocument;