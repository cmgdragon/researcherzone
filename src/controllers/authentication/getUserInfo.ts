import { decode } from 'djwt';
import { findUserByEmail } from '~/controllers/database/users.ts';
import { findDocuments } from '~/controllers/database/documents.ts';
import cookie from 'cookie';

const getUserInfo = async context => {

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

export default getUserInfo;
