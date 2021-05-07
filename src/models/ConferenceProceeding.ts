import IProfileDocument from './interfaces/IProfileDocument.ts';

class ConferenceProceeding implements IProfileDocument {
    _id?: string;
    type: string;
    category: number;
    order: number;
    user: string;
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