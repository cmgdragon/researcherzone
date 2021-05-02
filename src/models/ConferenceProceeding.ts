import IProfileDocument from './interfaces/IProfileDocument.ts';
import ICitableDocument from './interfaces/ICitableDocument.ts';

class ConferenceProceeding implements IProfileDocument, ICitableDocument {
    _id?: string;
    type: string;
    category: string;
    order: number;
    user: string;
    generate_citation: Function;
    id: string;
    can_be_cited: boolean;
    title: string;
    authors: Array<{name: string, surname: string}>;
    editors: Array<{name: string, surname: string}>;
    subtitle: string;
    conference_year: number;
    conference_month: number;
    conference_day: number;
    publisher: string;
    conference_location: string;
    publication_place: string;
    publication_year: number;
    doi: string;
}

export default ConferenceProceeding;