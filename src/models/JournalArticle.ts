import IProfileDocument from './interfaces/IProfileDocument.ts';

class JournalArticle implements IProfileDocument {
    _id?: string;
    type: string;
    category: number;
    abstract: string;
    order: number;
    user: string;
    can_be_cited: boolean;
    authors: Array<{name: string, surname: string}>;
    title: string;
    journal: string;
    volume: number;
    issue: number;
    start_page: number;
    end_page: number;
    publication_year: number;
    doi: string;
}

export default JournalArticle;