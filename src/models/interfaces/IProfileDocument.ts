interface IProfileDocument {
    _id?: string;
    type: string;
    can_be_cited: boolean;
    category: number;
    order: number;
    user: string;
}

export default IProfileDocument;