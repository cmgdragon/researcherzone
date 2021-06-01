import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import Profile from './src/components/Profile/index.jsx';
import UserInfoContext from './src/context/userContext.jsx';
import getGuestInfo from './src/api/getGuestInfo.js';

if (!window.location.pathname.includes('/user')) {
    ReactDOM.hydrate(
    <UserInfoContext>
        <App />
    </UserInfoContext>
    , document.getElementById('app'));
} else {
    document.getElementById('app').innerHTML = "Loading...";
    (async () => {
        const userInfo = await getGuestInfo();
        ReactDOM.hydrate(
            <Profile userInfo={userInfo} />
        , document.getElementById('app'));
    })();
}