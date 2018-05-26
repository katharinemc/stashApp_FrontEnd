import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
import LandingPage from './landingPage/LandingPage'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
<LandingPage />
</Provider>
    );
  }
}

export default App;
