import React from 'react'
import './loginbox.css';
import { registerSequence } from '../actions/auth';
import {Field, reduxForm} from 'redux-form'

export class ReduxRegister extends React.Component {
  onSubmit(values) {
    this
      .props
      .dispatch(registerSequence(values))
  }

  render() {
   return (
      <form
        className="login"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
        <h1>Welcome to Our Community!</h1>
        <label htmlFor="username">UserName</label>
        <Field component="input" type="text" name="username" id="username"/>
        <label htmlFor="userEmail">Email</label>
        <Field component="input" type="text" name="userEmail" id="userEmail"/>
 
        <label htmlFor="password">Password</label>
        <Field
          component="input"
          type="text"
          name="password"
          id="password"
          placeholder="MySecretPhrase"/>

        <label htmlFor="passwordConfirm">Password</label>
        <Field
          component="input"
          type="text"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="MySecretPhrase"/>

        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register' // a unique identifier for this form
})(ReduxRegister)
