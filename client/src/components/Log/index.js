import React, { useState} from 'react';
import SignIn from './SignIn';
import Register from './Register';


const Log = () => {

    const [SignUp, setSignUp] = useState(true);
    const [signIn, setSignIn] = useState(false);

    const handleSign = (e) => {
        if(e.target.id === 'signIn') {
            setSignIn(false);
            setSignUp(true);
        } else if (e.target.id === 'register') {
            setSignIn(true);
            setSignUp(false);
        }
    }

    return (
        <div>
            <ul>
                <li onClick={handleSign} id='register' className={SignUp ? 'btn-active' : 'btn-inactive'}>Sign up</li>
                <li onClick={handleSign} id="signIn" className={SignIn ? 'btn-active' : 'btn-inactive'}>Sign in</li>
            </ul>
            {SignUp && Register}
            {SignIn && SignIn}
        </div>
    );
};

export default Log;