import { MongoClient } from "deno-mongo";
import User from './models/User.ts';
import { config } from 'dotenv';

//dotenv
config({export: true, safe: true});

const client = new MongoClient();

const user = Deno.env.get('MONGODB_USER');
const database = Deno.env.get('MONGODB_DATABASE');
const pwd = Deno.env.get('MONGODB_PASSWORD');
const host = Deno.env.get('MONGODB_HOST');

await client.connect(
  `mongodb+srv://${user}:${pwd}@${host}/${database}?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1&authSource=admin&replicaSet=xyz`
);

const db = client.database(database);
export const db_users = db.collection<User>("users");
export const db_documents = db.collection<any>("documents");