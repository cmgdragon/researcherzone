import { Context } from "oak";
import { decode } from 'djwt';
import { findUserByEmail, findUserById } from '~/controllers/database/users.ts';
import { findDocuments } from '~/controllers/database/documents.ts';
import { Bson } from 'deno-mongo';
import cookie from 'cookie';

const getUserDocuments = async context => {

    try {

        const path = context.request.headers.get('pathname');
        const user = context.request.headers.get('app-user');

        if (path.includes('/user')) {

            const segments = path.split('/');
            const documents = await findDocuments(user);
    
            context.response.body = documents;

        } else {

            const { token } = cookie.parse(context.request.headers.get('cookie') || '');
        
            const [ header, payload, signature ] : any = decode(token);
            const documents = await findDocuments(payload.iss.email);
    
            context.response.body = documents;

        }

    } catch ({message}) {
        context.response.body = { message };   
    }

}

export default getUserDocuments;