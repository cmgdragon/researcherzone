import IProfileDocument from './interfaces/IProfileDocument.ts';
import ICitableDocument from './interfaces/ICitableDocument.ts';

export class Book implements IProfileDocument, ICitableDocument {
    order: number;
    generate_citation: Function;
    _id?: string;
    category: string;
    user: string;
    id: string;
    type: string = 'book';
    can_be_cited: boolean;
    volume: number;
    authors: Array<string>;
    title: string;
    edition: string;
    publication_place: string;
    publisher: string;
    publication_year: number;
    doi: string;
}

export class BookChapter extends Book {
    number: number;
    start_page: number;
    end_page: number;
    chapter_title: string;
    coordinator: string;
}