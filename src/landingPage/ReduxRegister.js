import React from 'react'
import './register.css';
import { connect } from 'react-redux';

import { registerSequence } from '../actions/auth';
import {Field, reduxForm} from 'redux-form'
import Input from '../Input'
import {required, isEmail, nonEmpty, passwordLength, passwordsMatch} from '../validators'
export class ReduxRegister extends React.Component {
  onSubmit(values) {
    console.log('registration about to happen')
    this
      .props
      .dispatch(registerSequence(values))
  }

  render() {
   return (
      <form
      className="register centeredContent"
      onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
        <h1>Welcome to Our Community!</h1>
        <h2>{this.props.error != null ? this.props.error : ''}</h2>


        <label htmlFor="username">UserName</label>
        <Field component="input" type="text" name="username" id="username"/>
        <label htmlFor="userEmail">Email</label>

        <Field
          component={Input}
          name='userEmail' placeholder="user@user.com"
          validate={[isEmail, required, nonEmpty]} />
 
        <label htmlFor="password">Password</label>
        <Field
          component={Input} placeholder="MySecretWord"
          name='password'
          validate={[passwordLength, required, nonEmpty]} />

        <label htmlFor="passwordconfirm">Confirm Password</label>
        <Field
          component={Input} placeholder="MySecretWord"
          name='passwordconfirm'
          validate={[passwordsMatch, passwordLength, required, nonEmpty]} />

       <span className="hrCenter"> 
        <button  type="submit">Register</button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = (main) => ({
  error: main.auth.error,
      // ...
});

ReduxRegister = connect(
  mapStateToProps
)(ReduxRegister);


export default reduxForm({
  form: 'register' // a unique identifier for this form
})(ReduxRegister)
