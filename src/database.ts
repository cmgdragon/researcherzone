import { Bson, MongoClient } from "deno-mongo";
import User from './models/User.ts';

const client = new MongoClient();

await client.connect({
  db: Deno.env.get('MONGODB_DATABASE') as string,
  tls: true,
  servers: [
    { 
      host: Deno.env.get('MONGODB_HOST') as string,
      port: 27017,
    },
  ],
  credential: {
    username: Deno.env.get('MONGODB_USER') as string,
    password: Deno.env.get('MONGODB_PASSWORD') as string,
    db: Deno.env.get('MONGODB_DATABASE') as string,
    mechanism: "SCRAM-SHA-1",
}});

const db = client.database(Deno.env.get('MONGODB_DATABASE') as string);
export const db_users = db.collection<User>("users");