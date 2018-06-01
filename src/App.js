import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import LandingPage from './landingPage/LandingPage';
import UserDash from './userDash/UserDash';

class App extends Component {
  render() {

    return (
      <Router>
        <div>    
        <Route exact path="/" component={LandingPage} />
        <Route path="/users/:userId" component={UserDash} />
        </div>
      </Router>
      
    )
    }
  }

const mapStateToProps = state => ({
  display: state.display,
  login: state.login
});

export default connect(mapStateToProps)(App);