import { Application, send, Context } from "oak";
import { config } from 'dotenv';
import router from '~/controllers/routes.tsx';

declare global {
  namespace ImageBitmap {
      interface ImageBitmap {
      [key: string]: any;
      }
  }
}

//dotenv
config({export: true, safe: true});

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async (context: Context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd().replace(/\\/g, "/")}/src/static`,
    index: "index.*.js",
  });
});

app.addEventListener("listen", ({ port }: any) => console.log(`listening on port: ${port}`) )

await app.listen({ port: 8000 })



