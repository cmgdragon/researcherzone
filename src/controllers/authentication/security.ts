import { Context } from 'oak';
import { verify } from 'djwt';
import cookie from 'cookie';

const verifyToken = async ({request, response}: Context, next: any) => {

    const { token } = cookie.parse(request.headers.get('cookie') || '');

    if (!token) {
        response.status = 403;
        response.body = { message: "No token found" };
        return;
    }

    if (token.split('.').length !== 3) {
        response.status = 403;
        response.body = { message: "Invalid token syntax" };
        return;
    }

    try {
    await verify(token, Deno.env.get('SECRET'), "HS512");
    

    } catch (error) {
        response.status = 403;
        response.body = { message: "Not valid token" };
        return;
    }

    await next();

}

export default verifyToken;