import IBibliography from './interfaces/IBibliography.ts';
import IProfileDocumentOrder from './interfaces/IProfileDocumentOrder.ts';

class User {
    id: string;
    name: string;
    surname: string;
    profile_slot_1: string;
    profile_slot_2: string;
    categories: Array<string>;
    image: any;
    people_following: Array<string>;
    people_followers: Array<string>;
    profile_documents: Array<IProfileDocumentOrder>;
    bibliographies: Array<IBibliography>;
    social_media: Array<{name: string, url: string}>;
}

export default User;