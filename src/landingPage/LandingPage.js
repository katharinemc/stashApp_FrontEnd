import React from 'react';
import Footer from './Footer'
import HeroText from './HeroText'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'
import UserDash from '../userDash/UserDash'
import {connect} from 'react-redux'

export  class LandingPage extends React.Component {

  render() {


    
    return (
      <div className="App">
      <HeroText />
<Footer  />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});
export default connect(mapStateToProps)(LandingPage);