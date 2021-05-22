import { Context } from "oak";
import { addNewUser, findUserByEmail } from '~/controllers/database/users.ts';
import User from "~/models/User.ts";
import { SmtpClient } from 'smtp';

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
        const client = new SmtpClient();

        await client.connectTLS({
            hostname: "smtp.gmail.com",
            port: 465,
            username: Deno.env.get('SMTP_USER'),
            password: Deno.env.get('SMTP_PASSWORD'),
        });

        await client.send({
            from: Deno.env.get('SMTP_USER'),
            to: user.email,
            subject: "ResearcherZone – Verification",
            content: '',
            html: `Thank you for registering! Please, click on the following link to verify your account:
            <a href="${'https://researcher.zone/'}verify_account/${userId}">${'https://researcher.zone/'}verify_account/${userId}</a>`
        });

        await client.close();

        context.response.status = 200;
        context.response.body = { status: 200 };

    } catch (error) {
        console.log(error);
        context.response.body = { error };
    }
}

export default register;