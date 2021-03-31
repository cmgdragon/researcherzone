import { Application, send, Router, Context } from "../imports.ts";
import React from "https://dev.jspm.io/react@17.0.2";
import ReactDOMServer from "https://dev.jspm.io/react-dom@17.0.2/server";
import { addNewUser } from './controllers/users.ts';

const app = new Application();
const router = new Router();
console.log(`${Deno.cwd().replace('/\\/g', '/')}/static`)
router.get('/', async (context: Context, next) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd().replace(/\\/g, "/")}/src/static`,
    index: "index.html",
  });
})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async (context, next) => {
  const root = `${Deno.cwd().replace(/\\/g, "/")}/src/static`
  try {
      await context.send({ root })
  } catch {
      next()
  }
})

app.addEventListener("listen", ({ port }) => console.log(`listening on port: ${port}`) )

await app.listen({ port: 8000 })



