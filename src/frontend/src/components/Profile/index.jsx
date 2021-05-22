import React, { useState } from 'react';
import Header from './Header.jsx';
import ProfileDocuments from './ProfileDocuments.jsx';
import Footer from '../Footer.jsx';

const Profile = ({userInfo}) => {

    const [profileUserInfo, setUserInfo] = useState(userInfo);

    return(
        <div className="profile">
            <Header userInfo={profileUserInfo} setUserInfo={setUserInfo} />
            <ProfileDocuments userInfo={profileUserInfo} setUserInfo={setUserInfo} />
            <Footer dynamic={false} />
        </div>
    )
}

export default Profile;