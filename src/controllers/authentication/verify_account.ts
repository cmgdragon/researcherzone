import { findUserById, updateUser } from '~/controllers/database/users.ts';
import { Bson } from 'deno-mongo';

const verifyAccount = async context => {

    try {

        const userId = context.params.id;
        const user = await findUserById(new Bson.ObjectId(userId));

        if (user) {
            await updateUser(user.email, { ...user, verified: true });
        } else { 
            throw new Error();
        }

        context.response.redirect(`${'https://researcher.zone/'}?verification_successful`);


    } catch (e) {
        context.response.status = 500;
        context.response.body = "Invalid verification URL!";   
    }

}

export default verifyAccount;