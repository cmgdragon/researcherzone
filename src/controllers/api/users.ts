import { Context } from "oak";
import { updateUser } from '~/controllers/database/users.ts';

const update = async ({request, response}: Context) => {

    const user = await request.body().value;
    const { matchedCount, modifiedCount, upsertedId } = await updateUser(user.email, user);
    console.log( user )
    console.log( matchedCount, modifiedCount, upsertedId )

  try {
    response.status = 200;
    response.body = { status: 200 };
  } catch (error) {
      response.body = error;
  }
}

export { update };