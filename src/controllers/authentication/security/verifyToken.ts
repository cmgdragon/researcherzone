import { Context } from 'oak';
import { verify, decode } from 'djwt';
import cookie from 'cookie';

const verifyToken = async (context, next: any) => {

    const { token } = cookie.parse(context.request.headers.get('cookie') || '');

    if (!token) {
        throw new Error('No token found');
    }

    if (token.split('.').length !== 3) {
        throw new Error('Invalid token syntax');
    }

    try {

        const [ header, payload, signature ] : any = decode(token);
    
        if (payload.iss === 'guest' && context.request.headers.get('pathname') === '/') {
            throw new Error('Not logged in');
        }

    } catch ({message}) {
        context.response.status = 403;
        context.response.body = { message };
        return;
    }

    await next();

}

export default verifyToken;