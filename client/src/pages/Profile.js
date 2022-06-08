import React from 'react';
import Log from '../components/Log';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='auth-container'></div>
            <Log />
            <div className='log-img-container'>
                <img src='./img/birdy.jpg' alt="login pic"/>
            </div>
            <p>Profile</p>
        </div>
    );
};

export default Profile;