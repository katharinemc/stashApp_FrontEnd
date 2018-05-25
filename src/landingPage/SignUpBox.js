import React from 'react'
import './signupbox.css';

export default function SignUpBox (props) {

        return (
            <form>
                <h2>Welcome to Our Community!</h2>
            <label htmlFor="userName">UserName</label>
            <input type="text" id="userName" placeholder="KatharineMc" />
            <label htmlFor="userEmail">UserEmail</label>
            <input type="text" id="userEmail" placeholder="KatharineMc@foobar.com" />
            <label htmlFor="password">password</label>
            <input type="text" id="password" placeholder="MySecretPhrase" />

<button type="submit">Create Account</button>
                </form>
        );
    

}