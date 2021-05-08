import { Context } from "oak";
import { verify, decode } from 'djwt';
import { findUserById, findUserByEmail } from '~/controllers/database/users.ts';
import { Bson } from 'deno-mongo';
import cookie from 'cookie';

const verifyUserCall = async ({request, response}: Context, next: any) => {

    try {

        const { token } = cookie.parse(request.headers.get('cookie') || '');
        const { email } = await request.body().value;
    
        if (!token) {
            throw new Error('Not token found');
        }

        if (!email) {
            throw new Error('Invalid call');
        }

        const [ header, payload, signature ] : any = decode(token);
        //const payload = await verify(token, Deno.env.get('SECRET'), "HS512");

        /*if (request.headers.get('referer') && request.headers.get('referer').includes('/user')) {
            const segments = request.headers.get('referer')?.split('/');
            const { pwd, email } = await findUserById( new Bson.ObjectID(segments[segments.length-1]) );
            console.log("...........",  pwd, email, "...........")
            await verify(token, pwd+email, "HS512");
        } else if (request.headers.get('referer') === '/') {
            const { pwd } = await findUserByEmail( payload.iss.email );
            await verify(token, pwd+payload.iss.email, "HS512");
        }*/
        
        //console.log(token, payload, pwd)

        const { pwd } = await findUserByEmail( payload.iss.email );
        await verify(token, pwd+email, "HS512");
        


        await next();
    } catch ({message}) {
        response.status = 403;
        response.body = { message };
    }

}

export default verifyUserCall;