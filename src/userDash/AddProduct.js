import React from 'react'
// import './loginbox.css';
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux';
import {setEditing, updateProduct, sendNewProduct} from '../actions/dashActions'

export class AddProduct extends React.Component {
  
  onSubmit(values) {
    const authToken = this.props.authToken
    const currentUser = this.props.currentUser;
  
   if(this.props.editNumber ===  null) {
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
   
   let chosenProduct;
    if(this.props.editNumber != null){
      chosenProduct = (this.props.products.filter( product => product.id === this.props.editNumber))[0]
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
          value={this.props.initialValues.category}
          placeholder={this.props.editNumber === null ? `Lipstick` : `${chosenProduct.category}`} />
        <label htmlFor="brand">Brand</label>
        <Field
          component="input"
          type="text"
          name="brand"
          id="brand"
          value={this.props.editNumber === null ? `M.A.C` : `${chosenProduct.brand}`}/>
        <label htmlFor="name">Name</label>
        <Field
          component="input"
          type="text"
          name={this.props.initialValues.name}
          id="name"
          value={this.props.editNumber === null ? `Matte Lipstick` : `${chosenProduct.name}`}/>
        <label htmlFor="shade">Shade</label>
        <Field
          component="input"
          type="text"
          name="shade"
          id="shade"
          value={this.props.editNumber === null ? `Shade` : `${chosenProduct.shade}`}/>

        <button type="submit">
          Add Product</button>
        <button onClick={() => this.changeDisplay('false')}>
          Cancel</button>
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
  form: 'AddProduct' // a unique identifier for this form
})(AddProduct)

AddProduct = connect(mapStateToProps,
  state =>
  {
    return ({
      initialValues:{
        name: 'foobar',
        // category: [ownProps.editNumber]
      }
    })
  }
  
  
)(AddProduct)

export default AddProduct