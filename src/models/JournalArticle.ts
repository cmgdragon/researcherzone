import IProfileDocument from './interfaces/IProfileDocument.ts';
import ICitableDocument from './interfaces/ICitableDocument.ts';

class JournalArticle implements IProfileDocument, ICitableDocument {
    id: string;
    can_be_cited: boolean;
    generate_citation: Function;
    authors: Array<string>;
    title: string;
    journal: string;
    volume: number;
    volume_number: number;
    publisher: string;
    start_page: number;
    end_page: number;
    publication_year: number;
    doi: string;
}

export default JournalArticle;