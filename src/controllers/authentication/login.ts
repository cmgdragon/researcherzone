import { Context } from "oak";
import { create, getNumericDate } from 'djwt';
import { findUser } from '~/controllers/database/users.ts';
import { sha256 } from 'sha256';
import cookie from 'cookie';

const login = async ({request, response}: Context) => {

  try {
    const body = await request.body().value;
    const user = await findUser(body.email);

    if (user.pwd !== sha256(body.pwd, "utf8", "hex") as string) {
      response.status = 401;
      response.body = {
        message: 'Invalid password or email',
        status: 401
      }
      return;
    }

    const header: any = {
      alg: 'HS512',
      typ: 'JWT'
    }
  
    const payload: any = {
      iss: { email: user.email },
      exp: getNumericDate(60 * 60)
    }
    
    const token = await create(header, payload, Deno.env.get('SECRET'))

    response.headers.set('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 //* 24 * 7 // 1 week
    }))
    response.status = 200;
    response.body = { status: 200 };
  } catch (error) {
      response.body = error;
  }
}

export default login;