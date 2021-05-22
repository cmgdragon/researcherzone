import { Context } from "oak";
import { updateUser } from '~/controllers/database/users.ts';

const update = async ({request, response}: Context) => {

    const { newUser, email } = await request.body().value;
    const { matchedCount, modifiedCount, upsertedId } = await updateUser(email, newUser);

  try {
    response.status = 200;
    response.body = { status: 200 };
  } catch (error) {
      response.body = error;
  }
}

export { update };