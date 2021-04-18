import React, { useEffect, useContext, useState } from 'react';
import Auth from './components/Auth/Auth.jsx';
import { UserContext } from './context/userContext.jsx';

const App = () => {

  const user = useContext(UserContext);
  //const [user, setUser] = useState(undefined);
  useEffect(() => {
    console.log(user)
  }, []); 

  return (
    <>
      {user ? <Profile user={user} /> : <Auth /> }
    </>
  )
}

export default App;