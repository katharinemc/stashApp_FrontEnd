import React from 'react'
// import './loginbox.css';
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import {setEditing, sendNewProduct} from '../actions/dashActions'

export class AddProduct extends React.Component {
  
  onSubmit(values) {
    //TODO dispatch different action based on update or create
    console.log('AP1', values)
    const authToken = this.props.authToken
    const currentUser = this.props.currentUser;
    console.log(authToken, currentUser)
    this.props.dispatch(sendNewProduct(values, currentUser, authToken))
  }

  changeDisplay(status) {
    this
      .props
      .dispatch(setEditing(status))
  }


  render() {
   
   let chosenProduct;
    if(this.props.editNumber != null){
      console.log(this.props.products)
      chosenProduct = (this.props.products.filter( product => product.id === this.props.editNumber))[0]
console.log('chosen', chosenProduct)
    }

    return (
            <form  className="addProduct" onSubmit={this
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
          placeholder={this.props.editNumber === null ? `Lipstick` : `${chosenProduct.category}`} />
        <label htmlFor="brand">Brand</label>
        <Field
          component="input"
          type="text"
          name="brand"
          id="brand"
          placeholder={this.props.editNumber === null ? `M.A.C` : `${chosenProduct.brand}`}/>
        <label htmlFor="name">Name</label>
        <Field
          component="input"
          type="text"
          name="name"
          id="name"
          placeholder={this.props.editNumber === null ? `Matte Lipstick` : `${chosenProduct.name}`}/>
        <label htmlFor="shade">Shade</label>
        <Field
          component="input"
          type="text"
          name="shade"
          id="shade"
          placeholder={this.props.editNumber === null ? `Shade` : `${chosenProduct.shade}`}/>

        <button type="submit">
          Add Product</button>
        <button onClick={() => this.changeDisplay('false')}>
          Cancel</button>
      </form>
    );
  }
}

const mapStateToProps = (main) => ({
  error: main.auth.error,
  products: main.main.products,
  editNumber: main.dash.editNumber    // ...
});

AddProduct = connect(
  mapStateToProps
)(AddProduct);


export default reduxForm({
  form: 'AddProduct' // a unique identifier for this form
})(AddProduct)
