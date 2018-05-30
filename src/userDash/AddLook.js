import React from 'react'
// import './loginbox.css';
import {Field, reduxForm} from 'redux-form'
import {setEditing} from '../actions/dashActions'
import { connect } from 'react-redux';

export class AddLook extends React.Component {
  
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


  render() {
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
          <label htmlFor="productSearch">Choose your products</label>
          <Field
          component="input"
          type="text"
          name="productSearch"
          id="productSearch"
          placeholder="Nars HeatWave"/>

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
    products: main.main.products
    // ...
});

AddLook = connect(
    mapStateToProps
)(AddLook);

export default reduxForm({
  form: 'AddLook' // a unique identifier for this form
})(AddLook)
