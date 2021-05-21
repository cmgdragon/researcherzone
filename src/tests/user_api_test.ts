import {
    assert,
    assertExists,
    assertEquals
} from "asserts";
import User from '~/models/User.ts';
import { addNewUser, findUserByEmail, updateUser, deleteUser } from "~/controllers/database/users.ts";
//import { db_users } from '~/database_dev.ts';
import { db_users } from '~/database.ts';

const test_user: User = new User({
    email: 'test@test.com',
    name: 'test_name',
    surname: 'test_surname',
    pwd: 'test_pwd'
});

Deno.test("Connected to db_users", () => {
    assert(db_users);
    if (db_users.name !== 'users') {
        throw new Error('Invalid collection name');
    }
});

Deno.test("Add a new user", async () => {
    const result = await addNewUser(test_user);
    assertExists(result);
});

Deno.test("Find user by email", async () => {
    const result = await findUserByEmail(test_user.email);
    assertEquals(result, test_user);
});

Deno.test("Update user", async () => {
    const result = await findUserByEmail(test_user.email);
    const updatedUser = {...test_user, 
        name: 'updated_name',
        surname: 'updated_surname',
        profile_slot_1: 'updated_profile_slot_1',
        social_media: [
            {
                name: 'updated_social_1_name',
                url: 'updated_social_1_url'
            },
            {
                name: 'updated_social_2_name',
                url: 'updated_social_2_url'
            }
        ]
    }
    await updateUser(test_user.email, updatedUser);
    const retrieve = await findUserByEmail(updatedUser.email);
    assertEquals(retrieve, updatedUser);
});

Deno.test("Delete user", async () => {
    const result = await deleteUser(test_user.email);
    assertEquals(result, 1);
    const retrieve = await findUserByEmail(test_user.email);
    assertEquals(retrieve, undefined);
});