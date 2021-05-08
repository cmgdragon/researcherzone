import { Context } from "oak";
import cookie from 'cookie';

const logout = async ({request, response}: Context) => {

  try {
    const body = await request.body().value;

    response.headers.set('Set-Cookie', cookie.serialize('token', '', {
        httpOnly: true,
        maxAge: 0
    }));

  } catch (error) {
      response.body = error;
  }
}

export default logout;