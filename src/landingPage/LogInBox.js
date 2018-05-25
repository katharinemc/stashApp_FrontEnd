import React from 'react'
import './signupbox.css';

export default function LogInBox (props) {

        return (
            <form>
                <h2>Welcome Back!</h2>
            <label htmlFor="userName">UserName</label>
            <input type="text" id="userName" placeholder="KatharineMc" />
            <label htmlFor="password">password</label>
            <input type="text" id="password" placeholder="MySecretPhrase" />

<button type="submit">Log In</button>
                </form>
        );
    

}