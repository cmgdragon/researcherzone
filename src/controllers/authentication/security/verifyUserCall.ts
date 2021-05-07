import { Context } from "oak";
import { verify, decode } from 'djwt';
import { findUserByEmail } from '~/controllers/database/users.ts';
import cookie from 'cookie';

const verifyUserCall = async ({request, response}: Context, next: any) => {

    try {

        const { token } = cookie.parse(request.headers.get('cookie') || '');
    
        const [ header, payload, signature ] : any = decode(token);
        //const payload = await verify(token, Deno.env.get('SECRET'), "HS512");
        console.log(token, payload.iss)
    
        if (payload.iss === 'guest') {
            throw new Error('Forbidden guest operation');
        }

        const { pwd } = await findUserByEmail(payload.iss.email);
        console.log(token, payload, pwd)

        await verify(token, pwd, "HS512");
        await next();
    } catch ({message}) {
        response.status = 403;
        response.body = { message };
    }

}

export default verifyUserCall;