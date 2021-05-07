import IProfileDocument from './interfaces/IProfileDocument.ts';

class Thesis implements IProfileDocument {
    _id?: string;
    type: string;
    category: number;
    order: number;
    user: string;
    can_be_cited: boolean;
    title: string;
    abstract: string;
    author: {name: string, surname: string};
    subtitle: string;
    university: string;
    university_location: string;
    publication_year: number;
    uri: string;
}

export default Thesis;