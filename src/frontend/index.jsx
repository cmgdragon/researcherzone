import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import UserTokenContext from './src/context/userContext.jsx';

/*declare global {
    namespace JSX {
        interface IntrinsicElements {
        [key: string]: any;
        }
    }
}*/

ReactDOM.hydrate(
<UserTokenContext>
    <App />
</UserTokenContext>
, document.getElementById('app'));