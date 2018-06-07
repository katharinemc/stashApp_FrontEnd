import React from 'react'
import {connect} from 'react-redux';
import {changeDisplay} from '../actions/landingActions'

export class Footer extends React.Component {

  changeDisplay(value) {
    this
      .props
      .dispatch(changeDisplay(value))
  }

  render() {
    return (
      <footer>

        <button name="login" type="button" onClick={(e) => this.changeDisplay('login')}>Login</button>
        <span >|</span>
        <button type="button" name="register" onClick={(e) => this.changeDisplay('register')}>Register</button>
      </footer>
    );
  }

}


export default connect()(Footer);