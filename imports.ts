export { Application, send, Router, Context } from "https://deno.land/x/oak/mod.ts";
export { Bson, MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";


//loading env variabled
config({export: true, safe: true});