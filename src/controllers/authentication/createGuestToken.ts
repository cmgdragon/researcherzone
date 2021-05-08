import { Context } from "oak";
import { create, getNumericDate, decode } from 'djwt';
import { findUserById } from '~/controllers/database/users.ts';
import { Bson } from 'deno-mongo';
import cookie from 'cookie';

const createGuestToken = async (context, next) => {

    const { guesttoken } = cookie.parse(context.request.headers.get('cookie') || '');
    const [ header, payload, signature ] : any = decode(guesttoken);

    if (guesttoken) {

    }

    if (guesttoken || !context.params?.id) return await next();

      try {
          const user = await findUserById(new Bson.ObjectID(context.params.id));

          const header: any = {
            alg: 'HS512',
            typ: 'JWT'
          }
        
          const payload: any = {
            iss: {guest: true, user: user._id},
            exp: getNumericDate(60 * 60)
          }
          
          const guesttoken = await create(header, payload, Deno.env.get('SECRET'))
      
          context.response.headers.set('Set-Cookie', cookie.serialize('guesttoken', guesttoken, {
            httpOnly: true,
            path: '/user',
            maxAge: 60 * 60 // 1h
          }))

          await next();

        } catch (error) {
            context.response.body = 'Not a valid user ID';
      }

}

export default createGuestToken;