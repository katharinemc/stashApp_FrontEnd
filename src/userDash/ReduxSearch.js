import React from 'react'
// import './loginbox.css';
import {Field, reduxForm} from 'redux-form'
import {setEditing, sendEditLook, addToLookSearch, sendNewLook} from '../actions/dashActions'
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/landingActions'

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

  onSubmit(values) {
    console.log(values)
    this
        .props
        .dispatch(fetchProducts(this.props.requestedUser, values))

 }

  render() {
      console.log(this.props.products, this.props.search, this.props.requestedUser)
    return (

<form onSubmit = {this.props.handleSubmit(values => this.onSubmit(this.state.searchString))}>
<h2>Search by Brand</h2>
<input type="search" ref={input => (this.input = input)} onChange={(e) => this.onChange(e.target.value)} />
  <button type="submit" >Search</button>
</form>
)
}
}

          
 
const mapStateToProps = (main) => ({
  products: main.main.products,   requestedUser: main.dash.requestedUser
});

ReduxSearch = connect(mapStateToProps)(ReduxSearch);

export default reduxForm({
  form: 'ReduxSearch' // a unique identifier for this form
})(ReduxSearch)
