import React from 'react'
import './addproduct.css';
import {Field,  reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import {setEditing, updateProduct, sendNewProduct, editItem} from '../actions/dashActions'
import { caughtError } from '../actions/auth';


export class AddProduct extends React.Component {
  
  onSubmit(values) {
    const authToken = this.props.authToken
  
   if(this.props.editNumber ===  null) {
    this.props.dispatch(sendNewProduct(values, authToken))
   } else{
    let number = this.props.editNumber

     this.props.dispatch(updateProduct(values, authToken, number))
   }
  }

  cancelButton() {
    this
      .props
      .dispatch(setEditing(false))
      this.props.dispatch(editItem(null, null))
      this.props.dispatch(caughtError(null))
  }


  render() {
    return (
            <form role="main"  className="addProduct centeredContent" onSubmit={this
              .props
              .handleSubmit(values => this.onSubmit(values))}>
      {this.props.editNumber == null ?   <h1>Add a Product!</h1>  : <h1> Edit Product</h1>}
      {this.props.myerror}  <span><h6>{this.props.myerror}</h6></span>
        <label htmlFor="category">Category</label>
        <Field
          component="input"
          type="text"
          name="category"
          id="category"

                    placeholder='Lip Color'
           />
        <label htmlFor="brand">Brand</label>
        <Field
          component="input"
          type="text"
          name="brand"
          id="brand"
          placeholder="M.A.C."
              value="foobar"
/>
        <label htmlFor="name">Name</label>
        <Field
          component="input"
          type="text"
          name='name'
          id="name"
          placeholder="Matte Lipstick"
          />
        <label htmlFor="shade">Shade</label>
        <Field
          component="input"
          type="text"
          name="shade"
          id="shade"
placeholder="Ruby Woo"          />
        <label htmlFor="notes">Notes</label>
        <Field
          component="textarea"
          type="textarea"
          name="notes"
          id="notes"
placeholder="An iconic classic with a chalky finish"          />
 <span className="addProductButtons">       <button type="submit">
 {this.props.editNumber == null ? `Add Product` : `Edit Product`}</button>
        <button onClick={() => this.cancelButton()}>
          Cancel</button>
          </span>
      </form>
    );
  }
}

AddProduct = reduxForm({
  form: 'AddProduct', // a unique identifier for this form
  enableReinitialize: true
})(AddProduct)

AddProduct =connect( main => {
let chosenProduct = main.main.products.filter( product => product.id === main.dash.editNumber)[0];
  return {
    myerror: main.auth.error,
  products: main.main.products,
  editNumber: main.dash.editNumber,
  initialValues: chosenProduct

  }

})(AddProduct)



export default AddProduct