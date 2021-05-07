import { Context } from 'oak';
import { verify } from 'djwt';
import cookie from 'cookie';

const verifyToken = async (context, next: any) => {

    const token = context.cookies.get('token')//cookie.parse(request.headers.get('cookie') || '');
    console.log(token)

    if (!token) {
        throw new Error('No token found');
    }

    if (token.split('.').length !== 3) {
        throw new Error('Invalid token syntax');
    }

    try {
    
    const payload = await verify(token, Deno.env.get('SECRET'), "HS512");

    console.log(context.request.headers.get('pathname'))
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