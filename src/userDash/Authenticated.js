import "babel-polyfill";
import React from 'react';

import Footer from './Footer'
import {connect} from 'react-redux'
import './userdash.css'
import {fetchProducts} from '../actions/landingActions'

import AddProduct  from './AddProduct';
import AddLook from './AddLook'
import { Redirect} from 'react-router-dom'

import AccordionLibrary from './AccordionLibrary';
import ReduxSearch  from "./ReduxSearch";

export class Authenticated extends React.Component {


  render() {
    if(this.props.search === false){
      if(this.props.products.length === 0)
{      if(this.props.authenticated !=true ){
        this.props.dispatch(fetchProducts(this.props.requestedUser))
      } else {
        this.props.dispatch(fetchProducts(this.props.currentUser))
      }
}    
      }
    
    if (!this.props.dispatch) return <h1>UNCONNECTED</h1>

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
<ReduxSearch />
<AccordionLibrary authenticated={this.props.authenticated} kind='products' />
{/* <AccordionLibrary authenticated={this.props.authenticated} kind='looks' /> */}

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
display: main.main.display,
requestedUser: main.dash.requestedUser,
  currentUser: main.auth.currentUser,
  search: main.dash.search,
authToken: main.auth.authToken})

export default connect(mapStateToProps)(Authenticated)