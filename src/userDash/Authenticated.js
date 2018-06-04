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

  //JON - WANT RERENDER AFTER SEARCH COMPLETED

  render() {
    if (this.props.search === false) {

      if (this.props.products.length === 0) {
        if (this.props.authenticated != true) {
          this
            .props
            .dispatch(fetchProducts(this.props.requestedUser))
            this
            .props
            .dispatch(fetchLooks(this.props.requestedUser))
          } else {
          this
            .props
            .dispatch(fetchProducts(this.props.currentUser))
            this
            .props
            .dispatch(fetchLooks(this.props.currentUser))
          }
      }
    }
    if (!this.props.dispatch) 
      return <h1>UNCONNECTED</h1>

    if (this.props.authToken === null) {
      return <Redirect to={"/"}/>;
    } else if (this.props.editing === 'addProduct') {
      return (
        <div>
          <AddProduct
            currentUser={this.props.currentUser}
            authToken={this.props.authToken}/>
          <Footer/>
        </div>
      )
    } else if (this.props.editing === 'editproducts') {
      return (
        <div>
          <AddProduct
            currentUser={this.props.currentUser}
            authToken={this.props.authToken}/>
          <Footer/>
        </div>
      )
    } else if (this.props.editing === 'editlooks') {
      return (
        <div>
          <AddLook authToken={this.props.authToken}/>
          <Footer/>
        </div>
      )
    } else if (this.props.editing === 'addLook') {
      return (
        <div>
          <AddLook currentUser={this.props.currentUser} authToken={this.props.authToken}/>
          <Footer/>
        </div>

      )

    } else if (this.props.display === 'looks') {
      return (
        <div className="Dash">
        <h1 className="banner">Looks</h1>
          <ReduxSearch kind='Looks'/>
          <AccordionLibrary authenticated={this.props.authenticated} kind='looks'/>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div className="Dash">
        <h1 className="banner">Products</h1>
          <ReduxSearch kind='Products'/>
          <AccordionLibrary authenticated={this.props.authenticated} kind='products'/>
          <Footer/>

        </div>
      );
    }

  }

}

const mapStateToProps = main => ({
  expandFooter: main.main.expandFooter,
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
  authToken: main.auth.authToken
})

export default connect(mapStateToProps)(Authenticated)