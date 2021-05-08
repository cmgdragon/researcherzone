import App from '~/frontend/src/App.jsx';
import { Router, Context } from "oak";
import React from "react";
import ReactDOMServer from "react-dom/server";
import verifyToken from '~/controllers/authentication/security/verifyToken.ts';
import verifyUserCall from '~/controllers/authentication/security/verifyUserCall.ts';
import createGuestToken from '~/controllers/authentication/createGuestToken.ts';
import cookie from 'cookie';

import login from '~/controllers/authentication/login.ts';
import * as users_api from '~/controllers/api/users.ts';
import * as documents_api from '~/controllers/api/documents.ts';
import register from '~/controllers/authentication/register.ts';
import logout from '~/controllers/authentication/logout.ts';
import getTokenInfo from "~/controllers/authentication/getTokenInfo.ts";

const router = new Router();

const html = await Deno.readTextFile(`${Deno.cwd().replace(/\\/g, "/")}/src/static/index.html`);
const toStringApp = ReactDOMServer.renderToString(<App />);

router.get('/', async (context: Context) => {
    context.response.body = html.replace(
        '<main id="app"></main>',
        `<main id="app">${toStringApp}</main>`
    );
})

router.get('/user/:id', async (context) => {
    context.response.body = html.replace(
        '<main id="app"></main>',
        `<main id="app">${toStringApp}</main>`
    );
})

.post('/login', login)

.post('/register', register)

.get('/logout', logout)

.put('/updateuser', verifyUserCall, users_api.update)

.put('/updatedocument', verifyUserCall, documents_api.update_document)

.post('/documentadd', verifyUserCall, documents_api.addDocument)

.delete('/deletedocument', verifyUserCall, documents_api.removeDocument)

.delete('/deletecategory', verifyUserCall, documents_api.removeCategory)

.get('/gettokeninfo', verifyToken, getTokenInfo)

.get('/test2', async(context) => {
    context.response.body = 'sda';
})

export default router;