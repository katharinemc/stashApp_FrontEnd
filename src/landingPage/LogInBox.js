import React from 'react'
import './loginbox.css';

export default function LogInBox (props) {

        return (
            <form className="login">
                <h1>Welcome Back!</h1>
            <label htmlFor="userName">UserName</label>
            <input type="text" id="userName" placeholder="KatharineMc" />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" placeholder="MySecretPhrase" />

<button type="submit">Log In</button>
                </form>
        );
    

}