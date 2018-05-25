import React from 'react'
import './footer.css';

export default function Footer (props) {


        console.log(props.onClick)
        return (
            <footer>
                
            <button type="button" onClick={(e) => props.onClick('login')}>Login</button>
            <span className="projectName" onClick={(e) => props.onClick('landing')}>Stash App</span>
            <button type="button" onClick={(e) => props.onClick('register')}>Register</button> 
          </footer>     
        );
    

}