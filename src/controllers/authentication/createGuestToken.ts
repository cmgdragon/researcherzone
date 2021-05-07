import { Context } from "oak";
import { create, getNumericDate } from 'djwt';
import { findUserById } from '~/controllers/database/users.ts';
import { Bson } from 'deno-mongo';
import cookie from 'cookie';

const createGuestToken = async (context, next) => {

    const { token } = cookie.parse(context.request.headers.get('cookie') || '');

    if (token || !context.params?.id) return await next();

    if (!token) {
        try {
            const user = await findUserById(new Bson.ObjectID(context.params.id));

            const header: any = {
              alg: 'HS512',
              typ: 'JWT'
            }
          
            const payload: any = {
              iss: 'guest',
              exp: getNumericDate(60 * 60)
            }
            
            const token = await create(header, payload, Deno.env.get('SECRET'))
        
            context.response.headers.set('Set-Cookie', cookie.serialize('token', token, {
              httpOnly: true,
              path: '/',
              maxAge: 60 * 60 //* 24 * 7 // 1 week
            }))

            await next();

          } catch (error) {
              context.response.body = 'Not a valid user ID';
          }
    }

}

export default createGuestToken;