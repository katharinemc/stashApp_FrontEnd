import React from 'react'
import './addLook.css';
import {Field, reduxForm} from 'redux-form'
import {setEditing, sendEditLook, addToLookSearch, sendNewLook} from '../actions/dashActions'
import { connect } from 'react-redux';
import {caughtError} from '../actions/auth'

export class AddLook extends React.Component {
  constructor(props) {
    super(props);

const chosenLook =this.props.looks.filter( look => look.id === this.props.editNumber)[0] 
    this.state = {
      resultProducts: [],     
      chosenLook:  this.props.editNumber ?  chosenLook : '',
      selectedProducts: this.props.editNumber ? chosenLook.products : []
    }
  }

  onSubmit(values, products) {
    const authToken = this.props.authToken
    const productIds = products.map(product => product.id)

if(this.state.selectedProducts < 1){
  this.props.dispatch(caughtError('Looks must have at least one product'))
} else {
    if(this.props.editNumber === null) {
      this.props.dispatch(sendNewLook(values, productIds, authToken))
    } else if (this.props.editNumber != null) {
      let number = this.props.editNumber
      this.props.dispatch(sendEditLook(values, productIds, authToken, number))
    }}

  }

  changeDisplay(status) {
    this
      .props
      .dispatch(setEditing(status))
  }

  onChange(event){
    if(event.target.value != '')
    {
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
      selectedProducts: [...this.state.selectedProducts, product],
      resultProducts: this.state.resultProducts.filter(item => item != product)

    })
  }

  removeFromLook(item) {
    this.setState({
      selectedProducts: this.state.selectedProducts.filter(product => product != item ),
      resultProducts: [ ... this.state.resultProducts, item]
    })
  }



  render() {
    console.log('addlook props', this.props)
    return (
      <form  className="addLook centeredContent" onSubmit={this
              .props
              .handleSubmit(values => this.onSubmit(values, this.state.selectedProducts))}>
        <h1>{this.props.editNumber === null ? `Add a Look!` : `Edit Look`}</h1>
        <span className="errorMessage">{this.props.error} </span>

        <label htmlFor="name">Look Name</label>
      
        <Field
          component="input"
          type="text"
          name="name"
          id="name"
          
          placeholder={this.props.editNumber === null ? `Date Night` : `${this.state.chosenLook.name}`}
           />

          {this.state.selectedProducts.length > 0 ? <h4>Current Products</h4> : ''}
          {this.state.selectedProducts.map((product, index) =>{
return (<li key={index} onClick={() => this.removeFromLook(product)}> {product.brand} {product.category} {product.name} {product.shade} </li>)
          })}
<label htmlFor="productSearch">Choose your products</label>
          <Field
          component="input"
          type="text"
          name="productSearch"
          id="productSearch"
          onChange={(values) => this.onChange(values)}
          placeholder="Nars HeatWave"/>

          {this.state.resultProducts > 0 ? <h4>Search Result</h4> : ''}


    
<ul>
{this.state.resultProducts.map(product => {

return (<li onClick={() => this.addProductToLook(product)}> {product.brand} {product.category} {product.name} {product.shade} </li>)
              } )}
  </ul>

 <span className="addLookButtons"> 
        <button type="submit">
        {this.props.editNumber === null ? `Add Look` : `Edit Look`}
          </button>
        <button onClick={() => this.changeDisplay('false')}>
          Cancel</button>
          </span>
      </form>
    );
  }
}

const mapStateToProps = (main) => ({
  looks:main.main.looks,
    products: main.main.products,
    error: main.auth.error,
    editNumber: main.dash.editNumber 

        // ...
});

AddLook = connect(
    mapStateToProps
)(AddLook);

export default reduxForm({
  form: 'AddLook' // a unique identifier for this form
})(AddLook)
