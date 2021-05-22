import { MongoClient } from "deno-mongo";
import User from './models/User.ts';
import { config } from 'dotenv';

//dotenv
config({export: true, safe: true});

const client = new MongoClient();

await client.connect({
  db: Deno.env.get('MONGODB_DATABASE'),
  tls: true,
  servers: [
    { 
      host: Deno.env.get('MONGODB_HOST'),
      port: parseInt(Deno.env.get('MONGODB_PORT')),
    },
  ],
  credential: {
    username: Deno.env.get('MONGODB_USER'),
    password: Deno.env.get('MONGODB_PASSWORD'),
    db: Deno.env.get('MONGODB_DATABASE'),
    mechanism: "SCRAM-SHA-1",
}});

const db = client.database(Deno.env.get('MONGODB_DATABASE'));
export const db_users = db.collection<User>("users");
export const db_documents = db.collection<any>("documents");