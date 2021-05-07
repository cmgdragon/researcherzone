import React, { useState, useEffect, createContext } from "react";
import getTokenInfo from '../api/getTokenInfo.js';

export const UserContext = createContext(false);

const UserTokenContext = (props) => {

    const [user, setUser] = useState(false);

    useEffect(() => {

        try {
            getTokenInfo().then(userInfo => setUser(userInfo));
        } catch (error) {
            console.error(error);
        }

    }, []);

    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )

}

export default UserTokenContext;