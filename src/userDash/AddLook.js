import React from 'react'
// import './loginbox.css';
import {Field, reduxForm} from 'redux-form'
import {setEditing, addToLookSearch, sendNewLook} from '../actions/dashActions'
import { connect } from 'react-redux';


export class AddLook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultProducts: [],
      selectedProducts: []
    }
  }


  onSubmit(values, products) {
    const authToken = this.props.authToken
    const productIds = products.map(product => product.id)
    console.log('onsub', values, productIds, authToken)
    this.props.dispatch(sendNewLook(values, productIds, authToken))

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
      selectedProducts: [...this.state.selectedProducts, product]
    })
  }

  removeFromLook(item) {
    console.log('remove fires')
    this.setState({
      selectedProducts: this.state.selectedProducts.filter(product => product != item )
    })
  }

  render() {
    console.log('current products', this.state.selectedProducts)  
    return (

            <form  className="addLook" onSubmit={this
              .props
              .handleSubmit(values => this.onSubmit(values, this.state.selectedProducts))}>
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
          {this.state.selectedProducts.map(product =>{
return (<li onClick={() => this.removeFromLook(product)}> `{product.brand}, {product.category}, {product.name}, {product.shade} `</li>)
          })}
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
          Add Look</button>
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
