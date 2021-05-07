import { Context } from "oak";
import { decode } from 'djwt';
import { findUserByEmail } from '~/controllers/database/users.ts';
import { findDocuments } from '~/controllers/database/documents.ts';
import cookie from 'cookie';

const getTokenInfo = async ({request, response}: Context) => {

    try {
        
        const { token } = cookie.parse(request.headers.get('cookie') || '');
        
        const [ header, payload, signature ] : any = decode(token);
        const user = await findUserByEmail(payload.iss.email);
        const documents = await findDocuments(payload.iss.email);

        response.body = { 
            isGuest: payload.iss === 'guest' ? true : false,
            user: {...user, pwd: ''},
            documents 
        };

    } catch ({message}) {
        response.body = { message };   
    }

}

export default getTokenInfo;