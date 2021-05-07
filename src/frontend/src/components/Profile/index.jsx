import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import ProfileDocuments from './ProfileDocuments.jsx';

const Profile = ({user}) => {

    useEffect(() => console.log(user), [user])

    return (
        <div className={'profile'}>
            <Header user={user} />
            <ProfileDocuments user={user} />
        </div>
    )
}

export default Profile;