import IProfileDocument from './interfaces/IProfileDocument.ts';

export class Book implements IProfileDocument {
    order: number;
    _id?: string;
    category: number;
    user: string;
    type: string = 'book';
    can_be_cited: boolean;
    volume: number;
    author: {name: string, surname: string};
    title: string;
    subtitle: string;
    edition: string;
    publication_place: string;
    publisher: string;
    publication_year: number;
    doi: string;

}

export class BookChapter extends Book {
    editors: {name: string, surname: string};
    number: number;
    start_page: number;
    end_page: number;
    chapter_title: string;
    coordinator: string;
}