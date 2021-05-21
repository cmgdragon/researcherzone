import { db_users } from '~/database.ts';
//import { db_users } from '~/database_dev.ts';
import User from '~/models/User.ts';

export const addNewUser = async (user: User): Promise<any> => await db_users.insertOne(user);

export const findUserByEmail = async (param: any): Promise<any> => 
    await db_users.findOne({ email: param }, { noCursorTimeout: false } as any);

export const findUserById = async (_id: any): Promise<any> => 
    await db_users.findOne({ _id },  { noCursorTimeout: false } as any);

export const deleteUser = async (email: string): Promise<any> => await db_users.deleteOne({ email });

const extractFields = (document: Object) => {
    const keys = Object.keys(document);
    const values = Object.values(document);
    const extracted = {};
    for (const keyIndex in keys) {
        if (keys[keyIndex] === '_id' || keys[keyIndex] === 'pwd') continue;
        extracted[keys[keyIndex]] = 
        Array.isArray(values[keyIndex]) ? [...values[keyIndex]] :
        typeof values[keyIndex] === 'object' ? {...values[keyIndex]} :
        values[keyIndex]
    }
    return extracted;
}

export const updateUser = async (email: any, user: User): Promise<any> => await db_users.updateOne(
    { email },
    { $set: extractFields(user) }
);