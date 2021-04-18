import { Bson, MongoClient } from "deno-mongo";
import User from './models/User.ts';

const client = new MongoClient();

await client.connect("mongodb://127.0.0.1");

const db = client.database("local");
export const db_users = db.collection<User>("users");