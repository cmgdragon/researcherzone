import { Context } from "oak";
import { verify, decode } from 'djwt';
import { findUserById, findUserByEmail } from '~/controllers/database/users.ts';
import { Bson } from 'deno-mongo';
import cookie from 'cookie';

const verifyUserCall = async ({request, response}: Context, next: any) => {

    try {

        const { token } = cookie.parse(request.headers.get('cookie') || '');
        const { email } = await request.body().value;
        console.log(email)

        if (!token) {
            throw new Error('Not token found');
        }

        if (!email) {
            throw new Error('Invalid call');
        }

        const [ header, payload, signature ] : any = decode(token);

        const { pwd } = await findUserByEmail( payload.iss.email );
        await verify(token, pwd+email, "HS512");
        


        await next();
    } catch ({message}) {
        response.status = 403;
        response.body = { message };
    }

}

export default verifyUserCall;