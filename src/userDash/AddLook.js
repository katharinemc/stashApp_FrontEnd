import React from 'react'
// import './loginbox.css';
import {Field, reduxForm} from 'redux-form'
import {setEditing, addToLookSearch} from '../actions/dashActions'
import { connect } from 'react-redux';


export class AddLook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultProducts: [],
      currentProducts: []
    }
  }


  onSubmit(values) {
    const authToken = this.props.authToken
    const currentUser = this.props.currentUser;
    // this.props.dispatch(sendNewProduct(values, currentUser, authToken))

  }

  changeDisplay(status) {
    this
      .props
      .dispatch(setEditing(status))
  }

  onChange(event){
    if(event.target.value != '')
    {
      console.log('hi there')
      let resultProducts = this.props.products.filter(product => {
        return product.brand.match(event.target.value) || product.name.match(event.target.value) || product.category.match(event.target.value)

        }) 
        this.setState({
          resultProducts
       })
    } else {
      this.setState({
        resultProducts: []
      })
    }  
  }

  addProductToLook(product) {
    this.setState({
      currentProducts: [...this.state.currentProducts, product]
    })
  }
  render() {
    console.log('current products', this.state.currentProducts)  
    return (

            <form  className="addLook" onSubmit={this
              .props
              .handleSubmit(values => this.onSubmit(values))}>
        <h1>Add a Look!</h1>
        <label htmlFor="name">Look Name</label>
        <Field
          component="input"
          type="text"
          name="name"
          id="name"
          placeholder="Date Night"/>

          <h3>Current Products</h3>
          {/* //added products go here */}
          {this.state.currentProducts.map(product =>{
            return (`${product.brand}, ${product.category}`) })}
          <label htmlFor="productSearch">Choose your products</label>
          <Field
          component="input"
          type="text"
          name="productSearch"
          id="productSearch"
          onChange={(values) => this.onChange(values)}
          placeholder="Nars HeatWave"/>

              <h3>Product Search Results</h3>

      

<ul>
{this.state.resultProducts.map(product => {

return (<li onClick={() => this.addProductToLook(product)}> `{product.brand}, {product.category}, {product.name}, {product.shade} `</li>)
              } )}
  </ul>


                {/* KRM SearchResultsGoHere */}

        <button type="submit">
          Add Product</button>
        <button onClick={() => this.changeDisplay('false')}>
          Cancel</button>
      </form>
    );
  }
}

const mapStateToProps = (main) => ({
    products: main.main.products,
        // ...
});

AddLook = connect(
    mapStateToProps
)(AddLook);

export default reduxForm({
  form: 'AddLook' // a unique identifier for this form
})(AddLook)
