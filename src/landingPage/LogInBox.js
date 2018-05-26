import React from 'react'
import './loginbox.css';
import { Redirect} from 'react-router';
import { submitLogin, setLoginStatus } from '../actions/landingActions';
import {connect} from 'react-redux'

export class LogInBox extends React.Component {
submitButton(event) {
    event.preventDefault;
this.props.dispatch(setLoginStatus(true))

}

render () {
    if(this.props.login === true) {
        console.log('hi there sailor')
        return <Redirect to={"/UserDash"} />;
    }
  


    console.log(this.props);
   
    
    return (
        <form className="login" onSubmit={ (e)=> this.submitButton(e)}>
            <h1>Welcome Back!</h1>
        <label htmlFor="userName">UserName</label>
        <input type="text" id="userName" placeholder="KatharineMc" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="MySecretPhrase" />

<button type="submit"  onClick={ (e)=> this.submitButton(e)}>Log In</button>
            </form>
    );
}
}

const mapStateToProps = state => ({
    login: state.login
  });
  export default connect(mapStateToProps)(LogInBox);