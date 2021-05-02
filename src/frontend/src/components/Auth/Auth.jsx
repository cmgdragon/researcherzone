import React, { useState } from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';

const Auth = () => {

    const [router, setRouter] = useState('login');

    const changeRoute = route => setRouter(route);

    return (
            <>
            {
                router == 'login' ?
                <><Login /> <span onClick={() => changeRoute('register')}>Register</span> </>
                :
                <><Register changeRoute={changeRoute} /> <span onClick={() => changeRoute('login')}>Log in</span></>
            }
            </>
    )
}

export default Auth;