import "babel-polyfill";
import React from 'react';

import Footer from './Footer'
import {connect} from 'react-redux'
import './userdash.css'
import AddProduct  from './AddProduct';
import AddLook from './AddLook'
import {BrowserRouter as Route, Redirect} from 'react-router-dom'

import AccordionLibrary from './AccordionLibrary';

export class UserDash extends React.Component {
  render() {
    if (this.props.authToken === null) {
      return <Redirect to={"/"}/>;
    } else if (this.props.editing === 'addProduct') {
      return (
        <div>
           <AddProduct currentUser={this.props.currentUser} authToken={this.props.authToken}/>
          <Footer/>
        </div>
      )
    } else if (this.props.editing === 'editproducts'){
      return (
        <div>
        <AddProduct currentUser={this.props.currentUser} authToken={this.props.authToken}/>
       <Footer/>
     </div>
      )} else if (this.props.editing === 'editlooks'){
        return (
          <div>
            <AddLook authToken = {this.props.authToken} />
            <Footer />
            </div>
        )
      } else if (this.props.editing === 'addLook') {
      return (
        <div>
        <AddLook currentUser={this.props.currentUser} authToken={this.props.authToken}/>
       <Footer/>
     </div>
  
      )

    } else  {
      return (
<div className="Dash">
<AccordionLibrary kind='products' />
<AccordionLibrary kind='looks' />

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
  looks: main.main.looks,
  products: main.main.products,
  editNumber: main.dash.editNumber,
editKind: main.dash.editKind,
  currentUser: main.auth.currentUser,
authToken: main.auth.authToken})

export default connect(mapStateToProps)(UserDash)