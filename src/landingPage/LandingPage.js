import React from 'react';
import Footer from './Footer'
import HeroText from './HeroText'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'
import UserDash from '../userDash/UserDash'
import {connect} from 'react-redux'
import './landingpage.css'

export  class LandingPage extends React.Component {

  render() {
    if(this.props.login === true) {
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
  login: state.login
});
export default connect(mapStateToProps)(LandingPage);