import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
      e.preventDefault();
      const emailError = document.querySelector('.email.error');
      const passwordError = document.querySelector('.password.error');

      axios({
          method: 'post',
          url: `{process.env.REACT_APP_API_URL}/api/user/login`,
          withCredentials: true,
          data: {
              email: email,
              password: password,
          }
           })
           .then((res) => {
               if(res.data.errors) {
                emailError.innerHTML = res.data.errors.email
                passwordError.innerHTML = res.data.errors.password
               } else {
                 window.location='/'
               }
           })
           .catch((err) => {
             console.log(err);
            })
  };

  return (
    <form onSubmit={submitHandler} className="signin-form">
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          id="email"
          name="password"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="email error"></div>
      <div className="password">
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={password}
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="password error"></div>
    </form>
  );
};

export default SignIn;
