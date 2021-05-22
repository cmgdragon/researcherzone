import React, { useContext, useState, useEffect } from 'react';
import Auth from './components/Auth/Auth.jsx';
import { UserContext } from './context/userContext.jsx';
import Profile from './components/Profile/index.jsx';

const App = () => {

  const userInfo = useContext(UserContext);

  return (
    <>
      {userInfo === 'loading' ? '' : userInfo?.user ? <Profile userInfo={userInfo} />  : <Auth /> }
    </>
  )
}

export default App;