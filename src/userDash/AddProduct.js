import React from 'react'
// import './loginbox.css';
import {Field, reduxForm} from 'redux-form'
import {setEditing, sendNewProduct} from '../actions/dashActions'

export class AddProduct extends React.Component {
  
  onSubmit(values) {
    const authToken = this.props.authToken
    const currentUser = this.props.currentUser;
    console.log('adding a product', currentUser);
    this.props.dispatch(sendNewProduct(values, currentUser, authToken))

  }

  changeDisplay(status) {
    console.log('fire the button!', status)
    this
      .props
      .dispatch(setEditing(status))
  }


  render() {
    return (

            <form  className="addProduct" onSubmit={this
              .props
              .handleSubmit(values => this.onSubmit(values))}>
        <h1>Add a Product!</h1>
        <label htmlFor="category">Category</label>
        <Field
          component="input"
          type="text"
          name="category"
          id="category"
          placeholder="Lipstick"/>
        <label htmlFor="brand">Brand</label>
        <Field
          component="input"
          type="text"
          name="brand"
          id="brand"
          placeholder="M.A.C."/>
        <label htmlFor="name">Name</label>
        <Field
          component="input"
          type="text"
          name="name"
          id="name"
          placeholder="Matte Lipstick"/>
        <label htmlFor="shade">Shade</label>
        <Field
          component="input"
          type="text"
          name="shade"
          id="shade"
          placeholder="Russian Red"/>

        <button type="submit">
          Add Product</button>
        <button onClick={() => this.changeDisplay('false')}>
          Cancel</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'AddProduct' // a unique identifier for this form
})(AddProduct)
