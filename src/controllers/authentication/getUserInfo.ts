import { Context } from "oak";
import { decode } from 'djwt';
import { findUserByEmail, findUserById } from '~/controllers/database/users.ts';
import { findDocuments } from '~/controllers/database/documents.ts';
import { Bson } from 'deno-mongo';
import cookie from 'cookie';

const getUserInfo = async context => {

    const path = context.request.headers.get('pathname');

    if (path.includes('/user')) {

        const segments = path.split('/');

        try {
            const user = await findUserById(new Bson.ObjectID(segments[segments.length-1]));
            const documents = await findDocuments(user.email);
            context.response.body = { 
                isGuest: true,
                user: {...user, pwd: '', email: ''},
                documents
            };
        } catch (error) {
            context.response.body = { 
                message: error.message
            };
        }


    } else {

        const { token } = cookie.parse(context.request.headers.get('cookie') || '');
        const [ header, payload, signature ] : any = decode(token);
        try {

            const user = await findUserByEmail(payload.iss.email);
            const documents = await findDocuments(payload.iss.email);
    
            context.response.body = { 
                isGuest: false,
                user: {...user, pwd: ''},
                documents
            };

        } catch (error) {
            context.response.body = { 
                message: error.message
            };
        }

    }

}

export default getUserInfo;