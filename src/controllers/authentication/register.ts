import { Context } from "oak";
import { addNewUser, findUserByEmail } from '~/controllers/database/users.ts';
import User from "~/models/User.ts";
import { config } from 'dotenv';
import { deleteUser } from "~/controllers/database/users.ts";

//dotenv
config({export: true, safe: true});

const register = async (context: Context) => {
    try {
        const user: User = await context.request.body().value;
        const query = await findUserByEmail(user.email);

        if (query) {
            context.response.status = 409;
            context.response.body = { message: 'This email already exists', status: 409 };
            return;
        }

        if (!user.email || !user.pwd || !user.name ||
            user.email === '' || user.pwd === '' || user.name === '') {
                context.response.status = 500;
                context.response.body = { message: 'Invalid form', status: 500 };
                return;
        }
        
        const userId = (await addNewUser(user)).toString();
        const message = {
          Messages:[
            {
              From: {
                Email: Deno.env.get('APP_EMAIL'),
                Name: 'ResearcherZone'
              },
              To: [
                {
                  Email: user.email,
                  Name: user.name
                }
              ],
              Subject: 'ResearcherZone – Verification',
              HTMLPart: `<p>Dear ${user.name},</p>
        
              <p>Thank you for registering!</p> Please, click on the following link to verify your account: <br />
              <a href="https://researcher.zone/verify_account/${userId}">https://researcher.zone/verify_account/${userId}</a>`
            }
          ]
        }

        await fetch('https://api.mailjet.com/v3.1/send', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Deno.env.get('APP_AUTH')}`
            },
            body: JSON.stringify(message)
        });

        context.response.status = 200;
        context.response.body = { status: 200 };

    } catch ({message}) {
        const user: User = await context.request.body().value;
        await deleteUser(user.email);
        context.response.body = { message: 'Unexpected error creating user. Please, try it again later', status: 500 };
    }
}

export default register;