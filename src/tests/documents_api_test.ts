import {
    assert,
    assertExists,
    assertEquals
} from "asserts";
import { addNewDocument,
    deleteDocument,
    deleteCategory,
    findDocument,
    findDocuments,
    updateDocument 
} from "~/controllers/database/documents.ts";
import { Book } from "~/models/Book.ts";
import FreeDocument from "~/models/FreeDocument.ts";
import Thesis from "~/models/Thesis.ts";
//import { db_documents } from '~/database_dev.ts';
import { db_documents } from '~/database.ts';

const test_user = 'test@test.com';
const test_category_1 = 1;
const test_category_2 = 2;
let test_document_1: Book;
let test_document_2: FreeDocument;
let test_document_3: Thesis;

Deno.test("Connected to db_documents", () => {
    if (db_documents.name !== 'documents') {
        throw new Error('Invalid collection name');
    }
    assert(db_documents);
});

Deno.test("Add new documents", async () => {

    test_document_1 = { ...test_document_1, 
        authors: [
            {
                name: 'author_1',
                surname: 'surname_1'
            },
            {
                name: 'author_2',
                surname: 'surname_2'
            }
        ],
        publisher: 'test_publisher',
        publication_year: 1996,
        volume: 5,
        user: test_user,
        edition: 1,
        publication_place: 'test_publication_place',
        type: 'book',
        category: test_category_1
    }

    test_document_2 = { ...test_document_2, 
        user: test_user,
        html: '<h1>test_html</h1>',
        type: 'freedocument',
        category: test_category_1
    }

    test_document_3 = { ...test_document_3, 
        author: {
            name: 'author_1',
            surname: 'surname_1'
        },
        user: test_user,
        subtitle: 'test_subtitle',
        university: 'test_university',
        university_location: 'test_university_location',
        publication_year: 1996,
        type: 'thesis',
        category: test_category_2
    }

    const added_1 = await addNewDocument(test_document_1);
    const added_2 = await addNewDocument(test_document_2);
    const added_3 = await addNewDocument(test_document_3);

    assertExists(added_1);
    assertExists(added_2);
    assertExists(added_3);

    test_document_1 = { ...test_document_1, _id: added_1 };
    test_document_2 = { ...test_document_2, _id: added_2 };
    test_document_3 = { ...test_document_3, _id: added_3 };
});

Deno.test("Find documents", async () => {
    const result = await findDocuments(test_user);
    assertExists(result);

    if (!Array.isArray(result)) {
        throw new Error('It is not an array');
    }
});

Deno.test("Update document", async () => {

    const updatedDocument = { ...test_document_1,
        authors: [
            {
                name: 'updated_author_1',
                surname: 'updated_surname_1'
            },
            {
                name: 'updated_author_2',
                surname: 'updated_surname_2'
            }
        ],
        publisher: 'updated_publisher',
        publication_year: 1995,
        volume: 6
    }

    await updateDocument(test_document_1._id, updatedDocument, test_user);
    const retrieve = await findDocument(test_document_1._id);
    assertEquals(retrieve, updatedDocument);
});

Deno.test("Delete category", async () => {
    const result = await deleteCategory(test_category_1, test_user);
    assertEquals(result, 2);
    const retrieve = await findDocuments(test_user);
    assertEquals(retrieve.length, 1);
});

Deno.test("Delete document", async () => {
    const result = await deleteDocument(test_document_3._id, test_user);
    assertEquals(result, 1);
    const retrieve = await findDocuments(test_user);
    assertEquals(retrieve, []);
});