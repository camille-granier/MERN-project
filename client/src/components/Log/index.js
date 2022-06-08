import React, { useState} from 'react';
import SignIn from './SignIn';
import Register from './Register';


const Log = ( props ) => {

    const [signUp, setSignUp] = useState(props.signup);
    const [signIn, setSignIn] = useState(props.signin);

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
                <li onClick={handleSign} id='register' className={signUp ? 'btn-active' : 'btn-inactive'}>Sign up</li>
                <li onClick={handleSign} id="signIn" className={SignIn ? 'btn-active' : 'btn-inactive'}>Sign in</li>
            </ul>
            {signUp && <Register/>}
            {signIn && <SignIn/>}
        </div>
    );
};

export default Log;