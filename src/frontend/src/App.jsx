import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Profile from './components/Profile.jsx';
import { UserContext } from './context/userContext.jsx';

const App = () => {

    const tokenInfo = useContext(UserContext);
    //const [user, setUser] = useState(undefined);
    /*useEffect(() => {
            
    }, [user]);*/

    return (
        <>
        {tokenInfo ? <Profile user={tokenInfo} /> : <Login />}
         
      </>
    )
}

export default App;