import React, { useContext } from 'react';
import Auth from './components/Auth/Auth.jsx';
import { UserContext } from './context/userContext.jsx';
import Profile from './components/Profile/index.jsx';

const App = () => {

  const userInfo = useContext(UserContext);

  return (
    <>
      {userInfo.user ? <Profile user={userInfo} />  : <Auth /> }
    </>
  )
}

export default App;