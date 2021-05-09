import React, { useState, useEffect, createContext } from "react";
import getUserInfo from '../api/getUserInfo.js';

export const UserContext = createContext(false);

const UserInfoContext = ({children}) => {

    const [user, setUser] = useState(false);

    useEffect(async () => {

        try {
            const userInfo = await getUserInfo();
            setUser(userInfo);
        } catch (error) {
            console.error(error);
        }

    }, []);

    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )

}

export default UserInfoContext;