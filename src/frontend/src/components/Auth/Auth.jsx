import React, { useState } from 'react';
import { StaticRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register.jsx';
import Login from './Login.jsx';

const Auth = () => {

    const [router, setRouter] = useState('login');
    const changeRoute = route => {setRouter(route); console.log(router)};

    return (
            <>
            {
                router === 'login' ? <> <Login /> <span onClick={() => changeRoute('login')}>Register</span> </> :
                <><Register /> <span onClick={() => changeRoute('register')}>Log in</span></>
            }          
            </>
    )
}

export default Auth;