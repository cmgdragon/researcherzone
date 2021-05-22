import React, { useState } from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';

const Auth = () => {

    const [router, setRouter] = useState('login');

    const changeRoute = route => setRouter(route);

    return (
            <div className="auth">
                <div className="app__auth-header">
                    <img src="img/icon.png" alt="ResearcherZone" />
                    <h1>ResearcherZone</h1>       
                </div>
            {
                router === 'login' || router === 'newuser' ?

                <Login registered={router === 'newuser' ? true : false} changeRoute={changeRoute} />
                :
                <Register changeRoute={changeRoute} />
            }
            </div>
    )
}

export default Auth;