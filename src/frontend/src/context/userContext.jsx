import React, { useState, useEffect, createContext } from "react";
import getUserInfo from '../api/getUserInfo.js';

export const UserContext = createContext(false);

const UserInfoContext = ({children}) => {

    const [userInfo, setUserInfo] = useState('loading');

    useEffect(async () => {
        try {
            const userInfo = await getUserInfo();
            setUserInfo(userInfo);
        } catch (error) {
            console.error(error);
        }

    }, []);

    return (
        <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    )

}

export default UserInfoContext;