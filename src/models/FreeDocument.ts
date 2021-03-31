import IProfileDocument from "./interfaces/IProfileDocument.ts";

class FreeDocument implements IProfileDocument {
    id: string;
    can_be_cited: boolean;
    html: string;
}

export default FreeDocument;