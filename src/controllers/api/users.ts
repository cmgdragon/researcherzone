import { Context } from "oak";
import { updateUser } from '~/controllers/database/users.ts';

const update = async ({request, response}: Context) => {

    const { newUser, email } = await request.body().value;
    console.log(newUser, email)
    const { matchedCount, modifiedCount, upsertedId } = await updateUser(email, newUser);
    console.log( newUser )
    console.log( matchedCount, modifiedCount, upsertedId )

  try {
    response.status = 200;
    response.body = { status: 200 };
  } catch (error) {
      response.body = error;
  }
}

export { update };