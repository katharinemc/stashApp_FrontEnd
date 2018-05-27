import React from 'react';
import Footer from './Footer'
import HeroText from './HeroText'
import UserDash from '../userDash/UserDash'
import {connect} from 'react-redux'
import './landingpage.css'

export  class LandingPage extends React.Component {

  render() {


    
    return (
      <div className="landingPage">
      <HeroText />
<Footer  />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  authToken: state.authToken,
  currentUser: state.currentUser
});
export default connect(mapStateToProps)(LandingPage);