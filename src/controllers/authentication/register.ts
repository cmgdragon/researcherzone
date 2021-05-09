import { Context } from "oak";
import { addNewUser, findUserByEmail } from '~/controllers/database/users.ts';
import User from "~/models/User.ts";

const register = async (context: Context) => {
    try {
        const user: User = await context.request.body().value;
        const query = await findUserByEmail(user.email);

        if (query) {
            context.response.status = 409;
            context.response.body = { message: 'This email already exists', status: 409 };
            return;
        }

        if (!user.email || !user.pwd || !user.name ||
            user.email === '' || user.pwd === '' || user.name === '') {
                context.response.status = 500;
                context.response.body = { message: 'Invalid form', status: 500 };
                return;
        }
        
        await addNewUser(user);
        context.response.status = 200;
        context.response.body = { status: 200 };

    } catch (error) {
        console.log(error);
        context.response.body = { error };
    }
}

export default register;