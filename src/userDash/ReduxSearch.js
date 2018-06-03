import React from 'react'
// import './loginbox.css';
import {Field, isPristine, reduxForm} from 'redux-form'
import {setEditing, sendEditLook, addToLookSearch, sendNewLook, setSearch} from '../actions/dashActions'
import {connect} from 'react-redux';
import {fetchProducts, fetchLooks} from '../actions/landingActions'

export class ReduxSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: null
    }
  }

  onChange(values) {
    this.setState({searchString: values})
  }

  onClick(values) {
    this.props.dispatch(setSearch(false))
  }

  onSubmit(editState, string, values) {
this.props.dispatch(setSearch(editState))

if(this.props.kind === "Products"){
  this
  .props
  .dispatch(fetchProducts(this.props.requestedUser, string, values))
} else {
  console.log('search looks')
  this.props.dispatch(fetchLooks(this.props.requestedUser, string, values))
}

 }

  render() {
    console.log(this.props.results)
    return (

<form onSubmit = {this.props.handleSubmit(values => this.onSubmit(true, this.state.searchString, values))}>
<h2>Search {this.props.kind}</h2>
<input type="search" ref={input => (this.input = input)} onChange={(e) => this.onChange(e.target.value)} />

{this.props.kind === 'Products' ? <div> <label>
            <Field
              name="searchType"
              component="input"
              type="radio"
              value="brand"
            />{' '}
            Brand
          </label>
          <label>
            <Field
              name="searchType"
              component="input"
              type="radio"
              value="name"
            />{' '}
            Product Name
          </label>
          <label>
            <Field
              name="searchType"
              component="input"
              type="radio"
              value="category"
            />{' '}
           Category
          </label>
          <label>
            <Field
              name="searchType"
              component="input"
              type="radio"
              value="shade"
            />{' '}
            Shade
          </label> </div> :   <div>  <label>
            <Field
              name="searchType"
              component="input"
              type="radio"
              value="name"
            />{' '}
           Look Name
          </label>
          <label>
            <Field
              name="searchType"
              component="input"
              type="radio"
              value="products"
            />{' '}
            Products Used
          </label></div>}
  <button type="submit" >Search</button> <button  type="button" onClick={() => this.onClick(false)}>
          Clear Search</button>

</form>
)
}
}

          
 
const mapStateToProps = (main) => ({
search:main.dash.search,  products: main.main.products,   requestedUser: main.dash.requestedUser
});

ReduxSearch = connect(mapStateToProps)(ReduxSearch);

export default reduxForm({
  form: 'ReduxSearch' // a unique identifier for this form
})(ReduxSearch)
