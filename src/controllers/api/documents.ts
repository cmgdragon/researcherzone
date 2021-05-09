import { Context } from "oak";
import { addNewDocument, deleteDocument, deleteCategory, updateDocument } from '~/controllers/database/documents.ts';
import { Bson } from 'deno-mongo';
import { updateUser } from '~/controllers/database/users.ts';

const addDocument = async ({request, response}: Context) => {

    const { document, email } = await request.body().value;
    const result = await addNewDocument({document, user: email});
    console.dir( result.toString() );

  try {
    response.status = 200;
    response.body = { status: 200, document_id: result.toString() };
  } catch (error) {
      response.body = error;
  }
}

const removeDocument = async ({request, response}: Context) => {

  const {id, email} = await request.body().value;
  const result = await deleteDocument(new Bson.ObjectID(id), email);
  console.log( result, id );

  try {
    response.status = 200;
    response.body = { status: 200, document_id: result.toString() };
  } catch (error) {
      response.body = error;
  }
}

const removeCategory = async ({request, response}: Context) => {

  const { category, user } = await request.body().value;
  const result = await deleteCategory(category, user.email);
  const { matchedCount, modifiedCount, upsertedId } = await updateUser(user.email, user);

  console.log( result, category, " | " , matchedCount, modifiedCount, upsertedId );

  try {
    response.status = 200;
    response.body = { status: 200 };
  } catch (error) {
      response.body = error;
  }
}

const update_document = async ({request, response}: Context) => {

  const { document, email } = await request.body().value;
  await updateDocument(new Bson.ObjectID(document._id), document, email);

  try {
    response.status = 200;
    response.body = { status: 200 };
  } catch (error) {
      response.body = error;
  }
}

export { addDocument, removeDocument, removeCategory, update_document };