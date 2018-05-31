import React from 'react'
// import './loginbox.css';
import {submitLogin, login_sequence, setLoginStatus} from '../actions/auth';
import {Field, reduxForm} from 'redux-form'
import Input from '../Input.js'
import {required, passwordsMatch, nonEmpty} from '../validators'

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
        <Field
          component={Input}
          name='username'
          validate={[required, nonEmpty]} />
          <label 
          htmlFor="password">Password</label>

        <Field
          component={Input}
          name='password'
          validate={[passwordsMatch, required, nonEmpty]} />

        <button disabled={this.props.pristine || this.props.submitting} type="submit">Log In</button>
      </form>
      ); } } export default reduxForm({form : 'login'})(ReduxLogin)
