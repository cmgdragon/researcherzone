import { Context } from "oak";
import { verify } from 'djwt';
import { findUser } from '~/controllers/database/users.ts';
import { findDocuments } from '~/controllers/database/documents.ts';
import cookie from 'cookie';

const getTokenInfo = async ({request, response}: Context) => {
    const { token } = cookie.parse(request.headers.get('cookie') || '');
    
    const payload = await verify(token, Deno.env.get('SECRET'), "HS512");
    const user = await findUser((payload.iss as any).email);
    const documents = await findDocuments((payload.iss as any).email);
    
    response.body = { user, documents };
}

export default getTokenInfo;