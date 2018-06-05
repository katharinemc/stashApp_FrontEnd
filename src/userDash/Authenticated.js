import "babel-polyfill";
import React from 'react';

import Footer from './Footer'
import {connect} from 'react-redux'
import './authenticated.css'
import {fetchProducts, fetchLooks} from '../actions/landingActions'

import AddProduct from './AddProduct';
import AddLook from './AddLook'
import {Redirect} from 'react-router-dom'

import AccordionLibrary from './AccordionLibrary';
import ReduxSearch from "./ReduxSearch";

export class Authenticated extends React.Component {

componentDidMount() {
  if (this.props.search === false) {
console.log('who is requested?', this.props.requestedUser, 'what are params?')
    if (this.props.products.length === 0 && this.props.newUser != true) {
      if (this.props.authenticated != true) {
       console.log('lets get req stuff')
        this
          .props
          .dispatch(fetchProducts(this.props.requestedUser))
          this
          .props
          .dispatch(fetchLooks(this.props.requestedUser))
        } else {
          console.log('lets get our stuff')
        this
          .props
          .dispatch(fetchProducts(this.props.currentUser))
          this
          .props
          .dispatch(fetchLooks(this.props.currentUser))
        }
    }
  }

}
  render() {
    if (this.props.authToken === null) {
      return <Redirect to={"/"}/>;

    } else if (this.props.editing === 'addProduct' ) {
      return (
        <div>
          <AddProduct
            currentUser={this.props.currentUser}
            authToken={this.props.authToken}/>
           
        </div>
      )
    } else if (this.props.editing === 'editproducts') {
      return (
        <div>
          <AddProduct
            currentUser={this.props.currentUser}
            authToken={this.props.authToken}/>
           
        </div>
      )
    } else if (this.props.editing === 'editlooks') {
      return (
        <div>
          <AddLook authToken={this.props.authToken}/>
           
        </div>
      )
    } else if (this.props.editing === 'addLook') {
      return (
        <div>
          <AddLook currentUser={this.props.currentUser} authToken={this.props.authToken}/>
           
        </div>

      )

    } else if (this.props.display === 'looks') {
      return (
        <div className="looks">
        <h1 className="banner">Looks</h1>
          <ReduxSearch kind='Looks'/>
          <AccordionLibrary authenticated={this.props.authenticated} kind='looks'/>
           
        </div>
      )
    } 
    // else if (this.props.error){
    //   return( <div><div className="centeredContent hrCenter"> {this.props.error}</div>
    //   <Footer /> </div>
    //  )  } 
    else  {
      return (
        <div className="products">

        <h1 className="banner">Products</h1>
          <ReduxSearch kind='Products'/>
          <AccordionLibrary authenticated={this.props.authenticated} kind='products'/>
           

        </div>
      );
    }

  }

}

const mapStateToProps = main => ({
  expandFooter: main.main.expandFooter,
  editing: main.dash.editing,
  error: main.auth.error,
  auth: main.auth,
  looks: main.main.looks,
  products: main.main.products,
  editNumber: main.dash.editNumber,
  editKind: main.dash.editKind,
  display: main.main.display,
  requestedUser: main.dash.requestedUser,
  currentUser: main.auth.currentUser,
  search: main.dash.search,
  newUser: main.auth.newUser,
  authToken: main.auth.authToken
})

export default connect(mapStateToProps)(Authenticated)