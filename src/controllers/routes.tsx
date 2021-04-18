import App from '~/frontend/src/App.jsx';
import { Router, Context } from "oak";
import React from "react";
import ReactDOMServer from "react-dom/server";
import verifyToken from '~/controllers/authentication/security.ts';
import cookie from 'cookie';

import login from '~/controllers/authentication/login.ts';
import register from '~/controllers/authentication/register.ts';
import getTokenInfo from "~/controllers/authentication/getTokenInfo.ts";

const router = new Router();

const html = await Deno.readTextFile(`${Deno.cwd().replace(/\\/g, "/")}/src/static/index.html`);
const toStringApp = ReactDOMServer.renderToString(<App />);

router.get('/', async (context: Context) => {
    context.response.body = html.replace('<main id="app"></main>', `<main id="app">${toStringApp}</main>`);
})
  
.post('/login', login)

.post('/register', register)

.get('/gettokeninfo', verifyToken, getTokenInfo)

.get('/test2', verifyToken,async(context) => {

    context.response.body = 'sda';
})

export default router;