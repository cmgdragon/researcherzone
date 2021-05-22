import { Context } from "oak";
import { addNewDocument, deleteDocument, deleteCategory, updateDocument, findDocuments } from '~/controllers/database/documents.ts';
import { Bson } from 'deno-mongo';
import { updateUser } from '~/controllers/database/users.ts';

const addDocument = async ({request, response}: Context) => {

    const { newDocument, email } = await request.body().value;
    const result = await addNewDocument({ ...newDocument, user: email });

  try {
    response.status = 200;
    response.body = { status: 200, document_id: result.toString() };
  } catch (error) {
      response.body = error;
  }
}

const removeDocument = async ({request, response}: Context) => {

  try {

    const { document_id, email } = await request.body().value;
    const result = await deleteDocument(new Bson.ObjectID(document_id), email);

    response.status = 200;
    response.body = { status: 200, document_id: result.toString() };
  } catch (error) {
      response.body = error;
  }
}

const removeCategory = async ({request, response}: Context) => {

  const { categoryId, user: newUser, email } = await request.body().value;
  const result = await deleteCategory(categoryId, email);
  const { matchedCount, modifiedCount, upsertedId } = await updateUser(email, newUser);

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