import { findUserById } from '~/controllers/database/users.ts';
import { findDocuments } from '~/controllers/database/documents.ts';
import { Bson } from 'deno-mongo';

const getGuestInfo = async (pathname: string) => {

    try {
        const segments = pathname.split('/');
        const user = await findUserById(new Bson.ObjectID(segments[segments.length-1]));
        const documents = await findDocuments(user.email);
    
        return {
            isGuest: true,
            user: {...user, pwd: '', email: ''},
            documents 
        }

    } catch (error) {
     console.error(error)   
    }

}

export default getGuestInfo;