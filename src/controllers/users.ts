import { db_users } from '../database.ts';

export const addNewUser = async (): Promise<any> => await db_users.insertOne({
    username: "test",
    password: "test",
});