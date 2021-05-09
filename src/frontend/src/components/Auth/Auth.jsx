import React, { useState } from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';
import Footer from '../../components/Footer.jsx';

const Auth = () => {

    const [router, setRouter] = useState('login');

    const changeRoute = route => setRouter(route);

    return (
            <>
            {
                router === 'login' || router === 'newuser' ?
                <><Login registered={router === 'newuser' ? true : false} /> <div className="container">Not yet a member? <a href="#" className="link" onClick={() => changeRoute('register')}>Register</a></div> </>
                :
                <><Register changeRoute={changeRoute} /> <div className="container">Already a member? <a href="#" className="link" onClick={() => changeRoute('login')}>Log in</a ></div></>
            }
            <Footer styles={{position: 'absolute', bottom: '0'}} />
            </>
    )
}

export default Auth;