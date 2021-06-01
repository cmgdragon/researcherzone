import { Context } from 'oak';
import cookie from 'cookie';

const verifyToken = async (context, next: any) => {

    try {
        const { token } = cookie.parse(context.request.headers.get('cookie') || '');

        if (!token) {
            throw new Error('No token found');
        }
    
        if (token.split('.').length !== 3) {
            throw new Error('Invalid token syntax');
        }

    } catch ({message}) {
        context.response.status = 403;
        context.response.body = { message };
        return;
    }

    await next();

}

export default verifyToken;
