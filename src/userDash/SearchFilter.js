import React from 'react'
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/landingActions'
import { setSearch } from '../actions/dashActions';

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  searchString: null
    }
  }

  onChange(values){
    this.setState({
      searchString: values
    })
  }

  onSubmit(event) {
event.preventDefault
debugger
// this.props.dispatch(setSearch(true))

this
        .props
        .dispatch(fetchProducts(this.props.requestedUser, this.state.searchString))
    }
  

  render() {

if (!this.props.dispatch) return <h1>UNCONNECTED</h1>

return (

      <form onSubmit = {(event) => this.onSubmit(event)}>
      <h2>Search by Brand</h2>
 <input type="search" ref={input => (this.input = input)} onChange={(e) => this.onChange(e.target.value)} />
        <button type="submit" >Search</button>
      </form>
    )
  }
}
  const mapStateToProps = main => ({requestedUser: main.dash.requestedUser});

  export default connect(mapStateToProps)(Search);