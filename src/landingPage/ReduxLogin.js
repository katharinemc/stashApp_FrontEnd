import React from 'react'
import {submitLogin, login_sequence, setLoginStatus} from '../actions/auth';
import {Field, reduxForm} from 'redux-form'
import Input from '../Input.js'
import {required, passwordsMatch, nonEmpty} from '../validators'
import { connect } from 'react-redux';

export class ReduxLogin extends React.Component {
  onSubmit(values) {
    this
      .props
      .dispatch(login_sequence(values))
  }

  render() {
    return (
      <form
        className="centeredContent"
        onSubmit={this
        .props
        .handleSubmit(values => this.onSubmit(values))}>
        <h1>Welcome Back!</h1>
        <span>{this.props.error}</span>
  <div className="inUse">
        <label htmlFor="userName">UserName</label>
        <Field type="text"
          component={Input}
          name='username'
          validate={[required, nonEmpty]} />
          <label 
          htmlFor="password">Password</label>

        <Field
        type="password"
          component={Input}
          name='password'
          validate={[passwordsMatch, required, nonEmpty]} />

        <button className="hrCenter" disabled={this.props.pristine || this.props.submitting} type="submit">Log In</button>
</div>
      </form>
      ); } } 
      
      
      const mapStateToProps = (main) => ({
        error: main.auth.error,
            // ...
      });
      
      ReduxLogin = connect(
        mapStateToProps
      )(ReduxLogin);
      
      
      
      
      export default reduxForm({form : 'login'})(ReduxLogin)
