import { db_users } from '~/database_dev.ts';
import User from '~/models/User.ts';

export const addNewUser = async (user: User): Promise<any> => await db_users.insertOne(user);

export const findUser = async (param: any): Promise<any> => await db_users.findOne({email: param});