import React from 'react'
import './loginbox.css';
import {submitLogin, login_sequence, setLoginStatus} from '../actions/auth';
import {Field, reduxForm} from 'redux-form'

export class ReduxLogin extends React.Component {
  onSubmit(values) {
    this
      .props
      .dispatch(login_sequence(values))
  }

  render() {

    return (
      <form
        className="login"
        onSubmit={this
        .props
        .handleSubmit(values => this.onSubmit(values))}>
        <h1>Welcome Back!</h1>
        <label htmlFor="userName">UserName</label>
        <Field component="input" type="text" name="username" id="username"/>
        <label htmlFor="password">Password</label>
        <Field
          component="input"
          type="text"
          name="password"
          id="password"
          placeholder="MySecretPhrase"/>

        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(ReduxLogin)
