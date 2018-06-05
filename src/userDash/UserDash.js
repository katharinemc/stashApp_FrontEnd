import "babel-polyfill";
import React from 'react';

import Footer from './Footer'
import {connect} from 'react-redux'
import './userdash.css'
import AddProduct from './AddProduct';
import AddLook from './AddLook'

import Authenticated from "./Authenticated";
import { setRequestedUser } from "../actions/dashActions";

export class UserDash extends React.Component {

componentWillMount() {
 console.log( "did you mount?", this.props.match.params)
  this.props.dispatch(setRequestedUser(this.props.match.params.userId))
}

  render() {


return   (<div>
<Authenticated authenticated = {(this.props.match.params.userId === this.props.currentUser)} /> 
<Footer />
</div>
);

  
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
  authToken: main.auth.authToken,
  requestedUser: main.auth.requestedUser,
  error: main.auth.error
})

export default connect(mapStateToProps)(UserDash)