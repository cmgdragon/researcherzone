import { Context } from "oak";
import { addNewUser } from '~/controllers/database/users.ts';
import User from "~/models/User.ts";

const register = async (context: Context) => {
    try {
        const body = await context.request.body().value;
        const user = addNewUser(body);

       // await context.state.session.set("user", "jajajaja");
        //const ret = await context.state.session.get("user");

        context.response.body = {message: user};
    } catch (error) {
        console.log(error);
        context.response.body = {error};
    }
}

export default register;