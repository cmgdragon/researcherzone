import { Context } from "oak";
import { verify } from 'djwt';
import cookie from 'cookie';

const getTokenInfo = async ({request, response}: Context) => {
    const { token } = cookie.parse(request.headers.get('cookie') || '');
    
    const user = await verify(token, Deno.env.get('SECRET'), "HS512");
    response.body = {user: user.iss};
}

export default getTokenInfo;