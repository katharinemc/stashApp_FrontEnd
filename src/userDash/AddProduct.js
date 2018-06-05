import React from 'react'
import './addproduct.css';
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import {setEditing, updateProduct, sendNewProduct} from '../actions/dashActions'

export class AddProduct extends React.Component {
  
  onSubmit(values) {
    const authToken = this.props.authToken
    const currentUser = this.props.currentUser;
  
   if(this.props.editNumber ===  null) {
console.log( 'on form', values)
    this.props.dispatch(sendNewProduct(values, authToken))
   } else{
    let number = this.props.editNumber
     this.props.dispatch(updateProduct(values, authToken, number))
   }
  }

  changeDisplay(status) {
    this
      .props
      .dispatch(setEditing(status))
  }


  render() {
    console.log(this.props)
    return (
            <form  className="addProduct centeredContent" onSubmit={this
              .props
              .handleSubmit(values => this.onSubmit(values))}>
        <h1>{this.props.editNumber === null ? `Add a Product!` : `Edit Product`}</h1>
        <span>{this.props.error}</span>
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
placeholder="Russian Red"          />

 <span className="addProductButtons">       <button type="submit">
 {this.props.editNumber === null ? `Add Product` : `Edit Product`}</button>
        <button onClick={() => this.changeDisplay('false')}>
          Cancel</button>
          </span>
      </form>
    );
  }
}

const mapStateToProps = (main) => {

return  ({
  error: main.auth.error,
  products: main.main.products,
  editNumber: main.dash.editNumber    // ...
})};



AddProduct = reduxForm({
  form: 'AddProduct', // a unique identifier for this form
  enableReinitialize: true
})(AddProduct)

AddProduct =connect( (main) => ({
  products: main.main.products,
  editNumber: main.dash.editNumber, // pull initial values from account reducer
  initialValues: main.main.products.filter( product => product.id === main.dash.editNumber)[0],
  }),
 // bind account loading action creator

  
)(AddProduct)

export default AddProduct