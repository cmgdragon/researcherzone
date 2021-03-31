import { Application, send, Router, Context } from "../imports.ts";
import App from './frontend/src/App.jsx';
import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from 'https://dev.jspm.io/react-dom@16.13.1/server';
import { addNewUser } from './controllers/users.ts';

const app = new Application();
const router = new Router();

app.use(async (context: Context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd().replace(/\\/g, "/")}/src/static`,
    index: "index.*.js",
  });
});

const html = await Deno.readTextFile(`${Deno.cwd().replace(/\\/g, "/")}/src/static/index.html`);
const toStringApp = ReactDOMServer.renderToString(<App />);

router.get('/', async (context: Context, next) => {
  context.response.body = html.replace('<main id="app"></main>', `<main id="app">${toStringApp}</main>`);
})

app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener("listen", ({ port }) => console.log(`listening on port: ${port}`) )

await app.listen({ port: 8000 })



