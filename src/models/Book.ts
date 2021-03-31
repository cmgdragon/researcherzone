import IProfileDocument from './interfaces/IProfileDocument.ts';
import ICitableDocument from './interfaces/ICitableDocument.ts';

export class Book implements IProfileDocument, ICitableDocument {
    generate_citation: Function;
    id: string;
    can_be_cited: boolean;
    authors: Array<string>;
    title: string;
    edition: string;
    publication_place: string;
    publisher: string;
    publication_year: number;
    doi: string;
}

export class BookChapter extends Book {
    volume: number;
    number: number;
    start_page: number;
    end_page: number;
    chapter_title: string;
    coordinator: string;
}

export class BookVolume extends Book {
    volume: number;
    volume_number: number;
    page_numbers: number;
    chapter_title: string;
    doi: string;
}