import React from 'react';
import Footer from './Footer'
import HeroText from './HeroText'
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

const mapStateToProps = (auth) => ({
  login: auth.auth.login,
  authToken: auth.auth.authToken,
  currentUser: auth.auth.currentUser
});
export default connect(mapStateToProps)(LandingPage);