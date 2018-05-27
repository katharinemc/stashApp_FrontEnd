import React from 'react';
import Footer from './Footer'
import HeroText from './HeroText'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'
import UserDash from '../userDash/UserDash'
import {connect} from 'react-redux'
import './landingpage.css'

export  class LandingPage extends React.Component {

  render() {

    console.log('landing has some props', this.props)
    if(this.props.currentUser != null) {
      console.log('hi there sailor')
      return <Redirect to={"/UserDash"} />;
  }


    
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