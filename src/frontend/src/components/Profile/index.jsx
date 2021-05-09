import React from 'react';
import Header from './Header.jsx';
import ProfileDocuments from './ProfileDocuments.jsx';

const Profile = ({user}) => 
    <div className="profile"><Header user={user} /><ProfileDocuments user={user} /></div>

export default Profile;