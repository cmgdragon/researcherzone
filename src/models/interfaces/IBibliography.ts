import IProfileDocument from './IProfileDocument.ts';

interface IBibliography {
    name: string;
    documents: Array<IProfileDocument>;
    edit_users: Array<string>;
}

export default IBibliography;