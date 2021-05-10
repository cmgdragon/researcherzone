import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import ProfileDocuments from './ProfileDocuments.jsx';

const Profile = ({userInfo}) => {

    const [profileUserInfo, setUserInfo] = useState(userInfo);
    useEffect(() => {
        console.log(userInfo)
    }, []);

    return(
        <div className="profile">
            <Header userInfo={profileUserInfo} setUserInfo={setUserInfo} />
            <ProfileDocuments userInfo={profileUserInfo} setUserInfo={setUserInfo} />
        </div>
    )
}

export default Profile;