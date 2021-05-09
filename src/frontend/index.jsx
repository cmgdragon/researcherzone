import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import UserInfoContext from './src/context/userContext.jsx';

ReactDOM.hydrate(
<UserInfoContext>
    <App />
</UserInfoContext>
, document.getElementById('app'));