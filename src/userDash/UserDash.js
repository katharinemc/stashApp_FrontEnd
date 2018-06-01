import "babel-polyfill";
import React from 'react';

import Footer from './Footer'
import {connect} from 'react-redux'
import './userdash.css'
import AddProduct from './AddProduct';
import AddLook from './AddLook'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'

import Authenticated from "./Authenticated";

export class UserDash extends React.Component {
  render() {

    console.log(this.props.match.params.userId === this.props.currentUser )
    // if (this.props.match.params.userId === this.props.currentUser) {
    //   console.log('we have a match')
    //   return (<Authenticated authenticated ='foobar'/>)
    // } 
  return    <Authenticated requestedUser={this.props.match.params.userId} authenticated = {(this.props.match.params.userId === this.props.currentUser)} />


  
}
}

const mapStateToProps = main => ({
  expandFooter: main.main.expandFooter,
  editing: main.dash.editing,
  auth: main.auth,
  editNumber: main.dash.editNumber,
  editKind: main.dash.editKind,
  display: main.main.display,
  currentUser: main.auth.currentUser,
  authToken: main.auth.authToken
})

export default connect(mapStateToProps)(UserDash)