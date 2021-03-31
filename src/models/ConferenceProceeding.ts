import IProfileDocument from './interfaces/IProfileDocument.ts';
import ICitableDocument from './interfaces/ICitableDocument.ts';

class ConferenceProceeding implements IProfileDocument, ICitableDocument {
    generate_citation: Function;
    id: string;
    can_be_cited: boolean;
    title: string;
    subtitle: string;
    conference_year: number;
    conference_month: number;
    conference_day: number;
    conference_location: string;
    publication_place: string;
    publisher: string; 
    publication_year: number;
    editors: Array<string>;
    link_from_internet: string;
    doi: string;
}

export default ConferenceProceeding;