import React from 'react';
import Footer from './Footer'
import {connect} from 'react-redux'
import CollapsableUL from './CollapsableUL'
import './userdash.css'
import DetailView from './DetailView'
import AddProduct  from './AddProduct';
import { loadCurrentUser } from '../local-storage';
import {authSuccess} from '../actions/auth'

export class UserDash extends React.Component {
  render() {
    console.log('userDash, currentUser', this.props.currentUser, 'authToken', this.props.authToken)
    if (this.props.editing === true) {
      return (
        <div>
       <AddProduct currentUser={this.props.currentUser} authToken={this.props.authToken}/>
  
          <Footer/>
        </div>
      )
    } else  {
      return (
        <div className="Dash">
  
          {/* <DetailView /> */}
          <CollapsableUL type="products"/>
          {/* <CollapsableUL type="looks"/> */}
          <Footer/>
  
        </div>
      );
    }
    
  }
}

const mapStateToProps = main => (
  
  {expandFooter: main.main.expandFooter, 
  editing: main.dash.editing,
  auth: main.auth,
  currentUser: main.auth.currentUser,
authToken: main.auth.authToken})

export default connect(mapStateToProps)(UserDash)