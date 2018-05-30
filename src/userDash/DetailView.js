import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
import {fetchProducts} from '../actions/landingActions'
import { loadAuthToken } from './../local-storage.js'
import {setAuthToken} from '../actions/auth'

export class DetailView extends React.Component {

// componentWillMount (){
//   const authToken = loadAuthToken();
//   if (authToken) {
//       const token = authToken;
//       this.props.dispatch(setAuthToken(token));
//       // store.dispatch(refreshAuthToken());
//   }
// }

  render() {

    return (

        <h1>detail view goes here</h1>
    );
  }
}



const mapStateToProps = main => ({
    currentUser: main.main.currentUser, 
    authToken: main.main.authToken, 
    products: main.main.products})

export default connect(mapStateToProps)(DetailView)