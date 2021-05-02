import { Context } from "oak";
import { addNewUser, findUser } from '~/controllers/database/users.ts';
import User from "~/models/User.ts";

const register = async (context: Context) => {
    try {
        const body = await context.request.body().value;
        const query = await findUser(body.email);

        if (query) {
            context.response.body
            context.response.body = { message: 'This email already exists', status: 409 };
            return;
        }
        
        const user = addNewUser(body);
        context.response.status = 200;
        context.response.body = { status: 200 };

    } catch (error) {
        console.log(error);
        context.response.body = { error };
    }
}

export default register;