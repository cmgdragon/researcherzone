import UserInfoContext from '~/frontend/src/context/userContext.jsx';
import App from '~/frontend/src/App.jsx';
import Profile from '~/frontend/src/components/Profile/index.jsx';
import { Router, Context } from "oak";
import React from "react";
import ReactDOMServer from "react-dom/server";
import verifyToken from '~/controllers/authentication/security/verifyToken.ts';
import verifyUserCall from '~/controllers/authentication/security/verifyUserCall.ts';

import login from '~/controllers/authentication/login.ts';
import * as users_api from '~/controllers/api/users.ts';
import * as documents_api from '~/controllers/api/documents.ts';
import register from '~/controllers/authentication/register.ts';
import logout from '~/controllers/authentication/logout.ts';
import getUserInfo from "~/controllers/authentication/getUserInfo.ts";
import getGuestInfo from "~/controllers/authentication/getGuestInfo.ts";
import verifyAccount from "~/controllers/authentication/verify_account.ts";

const router = new Router();

const html = await Deno.readTextFile(`${Deno.cwd().replace(/\\/g, "/")}/src/static/index.html`);
const replaceSSRApp = (toString: string) => html.replace(
    '<main id="app"></main>',
    `<main id="app">${toString}</main>`
);

router.get('/', async (context: Context) => {

    try {

        const toStringApp = ReactDOMServer.renderToString(
            <UserInfoContext>
                <App />
            </UserInfoContext>
        );    
        context.response.body = replaceSSRApp(toStringApp);
        
    } catch (error) {
        console.log(error)
    }
})

router.get('/user/:id', async (context: Context) => {

    try {

        const userInfo = await getGuestInfo(context.request.url.pathname);
        const toStringProfile = ReactDOMServer.renderToString(<Profile userInfo={userInfo} />);    
        context.response.body = replaceSSRApp(toStringProfile);

    } catch (error) {
        console.log(error)
    }


})

.post('/login', login)

.post('/register', register)

.get('/logout', logout)

.put('/updateuser', verifyUserCall, users_api.update)

.put('/updatedocument', verifyUserCall, documents_api.update_document)

.post('/documentadd', verifyUserCall, documents_api.addDocument)

.delete('/deletedocument', verifyUserCall, documents_api.removeDocument)

.delete('/deletecategory', verifyUserCall, documents_api.removeCategory)

.get('/getuserinfo', verifyToken, getUserInfo)

.get('/verify_account/:id', verifyAccount)

export default router;