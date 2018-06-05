import React from 'react'
import './search.css';
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
    console.log(values)
    // if(values.length === 0) hide, otherwise setState
    this.setState({searchString: values})
  }

  onClick(values) {
    this
      .props
      .dispatch(setSearch(false))
  }

  onSubmit(editState, string, values) {
    this
      .props
      .dispatch(setSearch(editState))

    if (this.props.kind === "Products") {
      this
        .props
        .dispatch(fetchProducts(this.props.requestedUser, string, values))
    } else {
      this
        .props
        .dispatch(fetchLooks(this.props.requestedUser, string, values))
    }

  }

  render() {
    console.log(this.state.searchString, ' do you haeve kind? ', this.props.kind)
    return (

      <form
        className="search"
        onSubmit=
        {this.props.handleSubmit(values => this.onSubmit(true, this.state.searchString, values))}>
        <div className="searchContainer">

          <input
            type="search"
            placeholder={`Search ${this.props.kind}`}
            ref={input => (this.input = input)}
            onChange={(e) => this.onChange(e.target.value)}/>
        </div>
        {this.state.searchString != undefined && this.props.kind === 'Products'
          ? <div className="radioContainer">
              <label>
                <Field name="searchType" component="input" type="radio" value="brand"/>{' '}
                Brand
              </label>
              <label>
                <Field name="searchType" component="input" type="radio" value="name"/>{' '}
                Product Name
              </label>
              <label>
                <Field name="searchType" component="input" type="radio" value="category"/>{' '}
                Category
              </label>
              <label>
                <Field name="searchType" component="input" type="radio" value="shade"/>{' '}
                Shade
              </label>
            </div>
          : ''}
        {this.state.searchString && this.props.kind === 'Looks'
          ? <div className="radioContainer">
              <label>
                <Field name="searchType" component="input" type="radio" value="name"/>{' '}
                Look Name
              </label>
              <label>
                <Field name="searchType" component="input" type="radio" value="products"/>{' '}
                Products Used
              </label>
            </div>
          : ''}
        {this.state.searchString != undefined
          ? <span className="hrCenter searchButtons">
              <button  type="submit">Search</button>
              <button type="button" onClick={() => this.onClick(false)}>
                Clear</button>
            </span>
          : ''}

      </form>
    )
  }
}

const mapStateToProps = (main) => ({search: main.dash.search, products: main.main.products, requestedUser: main.dash.requestedUser});

ReduxSearch = connect(mapStateToProps)(ReduxSearch);

export default reduxForm({
  form: 'ReduxSearch' // a unique identifier for this form
})(ReduxSearch)
