import IProfileDocument from './interfaces/IProfileDocument.ts';

export class Book implements IProfileDocument {
    order: number;
    _id?: string;
    category: number;
    user: string;
    type: string = 'book';
    can_be_cited: boolean;
    volume: number;
    authors: Array<{name: string, surname: string}>;
    title: string;
    subtitle: string;
    edition: number;
    publication_place: string;
    publisher: string;
    publication_year: number;
    doi: string;

}

export class BookChapter extends Book {
    editors: Array<{name: string, surname: string}>;
    number: number;
    start_page: number;
    end_page: number;
    chapter_title: string;
    coordinator: string;
}